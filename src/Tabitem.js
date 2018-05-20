import React from 'react';
import { TabsData } from './Database'

export class Tabitem extends React.Component {
    render() {
        const listItems = TabsData.map((link) =>
            <li class="fav-site-outer" key={link.id}>
                <div class="fav-site-inner">
                    <div class="fav-site-image">
                        <a href={link.siteUrl}><img src={link.imageUrl} height="96" width="96" alt={link.title} /> </a>
                    </div>
                    <div class="fav-site-title">{link.title}</div>
                </div>
            </li>
        );
        return (
            <ul id="fav-sites-list">
                {listItems}
            </ul>
        );
    }
}
