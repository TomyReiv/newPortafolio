export interface DirectionsResponse {
    Coversor?:      data;
    "grupo terra"?: data;
    GiftApp?:       data;
    PaisesApp?:     data;
    "Rock page"?:   data;
}

export interface data {
    image?:  string;
    text?:   string;
    web?:    string;
    github?: string;
}

export interface Proyecto {
    image: string;
    text: string;
    web: string;
    github: string;
  }