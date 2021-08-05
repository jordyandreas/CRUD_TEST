import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ToastAndroid,
    Alert
} from 'react-native';

import {
    setId,
    setFirstName,
    setLastName,
    setAge,
    setPhoto,
    setDataContact
} from '../redux/action'

import axios from 'axios'
import linkCRUD from '../helper/globalServices'
import { store } from '../redux/store'
import { styleGlobal } from '../helper/globalStyle'
import IonIcons from 'react-native-vector-icons/Ionicons';

const ContactDetail = ({ navigation }) => {
    const [form, setForm] = useState({
        id: store.getState().Id,
        firstNameUpd: store.getState().FirstName,
        lastNameUpd: store.getState().LastName,
        ageUpd: store.getState().Age,
        photoUpd: store.getState().Photo,
    });
    const [isEdit, setIsEdit] = useState(false);

    const onChangeText = (e, type) => {
        setForm({
            ...form,
            [type]: e
        });
    }

    const confirmDelete = () => {
        Alert.alert(
            "Delete this contact?",
            "",
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Delete', onPress: () => deleteContact()
                },
            ],
            { cancelable: false }
        )
    }

    const deleteContact = () => {
        axios.delete(linkCRUD.link + 'contact/' + store.getState().Id)
            .then(res => {
                //console.log(res);
                //console.log(res.data);
                // console.log("data nih brooo", res.data.data);
                ToastAndroid.show("Contact Deleted", ToastAndroid.SHORT)

            }).catch(error => {
                //console.log('test', error.response.data)
                let errMsg = error.response.data.message
                ToastAndroid.show(errMsg, ToastAndroid.SHORT)
            })
    }

    const confirmEditData = () => {
        if (form.firstNameUpd === "" && form.lastNameUpd === "" && form.ageUpd === "" && form.photoUpd === "") {
            ToastAndroid.show('Kontak tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.firstNameUpd === "") {
            ToastAndroid.show('First Name tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.firstNameUpd.length < 3) {
            ToastAndroid.show('First Name harus 3 atau lebih karakter', ToastAndroid.SHORT)
        } else if (form.lastNameUpd === "") {
            ToastAndroid.show('Last Name tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.lastNameUpd.length < 3) {
            ToastAndroid.show('Last Name harus 3 atau lebih karakter', ToastAndroid.SHORT)
        } else if (form.ageUpd === "") {
            ToastAndroid.show('Kolom umur tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.ageUpd === "") {
            ToastAndroid.show('Kolom umur tidak boleh kosong', ToastAndroid.SHORT)
        } else if (form.ageUpd < 1) {
            ToastAndroid.show('Umur harus lebih atau sama dengan 1 tahun', ToastAndroid.SHORT)
        } else if (form.ageUpd > 200) {
            ToastAndroid.show('Umur tidak boleh lebih dari 200 tahun', ToastAndroid.SHORT)
        } else if (form.photo === "") {
            ToastAndroid.show('Kolom photo tidak boleh kosong', ToastAndroid.SHORT)
        } else {
            Alert.alert(
                "Are you sure edit this contact?",
                "",
                [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Yes', onPress: () => editContact()
                    },
                ],
                { cancelable: false }
            )
        }
    }

    const editContact = () => {
        axios.put(linkCRUD.link + 'contact/' + form.id, {
            firstName: form.firstNameUpd,
            lastName: form.lastNameUpd,
            age: form.ageUpd,
            photo: form.photoUpd
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                //console.log(res);
                //console.log('data contactid', res.data.data);
                let dataEdit = res.data.data
                store.dispatch(setFirstName(dataEdit.firstName))
                store.dispatch(setLastName(dataEdit.lastName))
                store.dispatch(setAge(dataEdit.age.toString()))
                store.dispatch(setPhoto(dataEdit.photo))
                ToastAndroid.show('Berhasil edit kontak', ToastAndroid.SHORT)
                setForm({
                    firstNameUpd: store.getState().FirstName,
                    lastNameUpd: store.getState().LastName,
                    ageUpd: store.getState().Age,
                    photoUpd: store.getState().Photo,
                });
            }).catch(error => {
                //console.log('err123', error.response.data)
                let errMsg = error.response.data.message
                ToastAndroid.show(errMsg, ToastAndroid.SHORT)
            })
    }


    const btnEditContact = () => {
        if (isEdit === false) {
            return (
                <TouchableOpacity style={styleGlobal.btnEditContact} onPress={() => { setIsEdit(true) }}>
                    <IonIcons name="create-outline" size={25} color='#000' />
                    <Text style={styleGlobal.txtBtnEdit}>Edit Contact</Text>
                </TouchableOpacity>
            )
        }
    }

    const viewEditContact = () => {
        if (isEdit === true) {
            return (
                <>
                    {/* <View style={styleGlobal.greyLine} /> */}
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.firstNameUpd}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="First Name"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="default"
                            maxLength={55}
                            onChangeText={(e) => onChangeText(e, 'firstNameUpd')}
                        />
                    </View>
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.lastNameUpd}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="Last Name"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="default"
                            maxLength={55}
                            onChangeText={(e) => onChangeText(e, 'lastNameUpd')}
                        />
                    </View>
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.ageUpd}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="Age"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="numeric"
                            maxLength={3}
                            onChangeText={(e) => onChangeText(e, "ageUpd")}
                        />
                    </View>
                    <View style={styleGlobal.viewInputBoxText}>
                        <TextInput
                            style={styleGlobal.inputBoxText}
                            value={form.photoUpd}
                            returnKeyType='next'
                            autoCorrect={false}
                            placeholder="Insert Photo"
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            keyboardType="default"
                            onChangeText={(e) => onChangeText(e, 'photoUpd')}
                        />
                    </View>
                </>
            )
        }
    }

    return (
        <View style={styleGlobal.flexContainer}>
            <View style={styleGlobal.viewHeaderModal}>
                <View style={styleGlobal.viewMainHeaderModal}>
                    <TouchableOpacity onPress={() => isEdit === false ? navigation.goBack() : setIsEdit(false)}>
                        <View style={styleGlobal.viewHeaderBackModal}>
                            <IonIcons name={isEdit === false ? "md-arrow-back" : "close-sharp"} size={25} color='#000' />
                        </View>
                    </TouchableOpacity>
                    <View style={styleGlobal.viewHeaderTitle}>
                        <Text style={styleGlobal.textHeader}>{isEdit === false ? 'Detail Contact' : 'Edit Contact'}</Text>
                    </View>
                    <View style={styleGlobal.viewRightModal}>
                        <TouchableOpacity
                            onPress={() => isEdit === false ? confirmDelete() : confirmEditData()}>
                            <IonIcons name={isEdit === false ? "trash-outline" : "checkmark-sharp"} size={25} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styleGlobal.viewAliJustify}>
                    {store.getState().Photo === "N/A" ?
                        <IonIcons name="person-circle" size={65} color='#e0e0e0' /> :
                        <Image style={styleGlobal.imageDetailStyle} source={{ uri: store.getState().Photo }} />
                    }

                    <Text numberOfLines={1} style={styleGlobal.txtNameDetail}>{`${store.getState().FirstName} ${store.getState().LastName}`}</Text>
                    <Text numberOfLines={1} style={styleGlobal.txtAgeDetail}>{store.getState().Age} years old</Text>
                </View>
                {viewEditContact()}
            </ScrollView>
            {btnEditContact()}
        </View>
    );

}

export default ContactDetail;
