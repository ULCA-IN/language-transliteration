require("./index.css");
var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
var $iA2ta$react = require("react");
var $iA2ta$textareacaret = require("textarea-caret");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "IndicTransliterate", () => $9233cea927cb9637$export$a62758b764e9e41d);
$parcel$export(module.exports, "TriggerKeys", () => $255051dee2ac5888$export$24b0ea3375909d37);



function $f80f1dd9b5148444$export$e27e3030245d4c9b() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}


function $177050d4431d3d97$export$8a4ff65f970d59a5(el) {
    const start = 0;
    const end = 0;
    if (!el) return {
        start: start,
        end: end
    };
    if (typeof el.selectionStart === "number" && typeof el.selectionEnd === "number") return {
        start: el.selectionStart,
        end: el.selectionEnd
    };
    return {
        start: start,
        end: end
    };
}
function $177050d4431d3d97$export$97ab23b40042f8af(elem, caretPos) {
    if (elem) {
        if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
    }
}





var $93be6bd4090454f8$exports = {};

$parcel$export($93be6bd4090454f8$exports, "ReactTransliterate", () => $93be6bd4090454f8$export$b7fa6c785ac95e64, (v) => $93be6bd4090454f8$export$b7fa6c785ac95e64 = v);
$parcel$export($93be6bd4090454f8$exports, "Active", () => $93be6bd4090454f8$export$c3c7cbf43a3f0561, (v) => $93be6bd4090454f8$export$c3c7cbf43a3f0561 = v);
var $93be6bd4090454f8$export$b7fa6c785ac95e64;
var $93be6bd4090454f8$export$c3c7cbf43a3f0561;
$93be6bd4090454f8$export$b7fa6c785ac95e64 = `vNSxFa_ReactTransliterate`;
$93be6bd4090454f8$export$c3c7cbf43a3f0561 = `vNSxFa_Active`;


const $255051dee2ac5888$export$24b0ea3375909d37 = {
    KEY_RETURN: "Enter",
    KEY_ENTER: "Enter",
    KEY_TAB: "Tab",
    KEY_SPACE: " "
};


const $608cec5a9c1fc3e0$export$f2288726d3d6940 = async (word, customApiURL, transliterationModelId)=>{
    let reqBody = {
        modelId: `${transliterationModelId}`,
        task: "transliteration",
        input: [
            {
                "source": `${word}`
            }
        ]
    };
    let reqHeader = {
        "content-type": "application/json"
    };
    const res = await fetch(customApiURL, {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: reqHeader
    });
    const response = await res.json();
    if (response && response?.output[0]?.target && response?.output[0]?.target?.length > 0) {
        let found = [
            ...response?.output[0]?.target,
            word
        ];
        return found;
    } else return [
        word
    ];
};


