import React from 'react'
import SHOP_DATA from './shop.data.js.js';
import CollctionPreview from '../../components/collection-preview/collection-preview.component.jsx';
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={collections:SHOP_DATA}
    }

    render(){
      const  {collections} = this.state;
        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) =>(
                    <CollctionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;