import React,{useContext} from 'react'
import {Link} from 'gatsby'
import LayoutNoFooter from '../components/LayoutNoFooter'
import layout from '../components/Layout'
import Filters from '../components/showcase/Filters'
import Listings from '../components/showcase/listings/Listings'
import Map from '../components/showcase/map/Map'
import Configuration from '../components/showcase/listings/listing/Configuration' 
import OwnerDetails from '../components/showcase/OwnerDetails'
// Index Modules
import Navigation from '../components/showcase/index/Navigation'
import ActualSiteView from '../components/showcase/index/actualsite/ActualSite' 
import * as styles from '../css/property-details.module.css'

import {ListingContext} from '../contexts/ListingContextProvider'

export default function ActualSite({pageContext}) {
    const {listings} = useContext(ListingContext)
    return (
        <LayoutNoFooter>
            {/* <Filters/> */}
            <div className="vt-showcase mx-auto relative z-10" >
                <div className="grid lg:grid-cols-8 2xl:grid-cols-12">
                    <div className="col-span-2 2xl:col-span-4 border-r border-gray-100">
                        <Listings propertyPage={true}/>
                    </div>
                    <OwnerDetails pageContext={pageContext} viewSlug={`/${pageContext.slug}/actual-site`}/>
                    <div className="lg:col-span-4 2xl:col-span-5 bg-grey relative">
                        <Navigation slug={`/showcase/${pageContext.slug}`} listId={pageContext.id}/>
                        <ActualSiteView pageContext={pageContext}/>
                    </div>
                </div>
            </div>
        </LayoutNoFooter>
    )
}
