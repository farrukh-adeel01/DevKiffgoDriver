import {Platform} from 'react-native';
import {Metrics, Colors} from './';
import Fonts from './Fonts';

// @flow

const flex = {
  flex: 1,
};
const flex2 = {
  flex: 2,
};
const flex3 = {
  flex: 3,
};
const flex4 = {
  flex: 4,
};
const flex7 = {
  flex: 7,
};
const flex10 = {
  flex: 10,
};
const flexRow = {
  flexDirection: 'row',
};
const spaceBetween = {
  justifyContent: 'space-between',
};
const spaceAround = {
  justifyContent: 'space-around',
};
const justifyContentCenter = {
  justifyContent: 'center',
};

/* const shadow1 = {
  shadowColor: "rgba(76, 76, 76, 0.26)",
  shadowOffset: {
    width: 0,
    height: 8
  },
  shadowOpacity: 0.44,
  shadowRadius: 10.32,
  elevation: 16
}; */

const shadow1 = {
  shadowColor: Colors.grey5,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3.84,

  elevation: 5,
};

const shadow2 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.84,

  elevation: 2,
};

const shadow3 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
};

const emptyListContainerStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

// Margins
// Margin TOP
const mTop0 = {
  marginTop: 0,
};
const lHeight20 = {
  lineHeight: 20,
};
const lHeight22 = {
  lineHeight: 22,
};
const lHeight10 = {
  lineHeight: 15,
};
const mTop2 = {
  marginTop: 2,
};
const mTop5 = {
  marginTop: 5,
};
const mTop10 = {
  marginTop: 10,
};
const mTop100 = {
  marginTop: 100,
};
const mTop15 = {
  marginTop: 15,
};
const mTop20 = {
  marginTop: 20,
};
const mTop200 = {
  marginTop: 200,
};
const mTop25 = {
  marginTop: 25,
};
const mTop30 = {
  marginTop: 30,
};
const mTop300 = {
  marginTop: 300,
};
const mTop35 = {
  marginTop: 35,
};
const mTop40 = {
  marginTop: 40,
};
const mTop50 = {
  marginTop: 50,
};
const mTop60 = {
  marginTop: 60,
};
const mTop400 = {
  marginTop: 400,
};
const mTopBase = {
  marginTop: Metrics.baseMargin,
};

// Margin BOTTOM
const mBottom0 = {
  marginBottom: 0,
};
const mBottom5 = {
  marginBottom: 5,
};
const mBottom10 = {
  marginBottom: 10,
};
const mBottom15 = {
  marginBottom: 15,
};
const mBottom20 = {
  marginBottom: 20,
};
const mBottom25 = {
  marginBottom: 25,
};
const mBottom30 = {
  marginBottom: 30,
};

const mBottom35 = {
  marginBottom: 35,
};

const mBottom40 = {
  marginBottom: 40,
};
const mBottom45 = {
  marginBottom: 45,
};
const mBottom50 = {
  marginBottom: 50,
};
const mBottomBase = {
  marginBottom: Metrics.baseMargin,
};
const mBottomListBottom = {marginBottom: Metrics.listBottomPadding};

// Margin RIGHT
const mRight0 = {
  marginRight: 0,
};
const mRight5 = {
  marginRight: 5,
};
const mRight10 = {
  marginRight: 10,
};

const height200 = {
  height: 200,
};
const mRight15 = {
  marginRight: 15,
};
const mRight20 = {
  marginRight: 20,
};
const mRight25 = {
  marginRight: 25,
};
const mRight30 = {
  marginRight: 30,
};
const mRight40 = {
  marginRight: 40,
};
const mRightBase = {
  marginRight: Metrics.baseMargin,
};

