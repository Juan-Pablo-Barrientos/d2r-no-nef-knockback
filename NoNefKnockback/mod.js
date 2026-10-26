const gemsFilename = 'global\\excel\\gems.txt';
const gems = D2RMM.readTsv(gemsFilename);

gems.rows.forEach((row) => {

    if (row["code"] === "r04") {
      for (let i = 1; i <= 3; i++) {
        if (row[`weaponMod${i}Code`] === "knock") {
          row[`weaponMod${i}Code`] = "";
          row[`weaponMod${i}Param`] = "";
          row[`weaponMod${i}Min`] = "";
          row[`weaponMod${i}Max`] = "";
        }
      }
    }

});

D2RMM.writeTsv(gemsFilename, gems);
