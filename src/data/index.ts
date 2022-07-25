import type { Information, Link, FeaturedWork, Inputs } from "@/types"

// GENERATOR OF DUMMY CONTENT FOR FEATURED WORKS AND GITHUB REPOSITORIES
class ContentGenerator implements FeaturedWork {
    contentArray: FeaturedWork[];


    constructor(public id: string, public title: string, public text: string, public noOfContents: number){
        this.id = id
        this.title = title
        this.text = text
        this.noOfContents = noOfContents
        this.contentArray = []
    }

    generateContent(): FeaturedWork[] {
        for(let i = 1; i <= this.noOfContents; i++){
            this.contentArray.push(
                {
                    id: `${this.id}`,
                    title: `${this.title} ${i}`,
                    text: `${this.text} ${i}`
                }
            )
        }
        return this.contentArray
    }

}

// NAVIGATION LINKS
const navLinks: Link[] = [
    {name: "Home", url: "#home"},
    {name: "Works", url: "#featured-works"},
    {name: "Blog", url: "#blog"},
    {name: "About", url: "#about"},
    {name: "Contact", url: "#contact"}
]

// INFORMATION

const details: Information  = {name: "Mark Joseph Colibao",  
                               position: "Web Developer", 
                               location: "Cabuyao Laguna, Philippines", 
                               email: "colibaomarkjoseph@gmail.com", 
                               contact: "+639 955 613 751"}

// FEATURED WORKS DUMMY CONTENT
const featuredWork: FeaturedWork[] = new ContentGenerator("fw","Project", 
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu convallis tortor, et consequat arcu. 
                                    Vivamus eleifend libero quis mi consequat, sit amet bibendum massa rutrum. Donec nisi neque, tempor vel dolor in, 
                                    ultrices faucibus nisl. Suspendisse potenti. Nullam nibh lorem, tincidunt eu commodo quis, egestas vitae risus.`, 4).generateContent()

// GITHUB REPOSITORIES DUMMY CONTENT
const githubRepo: FeaturedWork[] = new ContentGenerator("gr","Repo", "Short description of repo", 9).generateContent()

// BLOG DUMMY CONTENT
const myBlog: FeaturedWork[] = new ContentGenerator("bl","Blog", 
                              `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 
                              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
                              accompanied by English versions from the 1914 translation by H. Rackham.`, 4).generateContent()

// TEXT INPUTS
const textInputs: Inputs[] = [
    {name: "name", placeholder: "Name"},
    {name: "email", placeholder: "Email"}
]

export { navLinks, details, featuredWork, githubRepo, myBlog, textInputs }