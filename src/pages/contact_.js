import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Modal,
    TextInput,
    ToastAndroid
} from 'react-native';

import {
    setId,
    setFirstName,
    setLastName,
    setAge,
    setPhoto,
    setDataContact
} from '../redux/action'
import { store } from '../redux/store';

import axios from 'axios'
import linkCRUD from '../helper/globalServices'
import { styleGlobal } from '../helper/globalStyle'
import IonIcons from 'react-native-vector-icons/Ionicons';

const Contact = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataContact, setDataContact] = useState([]);
    const [form, setForm] = useState({
        contactID: "",
        firstName: "",
        lastName: "",
        age: "",
        photo: "",
    });
    const [isInsertModalVisible, setIsInsertModalVisible] = useState(false);

    const onChangeText = (e, type) => {
        setForm({
            ...form,
            [type]: e
        });
    }

    useEffect(() => {
        console.log('hit')
        getData();
        navigation.addListener('focus', () => {
            getData()
        });
    }, []);

    const getData = () => {
        setIsLoading(true);
        axios.get(linkCRUD.link + 'contact')
            .then(res => {
                let response = res.data.data;
                console.log(response)
                setDataContact(response);
                setIsLoading(false);
            }).catch(error => {
                let errMsg = error.response.data.message;
                ToastAndroid.show(errMsg, ToastAndroid.SHORT);
            })
    };

    const GetContactByID = () => {
        if (form.contactID === "") {
            ToastAndroid.show('Kolom ID tidak boleh kosong', ToastAndroid.SHORT)
        } else {
            axios.get(linkCRUD.link + 'contact/' + form.contactID)
                .then(res => {
                    let dataSearch = res.data.data
                    store.dispatch(setId(dataSearch.id));
                    store.dispatch(setFirstName(dataSearch.firstName));
                    store.dispatch(setLastName(dataSearch.lastName));
                    store.dispatch(setAge(dataSearch.age.toString()));
                    store.dispatch(setPhoto(dataSearch.photo));
                    navigation.navigate('ContactDetail');
                    setForm({
                        contactID: '',
                    });
                }).catch(error => {
                    let errMsg = error.response.data.message
                    ToastAndroid.show(errMsg, ToastAndroid.SHORT)
                })
        }
    }

    const goToDetail = (index) => {
        store.dispatch(setId(dataContact[index].id));
        store.dispatch(setFirstName(dataContact[index].firstName));
        store.dispatch(setLastName(dataContact[index].lastName));
        store.dispatch(setAge(dataContact[index].age.toString()));
        store.dispatch(setPhoto(dataContact[index].photo));
        navigation.navigate('ContactDetail');
    }

    const confirmInsertData = () => {
        if (form.firstName === "" && form.lastName === "" && form.age === "" && form.photo === "") {
            ToastAndroid.show('Kontak tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.firstName === "") {
            ToastAndroid.show('First Name tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.firstName.length < 3) {
            ToastAndroid.show('First Name harus 3 atau lebih karakter', ToastAndroid.SHORT)
        } else if (form.lastName === "") {
            ToastAndroid.show('Last Name tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.lastName.length < 3) {
            ToastAndroid.show('Last Name harus 3 atau lebih karakter', ToastAndroid.SHORT)
        } else if (form.age === "") {
            ToastAndroid.show('Kolom umur tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.age === "") {
            ToastAndroid.show('Kolom umur tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.age < 1) {
            ToastAndroid.show('Umur harus lebih atau sama dengan 1 tahun', ToastAndroid.SHORT)
        } else if (form.age > 200) {
            ToastAndroid.show('Umur tidak boleh lebih dari 200 tahun', ToastAndroid.SHORT)
        } else if (form.photo === "") {
            ToastAndroid.show('Kolom photo tidak boleh kosong', ToastAndroid.SHORT)
        } else {
            insertData();
        }
    }

    const insertData = () => {
        axios.post(linkCRUD.link + 'contact', {
            firstName: form.firstName,
            lastName: form.lastName,
            age: form.age,
            photo: form.photo
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                ToastAndroid.show('Contact saved', ToastAndroid.SHORT)
                setForm({
                    firstName: '',
                    lastName: '',
                    age: '',
                    photo: '',
                });
                openModal();
                getData();
            })
            .catch(error => {
                let errMsg = error.response.data.message
                ToastAndroid.show(errMsg, ToastAndroid.SHORT)
            });
    }

    const openModal = () => {
        setIsInsertModalVisible(!isInsertModalVisible)
    }

    const modalInsert = () => {
        return (
            <Modal visible={isInsertModalVisible}
                animationType={"slide"} transparent={true}
                onRequestClose={() => { openModal() }}>
                <View style={styleGlobal.flexContainer}>
                    <View style={styleGlobal.viewHeaderModal}>
                        <View style={styleGlobal.viewMainHeaderModal}>
                            <TouchableOpacity onPress={() => openModal()} >
                                <View style={styleGlobal.viewHeaderBackModal}>
                                    <IonIcons name="md-arrow-back" size={25} color='#000' />
                                </View>
                            </TouchableOpacity>
                            <View style={styleGlobal.viewHeaderTitle}>
                                <Text style={styleGlobal.textHeader}>Insert New Contact</Text>
                            </View>

                            <View style={styleGlobal.viewRightModal}>
                                <TouchableOpacity
                                    onPress={() => { confirmInsertData() }}>
                                    <IonIcons name="checkmark-sharp" size={27} color='#000' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <IonIcons name="person-circle" size={60} color='#e0e0e0' style={styleGlobal.iconPhoto} />
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.firstName}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="First Name"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="default"
                            maxLength={55}
                            onChangeText={(e) => onChangeText(e, 'firstName')}
                        />
                    </View>
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.lastName}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="Last Name"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="default"
                            maxLength={55}
                            onChangeText={(e) => onChangeText(e, 'lastName')}
                        />
                    </View>
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.age}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="Age"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="numeric"
                            maxLength={3}
                            onChangeText={(e) => onChangeText(e, 'age')}
                        />
                    </View>
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.photo}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="Insert Photo"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="default"
                            onChangeText={(e) => onChangeText(e, 'photo')}
                        />
                    </View>
                </View>
            </Modal>
        )
    }

    const buttonAddContact = () => {
        return (
            <TouchableOpacity style={styleGlobal.btnAddContact}
                onPress={() => { openModal() }}
            >
                <IonIcons name="add-outline" size={35} color={'#fff'} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styleGlobal.flexContainer}>
            <View style={styleGlobal.viewInputBoxText_}>
                <TextInput
                    style={styleGlobal.inputBoxText}
                    value={form.contactID}
                    autoCorrect={false}
                    placeholder="Search Contact By ID"
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    keyboardType="default"
                    onChangeText={(e) => onChangeText(e, "contactID")}
                />
                <TouchableOpacity onPress={() => GetContactByID()}>
                    <IonIcons name="search-circle-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
            <Text style={styleGlobal.txtAllContact}>All Contacts</Text>
            {isLoading === true ?
                <ActivityIndicator animating={isLoading} color={'#15ADE4'} style={styleGlobal.loading} /> :
                <FlatList
                    data={dataContact}
                    keyExtractor={(key, index) => key + index.toString()}
                    renderItem={({ item, index }) => {
                        const FullName = `${item.firstName} ${item.lastName}`
                        return (
                            <TouchableOpacity style={styleGlobal.btnViewDetail}
                                onPress={() => goToDetail(index)}>
                                <View style={styleGlobal.viewImageContact}>
                                    {item.photo === "N/A" ?
                                        <IonIcons name="person-outline" size={27} color='#000' />
                                        :
                                        <Image style={styleGlobal.imageContactStyle} source={{ uri: item.photo }} />
                                    }
                                </View>
                                <View style={styleGlobal.viewFullNameContact}>
                                    <Text numberOfLines={2} style={styleGlobal.txtFullNameContact}>{FullName}</Text>
                                </View>
                            </TouchableOpacity >
                        )
                    }
                    }
                />
            }
            {modalInsert()}
            {buttonAddContact()}
        </View>
    );
}

export default Contact;
