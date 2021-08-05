import { StyleSheet, Dimensions } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export const styleGlobal = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    loading: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 0,
        // bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewInputBoxText: {
        width: ScreenWidth * 0.9,
        height: ScreenHeight * 0.06,
        backgroundColor: '#E1E1E1',
        marginBottom: ScreenWidth * 0.025,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: ScreenWidth * 0.01,
        paddingVertical: 3,
        justifyContent: 'center', alignSelf: 'center', alignItems: 'center'
    },

    viewInputBoxText_: {
        width: ScreenWidth * 0.95,
        height: ScreenHeight * 0.06,
        backgroundColor: '#E1E1E1',
        margin: ScreenWidth * 0.025,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: ScreenWidth * 0.01,
        paddingVertical: 3,
        justifyContent: 'center', alignSelf: 'center', alignItems: 'center'
    },

    inputBoxText: {
        width: ScreenWidth * 0.8,
        height: ScreenHeight * 0.06,
        // backgroundColor: 'red',
        color: 'rgba(0,0,0,1)',
        // paddingHorizontal: ScreenWidth * 0.05,
        borderRadius: 2,
        fontSize: 12,
        textAlignVertical: 'center',
        marginVertical: -3,
        paddingVertical: 1,
    },

    //modal
    viewHeaderModal: {
        width: ScreenWidth,
        height: ScreenWidth * 0.175,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    viewMainHeaderModal: {
        width: ScreenWidth * 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },

    viewHeaderBackModal: {
        width: ScreenWidth * 0.10,
    },

    viewHeaderTitle: {
        width: ScreenWidth * 0.70,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },

    textHeader: {
        fontSize: ScreenWidth * 0.0425,
        fontWeight: 'bold',
        color: '#000',
    },

    viewRightModal: {
        width: ScreenWidth * 0.10,
        alignItems: 'flex-end',
    },

    viewRightModal2: {
        width: ScreenWidth * 0.80,
        alignItems: 'flex-end',
    },

    txtNameDetail: {
        fontSize: ScreenWidth * 0.045,
        color: '#000',
        fontWeight: 'bold'
    },

    txtAgeDetail: {
        fontSize: ScreenWidth * 0.0375,
        color: '#000',
        marginBottom: 15,
    },

    txtEdit: {
        fontSize: ScreenWidth * 0.0375,
        color: '#000',
    },

    viewAliJustify: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ScreenWidth * 0.0125,
        // backgroundColor:'red'
    },

    //button
    btnStyle: {
        elevation: 3, // Android
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#15ADE4',
        width: ScreenWidth * 0.8,
        height: ScreenHeight * 0.05,
        alignSelf: 'center',
        alignItems: 'center',
    },

    txtBtnStyle: {
        color: '#FFF',
        fontWeight: 'bold'
    },

    greyLine: {
        marginTop: 10,
        marginBottom: 15,
        width: ScreenWidth,
        borderBottomColor: '#DFDFDF',
        borderBottomWidth: 2.5,
        alignSelf: 'center'
    },

    //menu contact
    btnAddContact: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 50,
        width: ScreenWidth * 0.125,
        height: ScreenWidth * 0.125,
        backgroundColor: '#15ADE4',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtAllContact: {
        textAlign: 'left',
        fontSize: ScreenWidth * 0.04,
        fontWeight: 'bold',
        margin: ScreenWidth * 0.0125
    },

    btnViewDetail: {
        width: ScreenWidth * 0.95,
        height: ScreenWidth * 0.15,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: ScreenWidth * 0.01,
        marginBottom: ScreenWidth * 0.01,
        borderRadius: 8,
        backgroundColor: '#E1E1E1'
    },

    viewImageContact: {
        width: ScreenWidth * 0.175,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContactStyle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: ScreenWidth * 0.01,
    },

    viewFullNameContact: {
        width: ScreenWidth * 0.825,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    txtFullNameContact: {
        margin: ScreenWidth * 0.025,
        fontSize: ScreenWidth * 0.0335,
        color: '#000'
    },

    //detail contact

    imageDetailStyle: {
        width: 100, height: 100, borderRadius: 50, margin: ScreenWidth * 0.01,
    },

    txtEditContact: {
        textAlign: 'left',
        fontSize: ScreenWidth * 0.0425,
        fontWeight: 'bold',
        margin: ScreenWidth * 0.0125
    },

    margin25: {
        margin: ScreenWidth * 0.025
    },

    iconPhoto:{
        alignSelf: 'center', margin: ScreenWidth * 0.020,
    },

    btnEditContact:{
        position: 'absolute',
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },

    txtBtnEdit: {
        color: '#000',
        fontWeight: '500'
    },

})