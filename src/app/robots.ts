import { MetadataRoute } from "next";


export default function robots():MetadataRoute.Robots{
    return{
        rules:[
            {
                userAgent:'*',
                allow:'/',
                disallow:['/profile','/profile/*','/error'],
                // disallow:['/','/*'],

            }
        ],
        sitemap:`https://www.vc-virtual-learn.com/sitemap.xml`
    }
}