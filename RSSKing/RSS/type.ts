export interface Rssml {
    lastBuildDate: string;
    updated:       Date;
    ttl:           number;
    atomlink:      string;
    title:         string;
    link:          string;
    item:          Item[];
}

export interface Item {
    title:       string;
    link:        string;
    guid:        string;
    pubDate:     string;
    description: null;
}