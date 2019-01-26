export interface BeerItem {
    id: string,
    name: string,
    tagline: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    ebc: number,
    food_pairing: Array<string>,
    /** All properties above are required, below are optional. 
     * optional means, not currectly being used by this web application
     * Captured incase need to extend application in the future
     * But could be safely ignored for performance reasons.
     * If need to ignore can safely delete them or comment out. They 
     * will be returned by api regardless of whether we use them or not
    */
   target_fg: number,
   target_og: number,
   srm: number,
   ph: number,
   attenuation_level: number,
   volume: ValueItem,
   boil_volume: ValueItem,
}

/**
 * Value unit interface is used by beer 
 * item for multiple properties
 */
export interface ValueItem {
    value: number,
    unit: string
}