// Margin LEFT
const mLeft0 = {
  marginLeft: 0,
};
const mLeft5 = {
  marginLeft: 5,
};
const mLeft10 = {
  marginLeft: 10,
};
const mLeft15 = {
  marginLeft: 15,
};
const mLeft20 = {
  marginLeft: 20,
};
const mLeft25 = {
  marginLeft: 25,
};
const mLeft30 = {
  marginLeft: 30,
};
const mLeftBase = {
  marginLeft: Metrics.baseMargin,
};
// Margin ALL SIDES
const margin5 = {
  margin: 5,
};
const margin10 = {
  margin: 10,
};
const margin100 = {
  margin: 100,
};
const margin15 = {
  margin: 15,
};
const margin20 = {
  margin: 20,
};
const margin200 = {
  margin: 200,
};
const margin25 = {
  margin: 25,
};
const margin30 = {
  margin: 30,
};
const margin300 = {
  margin: 300,
};
const marginHorizontalBase = {
  marginRight: Metrics.baseMargin,
  marginLeft: Metrics.baseMargin,
};
const marginHorizontalsmall = {
  marginRight: Metrics.baseMargin,
  marginLeft: Metrics.baseMargin,
};

const marginVerticalBase = {
  marginTop: Metrics.baseMargin,
  marginBottom: Metrics.baseMargin,
};

// Padding
// padding TOP
const pTop0 = {
  paddingTop: 0,
};
const pTop5 = {
  paddingTop: 5,
};
const pTop10 = {
  paddingTop: 10,
};
const pTop15 = {
  paddingTop: 15,
};
const pTop20 = {
  paddingTop: 20,
};
const pTop25 = {
  paddingTop: 25,
};
const pTop30 = {
  paddingTop: 30,
};
const pTop50 = {
  paddingTop: 50,
};
const pTopBase = {
  paddingTop: Metrics.baseMargin,
};
// padding BOTTOM
const pBottom0 = {
  paddingBottom: 0,
};
const pBottom5 = {
  paddingBottom: 5,
};
const pBottom10 = {
  paddingBottom: 10,
};
const pBottom15 = {
  paddingBottom: 15,
};
const pBottom20 = {
  paddingBottom: 20,
};
const pBottom25 = {
  paddingBottom: 25,
};
const pBottom30 = {
  paddingBottom: 30,
};
const pBottom55 = {
  paddingBottom: 55,
};
const pBottom100 = {
  paddingBottom: 100,
};
const pTopBottom = {
  paddingTop: Metrics.baseMargin,
};
const pBottomBase = {
  paddingBottom: Metrics.baseMargin,
};

const pBottomListBottom = {paddingBottom: Metrics.listBottomPadding};
const pBottomListBottomWithTabbar = {
  paddingBottom: Metrics.listBottomPadding + Metrics.tabBarHeight,
};
// padding RIGHT
const pRight0 = {
  paddingRight: 0,
};
const pRight5 = {
  paddingRight: 5,
};
const pRight10 = {
  paddingRight: 10,
};
const pRight15 = {
  paddingRight: 15,
};
const pRight20 = {
  paddingRight: 20,
};
const pRight25 = {
  paddingRight: 25,
};
const pRight30 = {
  paddingRight: 30,
};
const pRight50 = {
  paddingRight: 50,
};
const pRightBase = {
  paddingRight: Metrics.baseMargin,
};
// padding LEFT
const pLeft0 = {
  paddingLeft: 0,
};
const pLeft5 = {
  paddingLeft: 5,
};
const pLeft10 = {
  paddingLeft: 10,
};
const pLeft15 = {
  paddingLeft: 15,
};
const pLeft20 = {
  paddingLeft: 20,
};
const pLeft25 = {
  paddingLeft: 25,
};
const pLeft30 = {
  paddingLeft: 30,
};
const pLeft50 = {
  paddingLeft: 50,
};
const pLeftBase = {
  paddingLeft: Metrics.baseMargin,
};
// padding ALL SIDES
const padding0 = {
  padding: 0,
};
const padding5 = {
  padding: 5,
};
const padding10 = {
  padding: 10,
};
const padding15 = {
  padding: 15,
};
const padding20 = {
  padding: 20,
};
const padding25 = {
  padding: 25,
};
const padding30 = {
  padding: 30,
};

// text align
const textAlignRight = {
  textAlign: 'right',
};

// font weight
const fontWeightBold = {
  fontWeight: 'bold',
};

// text align
const textAlignCenter = {
  textAlign: 'center',
};