const $9233cea927cb9637$var$KEY_UP = "ArrowUp";
const $9233cea927cb9637$var$KEY_DOWN = "ArrowDown";
const $9233cea927cb9637$var$KEY_ESCAPE = "Escape";
const $9233cea927cb9637$var$OPTION_LIST_Y_OFFSET = 10;
const $9233cea927cb9637$var$OPTION_LIST_MIN_WIDTH = 100;
const $9233cea927cb9637$export$a62758b764e9e41d = ({ renderComponent: renderComponent = (props)=>/*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)("input", {
        ...props
    }) , lang: lang = "hi" , offsetX: offsetX = 0 , offsetY: offsetY = 10 , onChange: onChange , onChangeText: onChangeText , onBlur: onBlur , value: value , onKeyDown: onKeyDown , transliterationModelId: transliterationModelId , customApiURL: customApiURL , customSuggestions: customSuggestions , containerClassName: containerClassName = "" , containerStyles: containerStyles = {} , activeItemStyles: activeItemStyles = {} , suggestionListStyle: suggestionListStyle = {} , maxOptions: maxOptions = 5 , hideSuggestionBoxOnMobileDevices: hideSuggestionBoxOnMobileDevices = false , hideSuggestionBoxBreakpoint: hideSuggestionBoxBreakpoint = 450 , triggerKeys: triggerKeys = [
    (0, $255051dee2ac5888$export$24b0ea3375909d37).KEY_SPACE,
    (0, $255051dee2ac5888$export$24b0ea3375909d37).KEY_ENTER,
    (0, $255051dee2ac5888$export$24b0ea3375909d37).KEY_RETURN,
    (0, $255051dee2ac5888$export$24b0ea3375909d37).KEY_TAB
] , insertCurrentSelectionOnBlur: insertCurrentSelectionOnBlur = true , showCurrentWordAsLastSuggestion: showCurrentWordAsLastSuggestion = true , enabled: enabled = true , ...rest })=>{
    const [options, setOptions] = (0, $iA2ta$react.useState)([]);
    const [left, setLeft] = (0, $iA2ta$react.useState)(0);
    const [top, setTop] = (0, $iA2ta$react.useState)(0);
    const [selection, setSelection] = (0, $iA2ta$react.useState)(0);
    const [matchStart, setMatchStart] = (0, $iA2ta$react.useState)(-1);
    const [matchEnd, setMatchEnd] = (0, $iA2ta$react.useState)(-1);
    const inputRef = (0, $iA2ta$react.useRef)(null);
    const [windowSize, setWindowSize] = (0, $iA2ta$react.useState)({
        width: 0,
        height: 0
    });
    const [direction, setDirection] = (0, $iA2ta$react.useState)("ltr");
    const [googleFont, setGoogleFont] = (0, $iA2ta$react.useState)(null);
    const shouldRenderSuggestions = (0, $iA2ta$react.useMemo)(()=>hideSuggestionBoxOnMobileDevices ? windowSize.width > hideSuggestionBoxBreakpoint : true, [
        windowSize,
        hideSuggestionBoxBreakpoint,
        hideSuggestionBoxOnMobileDevices
    ]);
    const reset = ()=>{
        // reset the component
        setSelection(0);
        setOptions([]);
    };
    const handleSelection = (index, triggerKey = " ")=>{
        const currentString = value;
        // create a new string with the currently typed word
        // replaced with the word in transliterated language
        const newValue = currentString.substring(0, matchStart) + options[index] + " " + currentString.substring(matchEnd + 1, currentString.length);
        // set the position of the caret (cursor) one character after the
        // the position of the new word
        setTimeout(()=>{
            (0, $177050d4431d3d97$export$97ab23b40042f8af)(// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            inputRef.current, triggerKey === "Enter" ? matchStart + options[index].length : matchStart + options[index].length + 1);
        }, 1);
        // bubble up event to the parent component
        const e = {
            target: {
                value: newValue
            }
        };
        onChangeText(newValue);
        onChange && onChange(e);
        reset();
        return inputRef.current?.focus();
    };
    const renderSuggestions = async (lastWord)=>{
        if (!shouldRenderSuggestions) return;
        // fetch suggestion from api
        // const url = `https://www.google.com/inputtools/request?ime=transliteration_en_${lang}&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${lastWord}`;
        const numOptions = showCurrentWordAsLastSuggestion ? maxOptions - 1 : maxOptions;
        const data = await (0, $608cec5a9c1fc3e0$export$f2288726d3d6940)(lastWord, customApiURL, transliterationModelId);
        console.log("data ------ ", data);
        setOptions(data ? data : []);
    };
    const handleChange = (e)=>{
        const value = e.currentTarget.value;
        // bubble up event to the parent component
        onChange && onChange(e);
        onChangeText(value);
        if (!shouldRenderSuggestions) return;
        // get the current index of the cursor
        const caret = (0, $177050d4431d3d97$export$8a4ff65f970d59a5)(e.target).end;
        const input = inputRef.current;
        if (!input) return;
        const caretPos = (0, ($parcel$interopDefault($iA2ta$textareacaret)))(input, caret);
        // search for the last occurence of the space character from
        // the cursor
        const indexOfLastSpace = value.lastIndexOf(" ", caret - 1) < value.lastIndexOf("\n", caret - 1) ? value.lastIndexOf("\n", caret - 1) : value.lastIndexOf(" ", caret - 1);
        // first character of the currently being typed word is
        // one character after the space character
        // index of last character is one before the current position
        // of the caret
        setMatchStart(indexOfLastSpace + 1);
        setMatchEnd(caret - 1);
        // currentWord is the word that is being typed
        const currentWord = value.slice(indexOfLastSpace + 1, caret);
        if (currentWord && enabled) {
            // make an api call to fetch suggestions
            renderSuggestions(currentWord);
            const rect = input.getBoundingClientRect();
            // calculate new left and top of the suggestion list
            // minimum of the caret position in the text input and the
            // width of the text input
            const left = Math.min(caretPos.left, rect.width - $9233cea927cb9637$var$OPTION_LIST_MIN_WIDTH / 2);
            // minimum of the caret position from the top of the input
            // and the height of the input
            const top = Math.min(caretPos.top + $9233cea927cb9637$var$OPTION_LIST_Y_OFFSET, rect.height);
            setTop(top);
            setLeft(left);
        } else reset();
    };
    const handleKeyDown = (event)=>{
        const helperVisible = options.length > 0;
        if (helperVisible) {
            if (triggerKeys.includes(event.key)) {
                event.preventDefault();
                handleSelection(selection, event.key);
            } else switch(event.key){
                case $9233cea927cb9637$var$KEY_ESCAPE:
                    event.preventDefault();
                    reset();
                    break;
                case $9233cea927cb9637$var$KEY_UP:
                    event.preventDefault();
                    setSelection((options.length + selection - 1) % options.length);
                    break;
                case $9233cea927cb9637$var$KEY_DOWN:
                    event.preventDefault();
                    setSelection((selection + 1) % options.length);
                    break;
                default:
                    onKeyDown && onKeyDown(event);
                    break;
            }
        } else onKeyDown && onKeyDown(event);
    };
    const handleBlur = (event)=>{
        if (!(0, $f80f1dd9b5148444$export$e27e3030245d4c9b)()) {
            if (insertCurrentSelectionOnBlur && options[selection]) handleSelection(selection);
            else reset();
        }
        onBlur && onBlur(event);
    };
    const handleResize = ()=>{
        // TODO implement the resize function to resize
        // the helper on screen size change
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
            width: width,
            height: height
        });
    };
    (0, $iA2ta$react.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
            width: width,
            height: height
        });
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsxs)("div", {
        // position relative is required to show the component
        // in the correct position
        style: {
            ...containerStyles,
            position: "relative"
        },
        className: containerClassName,
        children: [
            renderComponent({
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                onBlur: handleBlur,
                ref: inputRef,
                value: value,
                "data-testid": "rt-input-component",
                lang: lang,
                style: {
                    direction: direction,
                    ...googleFont && {
                        fontFamily: googleFont
                    }
                },
                ...rest
            }),
            shouldRenderSuggestions && options.length > 0 && /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)("ul", {
                style: {
                    backgroundClip: "padding-box",
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.175)",
                    display: "block",
                    fontSize: "14px",
                    listStyle: "none",
                    padding: "1px",
                    textAlign: "left",
                    zIndex: 20000,
                    left: `${left + offsetX}px`,
                    top: `${top + offsetY}px`,
                    position: "absolute",
                    width: "auto",
                    ...suggestionListStyle,
                    ...googleFont && {
                        fontFamily: googleFont
                    }
                },
                className: (0, (/*@__PURE__*/$parcel$interopDefault($93be6bd4090454f8$exports))).ReactTransliterate,
                "data-testid": "rt-suggestions-list",
                lang: lang,
                children: Array.from(new Set(options)).map((item, index)=>/*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)("li", {
                        className: index === selection ? (0, (/*@__PURE__*/$parcel$interopDefault($93be6bd4090454f8$exports))).Active : undefined,
                        style: index === selection ? activeItemStyles || {} : {},
                        onMouseEnter: ()=>{
                            setSelection(index);
                        },
                        onClick: ()=>handleSelection(index),
                        children: item
                    }, item))
            })
        ]
    });
};


//# sourceMappingURL=index.js.map
