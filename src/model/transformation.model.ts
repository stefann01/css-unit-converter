import Unit from "./units.enum";

class UnitTransformation{

    public createData(unit:Unit, value:number, fontSize:number){
        switch(unit){
            case Unit.Px:
                return {name: Unit.Px, px:value, rem:value/fontSize, em:value/fontSize, pt:value*0.74999943307122}
            case Unit.Rem:
                return {name: Unit.Rem, px:value*fontSize, rem:value, em:value, pt:value*11.99999092914}
            case Unit.Em:
                return {name: Unit.Em, px:value*fontSize, rem:value, em:value, pt:value*11.99999092914}
            case Unit.Pt:
                return {name: Unit.Pt, px:1.33333*value, rem:0.083333396325467*value, em:0.083333396325467*value, pt:value}
        }
    }
   
   
}

export default UnitTransformation;