// button style
const btnStyle1 = {
  paddingLeft: 36,
  paddingRight: 36,
  paddingTop: 7,
  paddingBottom: 7,
};
const btnStyle2 = {
  paddingLeft: 36,
  paddingRight: 36,
  paddingTop: 7,
  paddingBottom: 7,
};

const btnStyle3 = {
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: Colors.bitterSweet1,
};
const btnStyle4 = {
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: Colors.accent,
};
const btnGreen = {
  backgroundColor: Colors.accent,
  color: Colors.black,
  fontSize: Fonts.size.xiv,
  width: '65%',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const paddingHorizontalBase = {
  paddingRight: Metrics.baseMargin,
  paddingLeft: Metrics.baseMargin,
};

const paddingVerticalBase = {
  paddingTop: Metrics.baseMargin,
  paddingBottom: Metrics.baseMargin,
};

// styleConstantValue

const constant = {
  formInputSize: 17,
  labelSize: 15,
};
const letterSpace3 = {
  letterSpacing: 3,
};
//Text underLine
const textUnderline = {
  textDecorationLine: 'underline',
};
// styles
const centerInner = {
  justifyContent: 'center',
  alignItems: 'center',
};
const alignItemsCenter = {
  alignItems: 'center',
};
const baseAlign = {
  alignSelf: 'baseline',
};
const alignItemsFlexEnd = {
  alignItems: 'flex-end',
};

const basePadding = {
  padding: Metrics.baseMargin,
};
const baseMargin = {
  margin: Metrics.baseMargin,
};
const materialInputContainer = {
  paddingBottom: 45,
  borderBottomColor: Colors.border,
};
const materialInput = {
  marginTop: 5,
  // fontFamily: "Lato-Bold",
  color: Colors.text.primary,
};
const materialInputNoUnderline = {
  borderBottomWidth: 0,
};
const fontLato = {
  fontFamily: 'Lato',
};
const primaryBackground = {
  backgroundColor: Colors.background.primary,
};
const noBorderBottom = {
  borderBottomWidth: 0,
};

const borderRadius = {
  borderRadius: Metrics.borderRadius,
};

const separator = {
  borderBottomWidth: 1,
  borderColor: Colors.gary9,
};
const bgAccentLight = {
  backgroundColor: Colors.accentLight,
};

const logoImage = {width: 96, height: 112};

const buttonStyle1 = {
  color: Colors.white,
  backgroundColor: Colors.blue,
  height: 45,
  borderRadius: 45 / 2,
  ...centerInner,
};
const buttonStyle2 = {
  alignSelf: 'center',
  width: Metrics.screenWidth - 80,
  color: Colors.white,
  backgroundColor: Colors.blue,
  height: 45,
  borderRadius: 45 / 2,
  ...centerInner,
};

const textInputMaterialProps = {
  autoCorrect: false,
  selectionColor: Colors.grey3,
  autoCapitalize: 'sentences',
  enablesReturnKeyAutomatically: true,
  tintColor: Colors.text.primary,
  baseColor: Colors.text.primary,
  fontSize: constant.formInputSize,
  labelFontSize: constant.labelSize,
  style: materialInput,
};

const forwardIcon = {
  width: 9,
  height: 15,
};

const textInputMaterialProps2 = {
  autoCorrect: false,
  selectionColor: Colors.grey3,
  autoCapitalize: 'sentences',
  enablesReturnKeyAutomatically: true,
  tintColor: Colors.text.primary,
  baseColor: Colors.text.primary,
  fontSize: constant.formInputSize,
  labelFontSize: constant.labelSize,
  style: materialInput,
  inputContainerStyle: materialInputContainer,
};

const textInputMaterialNoUndelineProps = {
  inputContainerStyle: {borderBottomWidth: 0},
};

const roundedGreenButton = {
  style: {
    borderRadius: 45 / 2,
    backgroundColor: Colors.green,
    height: 45,
    shadowColor: Colors.green,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
  },
  textStyle: {
    fontFamily: Fonts.type.semiboldProximanova,
    letterSpacing: 1,
    fontSize: Fonts.size.small,
  },
  color: Colors.white,
};
const mapGreyTheme = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];
const boxShadow = {
  backgroundColor: 'white',
  shadowColor: Colors.black,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
  borderRadius: 4,
};

