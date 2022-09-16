import {StyleSheet} from 'react-native';

export const standardsStylesObject = {
    backgroundColor: "white",
    borderColor: "grey",
    color: "black",
    borderRadius: 5,
    borderWidth: 0.5,
    fontSizeNormal: 17,
};

const styles = StyleSheet.create({
    StandardText: {
        fontSize: standardsStylesObject.fontSizeNormal,
        padding: 6,
        color: standardsStylesObject.color
    },
    StandardContainer: {
        borderRadius: standardsStylesObject.borderRadius,
        borderWidth: standardsStylesObject.borderWidth,
        borderColor: standardsStylesObject.borderColor,
        backgroundColor: standardsStylesObject.backgroundColor,
        marginLeft: 10,
        marginRight: 10
    },
    headingDiv: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#855BE2',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin:10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    fullWidth:{
        width:'100%'
    },
    center: {
        justifyContent:'center'
    },
    headingText: {
        fontSize: 30
    },
    rowFlex: {
        flexDirection: "row"
    },
    colFlex: {
        flexDirection: "column"
    },
    spaceBetween: {
        justifyContent: "space-between"
    },
    statsDiv: {
        flex: 3,
        width: '100%',
        marginn: 10,
        borderRadius:5
    },
    itemCard: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        padding: 20,
        alignSelf: 'stretch'
    },
    whiteBackground: {
        backgroundColor: 'white'
    },
    greenBackground: {
        backgroundColor: '#5DBE74'
    },
    orangeBackground: {
        backgroundColor: '#E1765A'
    },
    greyBackGround: {
        backgroundColor: '#8F9A9D'
    },
    darkgreyBackGround: {
        backgroundColor: '#1D1D1D'
    },
    purpleBackGround: {
        backgroundColor: '#855BE2'
    },
    blackBackGround: {
        backgroundColor: 'black'
    },
    blueBackGround: {
        backgroundColor: '#66CEFF'
    },
    yellowBackGround: {
        backgroundColor: '#E3D45A'
    },
    roundBorder: {
        borderRadius: 20
    }
});

export default styles