const { StyleSheet } = require("react-native");

export default styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems :'center',
        justifyContent : 'center',
        borderWidth:5
    },
    text : {
        fontSize:30,
        color:'black'
    },
    btn : {
        backgroundColor:'white',
        padding : 10,
        borderWidth : 1,
        borderRadius:10
    },
    btnText : {
        color :'black',
        fontSize : 20
    },
});

