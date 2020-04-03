import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import { isLT19 } from '../utils/ScreenUtil'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class Header extends PureComponent{

    // 构造器
    constructor(props){
        super(props);
        this.state = {

        };
    }

    // 设置默认输入参数
    static defaultProps = {
        leftText: '',
        centerText: '详情',
        showLeft: false,
        showRight: false
    };

    render() {
        return (
            <View style={styles.headerContainer}>
                {
                    this.props.showLeft ? (
                        <TouchableOpacity activeOpacity={.8} style={{flexDirection: 'row', alignItems: 'center', flex: 1}} onPress={()=>{ this.props.navigation.goBack() }}>
                            <Image source={require('./../../assets/images/i_goback.png')} resizeMode={'contain'} style={styles.headerLeftImg}/>
                            <Text style={{color: 'white', fontSize: 16}}>{this.props.leftText}</Text>
                        </TouchableOpacity>
                    ) : null
                }
                <View style={styles.headerCenterContainer}>
                    <Text style={styles.headerCenterText}>{this.props.centerText}</Text>
                </View>
                {
                    this.props.showRight ? (
                        <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={()=>{alert('24h')}}>
                        </TouchableOpacity>
                    ) : null
                }
            </View>
        );
    }

}



const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#0A60FB',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        paddingTop: isLT19()?0:25
    },
    headerLeftImg: {
        width: 25,
        height: 25,
    },
    headerCenterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
        flex: 4,
    },
    headerCenterText: {
        fontSize: 18,
        color: '#F8F8F8'
    },
    headerRightImg: {
        width: 40,
        height: 40,
    },

});