const timer = {
  ...boxShadow,
  marginHorizontal: 20,
  marginVertical: 20,
  paddingHorizontal: 20,
  paddingVertical: 15,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
};

const safeArea = {
  backgroundColor: Colors.background.primary,
  flex: 1,
};

export default {
  flex,
  flex2,
  flex3,
  flex4,
  flex7,
  flex10,
  flexRow,
  spaceBetween,
  spaceAround,
  shadow1,
  shadow2,
  shadow3,
  justifyContentCenter,
  emptyListContainerStyle,

  // Margins
  // Margin TOP
  mTop0,
  mTop2,
  mTop5,
  mTop10,
  mTop100,
  mTop15,
  mTop20,
  mTop200,
  mTop25,
  mTop30,
  mTop300,
  mTop35,
  mTop40,
  mTop50,
  mTop60,
  mTop400,
  mTopBase,

  // Margin BOTTOM
  mBottom0,
  mBottom5,
  mBottom10,
  mBottom15,
  mBottom20,
  mBottom25,
  mBottom30,
  mBottom35,
  mBottom40,
  mBottom45,
  mBottom50,
  pBottom100,
  mBottomBase,
  mBottomListBottom,
  // Margin RIGHT
  mRight0,
  mRight5,
  mRight10,
  mRight15,
  mRight20,
  mRight25,
  mRight30,
  mRight40,
  mRightBase,

  // Margin LEFT
  mLeft0,
  mLeft5,
  mLeft10,
  mLeft15,
  mLeft20,
  mLeft25,
  mLeft30,
  mLeftBase,
  // Margin ALL SIDES
  margin5,
  margin10,
  margin100,
  margin15,
  margin20,
  margin200,
  margin25,
  margin30,
  margin300,
  marginHorizontalBase,

  marginVerticalBase,
  marginHorizontalsmall,

  // Padding
  // padding TOP
  pTop0,
  pTop5,
  pTop10,
  pTop15,
  pTop20,
  pTop25,
  pTop30,
  pTop50,
  pTopBase,
  // padding BOTTOM
  pBottom0,
  pBottom5,
  pBottom10,
  pBottom15,
  pBottom20,
  pBottom25,
  pBottom30,
  pBottom55,
  pTopBottom,
  pBottomBase,
  pBottomListBottom,
  pBottomListBottomWithTabbar,
  // padding RIGHT
  pRight0,
  pRight5,
  pRight10,
  pRight15,
  pRight20,
  pRight25,
  pRight30,
  pRight50,
  pRightBase,
  // padding LEFT
  pLeft0,
  pLeft5,
  pLeft10,
  pLeft15,
  pLeft20,
  pLeft25,
  pLeft30,
  pLeft50,
  pLeftBase,
  // padding ALL SIDES
  padding0,
  padding5,
  padding10,
  padding15,
  padding20,
  padding25,
  padding30,
  paddingHorizontalBase,
  paddingVerticalBase,

  // styleConstantValue
  constant,
  letterSpace3,

  // styles
  logoImage,
  centerInner,
  alignItemsCenter,
  baseAlign,
  alignItemsFlexEnd,
  basePadding,
  baseMargin,
  materialInputContainer,
  materialInput,
  materialInputNoUnderline,
  primaryBackground,
  noBorderBottom,
  borderRadius,
  textInputMaterialProps,
  textInputMaterialProps2,
  textInputMaterialNoUndelineProps,
  roundedGreenButton,
  buttonStyle1,
  buttonStyle2,
  height200,
  lHeight20,
  lHeight22,
  lHeight10,
  forwardIcon,
  mapGreyTheme,
  separator,
  fontWeightBold,
  bgAccentLight,
  boxShadow,
  textAlignRight,
  textAlignCenter,
  btnStyle1,
  btnStyle2,
  btnStyle3,
  btnStyle4,
  btnGreen,
  timer,
  textUnderline,
  safeArea,
};
