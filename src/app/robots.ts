import { MetadataRoute } from "next";


export default function robots():MetadataRoute.Robots{
    return{
        rules:[
            {
                userAgent:'*',
                allow:'/',
                disallow:['/profile','/profile/*','/error','https://courses.vc-virtual-learn.com','https://courses.vc-virtual-learn.com/','/fake2','/fake3'],
                // disallow:['/','/*'],

            }
        ],
        sitemap:`https://www.vc-virtual-learn.com/sitemap.xml`
    }
}