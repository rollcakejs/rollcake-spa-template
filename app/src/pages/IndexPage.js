import { createPage, createElement } from "@rollcakejs/rollcake-spa";

const IndexPage = () => createPage(
    {
        onInit: function() {
            console.log('inited index');
        },
        onUpdate: function() {
            console.log('updated index');
        },
        onDestroy: function() {
            console.log('destroyed index');
        },
        content: function() {
            return createElement({
                tag: 'span',
                props: {
                    textContent: 'Hello World!'
                }
            })
        }
    }
);

export default IndexPage;