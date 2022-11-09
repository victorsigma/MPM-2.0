export class Locate {
    ip_address: string = "";
    city: string = "";
    city_geoname_id: number = 0;
    region: string = "";
    region_iso_code: string = "";
    region_geoname_id: number = 0;
    postal_code: string = "";
    country: string = "";
    country_code: string = "";
    country_geoname_id: number = 0;
    country_is_eu: boolean = false;
    continent: string = "";
    continent_code: string = "";
    continent_geoname_id: number = 0;
    longitude: number = 0;
    latitude: number = 0;
    security: Security = new Security();
    timezone: Timezone = new Timezone();
    flag: Flag = new Flag();
    currency: Currency = new Currency();
    connection: Connection = new Connection();
}

export class Security {
    is_vpn: boolean = false;
}

export class Timezone {
    name: string = "";
    abbreviation: string = "";
    gmt_offset: number = 0;
    current_time: string = "";
    is_dst: boolean = true
}

export class Flag {
    emoji: string = "";
    unicode: string = "";
    png: string = "";
    svg: string = ""
}

export class Currency {
    currency_name: string = "";
    currency_code: string = ""
}

export class Connection {
    autonomous_system_number: number = 0;
    autonomous_system_organization: string = "";
    connection_type: string = "";
    isp_name: string = "";
    organization_name: string = ""
}