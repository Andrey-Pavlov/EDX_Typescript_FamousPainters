class PaintExample implements IPaintExample
{
    title: string;
    link: string;

    constructor(title: string, link: string) {
        this.title = title;
        this.link = link;
    }
}

export = PaintExample