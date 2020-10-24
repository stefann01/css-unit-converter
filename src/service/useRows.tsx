import  { useState } from 'react';
import UnitTransformation from '../model/transformation.model';
import Unit from '../model/units.enum';

function useRows() {
    const [value, setValue] = useState(1);
    const [fontBaseSize, setFontBaseSize] = useState(16);
  
    const unitTransf = new UnitTransformation();
  
    const rows=[
      unitTransf.createData(Unit.Px, value, fontBaseSize),
      unitTransf.createData(Unit.Rem, value, fontBaseSize),
      unitTransf.createData(Unit.Em, value, fontBaseSize),
      unitTransf.createData(Unit.Pt, value, fontBaseSize)
    ]

    return {
        value, setValue, fontBaseSize, setFontBaseSize, rows
    }
}

export default useRows;