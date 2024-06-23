
import { RxCross2 } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import { PiCloudSunLight } from "react-icons/pi";
import { MdLaptopChromebook } from "react-icons/md";
import Default from '../../../assets/default.svg';
import Default_dark from '../../../assets/default-dark.svg';
import SemiDark from '../../../assets/semi-dark.svg';
import SemiDark_dark from '../../../assets/semi-dark-dark.svg';
import Collapsed from '../../../assets/collapsed.svg';
import Collapsed_dark from '../../../assets/collapsed-dark.svg';
import Expanded from '../../../assets/expanded.svg';
import Expanded_dark from '../../../assets/expanded-dark.svg';
import StickyNav from '../../../assets/sticky.svg';
import StaticNav from '../../../assets/static.svg';
import HiddenNav from '../../../assets/hidden.svg';
import Compact from '../../../assets/compact.svg';
import Wide from '../../../assets/wide.svg';
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";

const TemplateCustomizer = () => {
    const [lan, setLan] = useState('')
    const {
        theme,
        themeChangerOpen,
        setThemeChangerOpen,
        setTheme,
        setNavberType,
        setShowText,
        setContent,
        setSemidark,
        setLanguage,
        language

    } = useContext(ContextData)
    const [ThemeChangeData, setThemeChangeData] = useState({
        theme: '',
        navberType: '',
        showText: true,
        Content: false,
        semiDark: false,
        
    })
    const [themeChack, setthemeChack] = useState(window.matchMedia('(prefers-color-scheme: dark)'))
    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setthemeChack(darkModeQuery)
    }, [theme])

    useEffect(() => {
        switch (language) {
            case 'বাংলা':
                localStorage.setItem('language', 'বাংলা')
                break;
            case 'English':
                localStorage.setItem('language', 'English')
                break;
            default:
                localStorage.setItem('language', 'english')
                break;
        }
    }, [language])

    const applyChanges = () => {
        setNavberType(ThemeChangeData.navberType)
        setShowText(ThemeChangeData.showText)
        setContent(ThemeChangeData.Content)
        setTheme(ThemeChangeData.theme)
        setSemidark(ThemeChangeData.semiDark)
        setLanguage(lan)
    }
    const resetChanges = () => {
        setNavberType('sticky')
        setShowText(true)
        setContent(false)
        setTheme('system')
        setSemidark(false)
    }
    return (
        <div id="themeChangerParent" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className={`sm:w-[400px] w-[300px] text_font top-0 ${themeChangerOpen ? 'right-0 ThemeChangerOpen' : '-right-[400px] ThemeChangerClose'} themeChanger h-screen min-h-screen card_bg absolute z-[60] text_color`}>
            <div className="">
                <div className="grid grid-cols-6 justify-between items-start opacity-90 ">
                    <div className="col-span-5 padding_top">
                        <h4 className="font_title text_color text_primary font-semibold ">Template Customizer</h4>
                        <p className="text_font text_color  tracking-wide">Customize and preview in real time</p>
                    </div>
                    <div className="flex justify-around items-center text_font _gap padding_top">
                        <button className="" onClick={() => setThemeChangerOpen(false)}>
                            <RxCross2 />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 _gap justify-between items-center mx-2 margin_top">
                    <button onClick={resetChanges} className="btn_danger">
                        Reset Changes
                    </button>
                    <button onClick={applyChanges} className="btn_primary">
                        Apply Changes
                    </button>
                </div>
            </div>
            <div id="themeChanger" className="overflow-y-scroll lg:h-[85dvh] h-[83dvh] margin_top">
                <div className="padding_left  padding_right text_font">
                    <h5 className="py-0 my-0 text_color text_font">Style (Mode)</h5>
                    <span className="grid grid-cols-3 _gap margin_top">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                theme: 'light'
                            })
                            // setTheme('light')
                        }} className="cursor-pointer">
                            {/* border-[#8E85F3] */}
                            <button className={`border flex justify-center ${ThemeChangeData.theme === 'light' ? 'border_bg' : ''} items-center padding_top padding_bottom text_font rounded-md w-full marginBottom_4px`}>
                                <FiSun />
                            </button >
                            Light
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                theme: 'dark'
                            })
                            // setTheme('dark')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${ThemeChangeData.theme === 'dark' ? 'border_bg' : ''} items-center padding_top padding_bottom text_font rounded-md w-full marginBottom_4px`}>
                                <PiCloudSunLight />
                            </button>
                            Dark
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                theme: 'system'
                            })
                            // setTheme('system')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${ThemeChangeData.theme === 'system' ? 'border_bg' : ''} items-center padding_top padding_bottom text_font rounded-md w-full marginBottom_4px`}>
                                <MdLaptopChromebook />
                            </button>
                            System
                        </span>
                    </span>
                    <h5 className="py-0 my-0 text_color text_font margin_top margin_bottom">Themes</h5>
                    <span className="grid grid-cols-3 _gap">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                semiDark: false
                            })
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.semiDark ? '' : 'border_bg'} rounded-md marginBottom_4px`}>
                                <img src={theme === 'dark' || themeChack.matches ? Default_dark : Default} className=" rounded-md w-full " />
                            </div>
                            Default
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                semiDark: true
                            })
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.semiDark ? 'border_bg' : ''} rounded-md marginBottom_4px `}>
                                <img src={theme === 'dark' || themeChack.matches ? SemiDark_dark : SemiDark} className=" rounded-md w-full" />
                            </div>
                            Semi Dark
                        </span>
                    </span>
                    <h5 className="py-0 my-0 text_color text_font margin_top margin_bottom">Translate</h5>
                    <div className="grid grid-cols-3 _gap ">
                        <button onClick={()=>setLan('English')} className="cursor-pointer">
                            <div className={`border ${lan === 'English' || language === 'English'  ? 'border_bg' : ''} rounded-md marginBottom_4px`}>
                                <img src={theme === 'dark' || themeChack.matches ? Default_dark : Default} className=" rounded-md w-full " />
                            </div>
                            English
                        </button>
                        <span 
                            onClick={() => setLan('বাংলা')} 
                        className="cursor-pointer">
                            <div className={`border  ${lan === 'বাংলা' || language === 'বাংলা' ? 'border_bg' : ''} rounded-md marginBottom_4px `}>
                                <img src={theme === 'dark' || themeChack.matches ? SemiDark_dark : SemiDark} className=" rounded-md w-full" />
                            </div>
                            Bangla
                        </span>
                    </div>
                </div>
                <hr className="w-full margin_top margin_bottom" />
                <div className="text_font padding_left  padding_right">
                    <h5 className="py-0 my-0 text_color text_font margin_bottom">Menu (Navigation)</h5>
                    <div className="grid grid-cols-3 _gap">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                showText: true
                            })
                            // setShowText(true)
                        }} className="cursor-pointer">
                            <div className={`border rounded-md ${ThemeChangeData.showText ? 'border_bg' : ''} marginBottom_4px `}>
                                <img src={theme === 'dark' || themeChack.matches ? Expanded_dark : Expanded} className=" rounded-md w-full" />
                            </div>
                            Expanded
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                showText: false
                            })
                            // setShowText(false)
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.showText ? '' : 'border_bg '} rounded-md marginBottom_4px`}>
                                <img src={theme === 'dark' || themeChack.matches ? Collapsed_dark : Collapsed} className=" rounded-md w-full" />
                            </div>
                            Collapsed
                        </span>
                    </div>
                    <h5 className="py-0 my-0 text_color text_font margin_top margin_bottom">Navbar Type  </h5>
                    <span className="grid grid-cols-3 _gap ">
                        <span onClick={() => {

                            setThemeChangeData({
                                ...ThemeChangeData,
                                navberType: 'sticky'
                            })
                            // setNavberType('sticky')

                        }} className="cursor-pointer">
                            <div className={`border rounded-md  ${ThemeChangeData.navberType === 'sticky' ? 'border_bg' : ''} marginBottom_4px`}>
                                <img src={StickyNav} className=" rounded-md w-full" />
                            </div>
                            Sticky
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                navberType: 'static'
                            })
                            // setNavberType('static')
                        }} className="cursor-pointer">
                            <div className={`border rounded-md  ${ThemeChangeData.navberType === 'static' ? 'border_bg' : ''} marginBottom_4px`}>
                                <img src={StaticNav} className=" rounded-md w-full" />
                            </div>
                            Static
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                navberType: 'hidden'
                            })
                            // setNavberType('hidden')
                        }} className="cursor-pointer">
                            <div className={`border rounded-md ${ThemeChangeData.navberType === 'hidden' ? 'border_bg' : ''} marginBottom_4px`}>
                                <img src={HiddenNav} className=" rounded-md w-full" />
                            </div>
                            Hidden
                        </span>
                    </span>
                    <h5 className="py-0 my-0  text_color text_font margin_top margin_bottom">Content</h5>
                    <span className="grid grid-cols-3 _gap ">
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                Content: true
                            })
                            // setContent(true)
                        }} className="cursor-pointer">

                            <div className={`border ${ThemeChangeData.Content ? 'border_bg' : ''} rounded-md marginBottom_4px `}>
                                <img src={Compact} className=" rounded-md w-full" />
                            </div>
                            Compact
                        </span>
                        <span onClick={() => {
                            setThemeChangeData({
                                ...ThemeChangeData,
                                Content: false
                            })
                            // setContent(false)
                        }} className="cursor-pointer">
                            <div className={`border ${ThemeChangeData.Content ? '' : 'border_bg'} rounded-md marginBottom_4px`}>
                                <img src={Wide} className=" rounded-md w-full" />
                            </div>
                            Wide
                        </span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default TemplateCustomizer