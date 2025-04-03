import BasePage from '../pages/base.page'

export class SidebarComponent extends BasePage{

    constructor(){
        super()
        this.locatorCatalogTitle = '#layered_block_left > .title_block'

    }
}