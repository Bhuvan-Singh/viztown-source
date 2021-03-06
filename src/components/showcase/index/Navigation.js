import React,{useContext} from 'react'
import {Link} from 'gatsby'
import { CommonContext } from '../../../contexts/CommonContextProvider';
import * as styles from '../../../css/index/index-navigation.module.css'

export default function Navigation({slug}) {
    const {isResidential} = useContext(CommonContext)
    const hideSpaceCalculatorClass = isResidential ? 'hidden' : ' ';
    return (
        <div className={`relative w-screen lg:w-full bg-processbg absolute top-0 py-2 z-10 flex items-center mx-auto capitalize md:justify-center ${isResidential? "justify-center": ""} gap-2 whitespace-nowrap lg:whitespace-normal overflow-y-hidden overflow-x-auto ${styles.vtIndexHeader}`}>
            <Link 
            to={`${slug}`} 
            className="tab--link rounded-3xl text-white px-4 text-xs font-semibold py-2 active"
            activeClassName="bg-secondary text-primary"
            >Info & Map
            </Link>

            <Link 
            to={`${slug}/actual-site`} 
            className="tab--link rounded-3xl text-white px-4 text-xs font-semibold py-2 active"
            activeClassName="bg-secondary text-primary"
            partiallyActive={true}
            >Actual Site
            </Link>

            <Link 
            to={`${slug}/fitout-interior`} 
            className="tab--link rounded-3xl text-white px-4 text-xs font-semibold py-2 active"
            activeClassName="bg-secondary text-primary"
            partiallyActive={true}>Fit-Outs & Interior
            
            </Link>

            <Link 
            to={`${slug}/space-calculator`} 
            className={`tab--link rounded-3xl text-white px-4 text-xs font-semibold py-2 active ${hideSpaceCalculatorClass}`}
            activeClassName="bg-secondary text-primary">Space Calculator
            </Link>
        </div>
    )
}
