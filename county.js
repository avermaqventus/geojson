{
 "extent": {
  "ymin": 5274905.996578211,
  "xmin": -1.3964473522561966E7,
  "ymax": 5433926.795769133,
  "xmax": -1.3494816590905154E7,
  "spatialReference": {"wkid": 102100}
 },
 "supportedContingentValuesFormats": "JSON, PBF",
 "supportsApplyEditsWithGlobalIds": true,
 "maxRecordCount": 2000,
 "infoInEstimates": [
  "extent",
  "count"
 ],
 "type": "Feature Layer",
 "hasStaticData": false,
 "supportsAttachmentsByUploadId": true,
 "syncEnabled": true,
 "relationships": [],
 "supportsAttachmentsResizing": true,
 "id": 0,
 "supportsStatistics": true,
 "supportedExportFormats": "sqlite,filegdb,shapefile,csv,geojson",
 "standardMaxRecordCount": 16000,
 "isDataVersioned": false,
 "templates": [],
 "supportsAdvancedQueries": true,
 "currentVersion": 11.2,
 "hasZ": false,
 "advancedEditingCapabilities": {
  "supportsAsyncApplyEdits": true,
  "supportsApplyEditsbyUploadID": true,
  "supportsReturnEditResults": true,
  "supportedSqlFormatsInCalculate": [
   "standard"
  ],
  "supportedApplyEditsUploadIDFormats": "JSON"
 },
 "objectIdField": "objectid",
 "supportsQuantizationEditMode": true,
 "hasContingentValuesDefinition": true,
 "name": "sitelocations",
 "displayField": "sitename",
 "supportsCalculate": true,
 "fields": [
  {
   "nullable": false,
   "editable": false,
   "defaultValue": null,
   "domain": null,
   "name": "objectid",
   "length": 4,
   "alias": "objectid",
   "type": "esriFieldTypeOID"
  },
  {
   "nullable": false,
   "editable": false,
   "defaultValue": null,
   "domain": null,
   "name": "globalid",
   "length": 38,
   "alias": "GlobalID",
   "type": "esriFieldTypeGlobalID"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_agency",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "27",
      "name": "Army Corps Of Engineers"
     },
     {
      "code": "46",
      "name": "County Ag Department"
     },
     {
      "code": "22",
      "name": "County Noxious Weed Department"
     },
     {
      "code": "41",
      "name": "General Public"
     },
     {
      "code": "44",
      "name": "Indian Tribes/Reservations"
     },
     {
      "code": "48",
      "name": "Joint County/Federal"
     },
     {
      "code": "16",
      "name": "Joint State/Federal"
     },
     {
      "code": "43",
      "name": "Master Gardeners"
     },
     {
      "code": "42",
      "name": "Municipal/City"
     },
     {
      "code": "15",
      "name": "Private/Commercial"
     },
     {
      "code": "31",
      "name": "Published Literature"
     },
     {
      "code": "13",
      "name": "State Ag Dept."
     },
     {
      "code": "20",
      "name": "State Ag Dept/Forestry"
     },
     {
      "code": "26",
      "name": "State Ag Dept/Univ.-Extension"
     },
     {
      "code": "19",
      "name": "State Conservation/Nat.Resources Dept."
     },
     {
      "code": "18",
      "name": "State Experiment Station"
     },
     {
      "code": "29",
      "name": "State Fish And Wildlife Service"
     },
     {
      "code": "21",
      "name": "State Natural Resources Dept./Forestry"
     },
     {
      "code": "39",
      "name": "U.S. Army"
     },
     {
      "code": "25",
      "name": "U.S. Fish And Wildlife Service"
     },
     {
      "code": "12",
      "name": "U.S. Forest Service"
     },
     {
      "code": "23",
      "name": "U.S. National Park Service"
     },
     {
      "code": "28",
      "name": "University/Experiment Station"
     },
     {
      "code": "14",
      "name": "University/Extension"
     },
     {
      "code": "11",
      "name": "USDA-APHIS"
     },
     {
      "code": "17",
      "name": "USDA-ARS"
     },
     {
      "code": "99",
      "name": "Unspecified/Other"
     }
    ]
   },
   "name": "agency",
   "length": 2,
   "alias": "Agency",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_surveyprogram",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "1",
      "name": "Farm Bill"
     },
     {
      "code": "2",
      "name": "CAPS"
     },
     {
      "code": "4",
      "name": "State"
     },
     {
      "code": "6",
      "name": "Other"
     }
    ]
   },
   "name": "program",
   "length": 1,
   "alias": "Program",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_surveycommodity",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "11",
      "name": "Exotic Wood Borer / Bark Beetle"
     },
     {
      "code": "116",
      "name": "Tropical Hosts"
     },
     {
      "code": "16",
      "name": "Mollusk"
     },
     {
      "code": "2",
      "name": "Asian Defoliator"
     },
     {
      "code": "28",
      "name": "Corn"
     },
     {
      "code": "29",
      "name": "Cotton"
     },
     {
      "code": "36",
      "name": "Oak"
     },
     {
      "code": "37",
      "name": "Palm"
     },
     {
      "code": "38",
      "name": "Pine"
     },
     {
      "code": "42",
      "name": "Small Grains"
     },
     {
      "code": "43",
      "name": "Soybean"
     },
     {
      "code": "47",
      "name": "Tomato"
     },
     {
      "code": "50",
      "name": "Grape"
     },
     {
      "code": "54",
      "name": "Stone Fruit"
     },
     {
      "code": "6",
      "name": "Cyst Nematodes"
     },
     {
      "code": "72",
      "name": "Solanaceous"
     },
     {
      "code": "eei",
      "name": "Pests of Economic and Environmental Importance"
     },
     {
      "code": "poc",
      "name": "Additional Pests of Concern"
     }
    ]
   },
   "name": "commodity",
   "length": 3,
   "alias": "Survey",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "area0",
   "length": 255,
   "alias": "Area / Region",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "siteid",
   "length": 255,
   "alias": "Site Number",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_sitetype",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "32008",
      "name": "Community Garden"
     },
     {
      "code": "67001",
      "name": "County Park"
     },
     {
      "code": "61001",
      "name": "Farm"
     },
     {
      "code": "28037",
      "name": "Field"
     },
     {
      "code": "77005",
      "name": "Garden Center (Retail)"
     },
     {
      "code": "32007",
      "name": "Garden: Botanical"
     },
     {
      "code": "28102",
      "name": "Garden: Residential"
     },
     {
      "code": "29027",
      "name": "Maritime Port"
     },
     {
      "code": "28036",
      "name": "Orchard"
     },
     {
      "code": "29015",
      "name": "Research Center / Experiment Station"
     },
     {
      "code": "67004",
      "name": "Roadside"
     },
     {
      "code": "30020",
      "name": "State Forest or Park"
     },
     {
      "code": "30030",
      "name": "US National Forest Or Park"
     }
    ]
   },
   "name": "sitetype",
   "length": 5,
   "alias": "Site Type",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "precision": 1,
   "name": "estdate",
   "length": 29,
   "alias": "Date Established",
   "type": "esriFieldTypeDate"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_activesite",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "yes",
      "name": "Yes"
     },
     {
      "code": "no",
      "name": "No"
     }
    ]
   },
   "name": "activesite",
   "length": 3,
   "alias": "Is this site currently active?",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_activeinfestation",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "Negative",
      "name": "Negative"
     },
     {
      "code": "Suspect",
      "name": "Suspected"
     },
     {
      "code": "HighSuspect",
      "name": "Highly Suspected"
     },
     {
      "code": "Positive",
      "name": "Positive"
     }
    ]
   },
   "name": "peststatus",
   "length": 11,
   "alias": "Pest Status",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "totacres",
   "alias": "Total Acres",
   "type": "esriFieldTypeDouble"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "sitename",
   "length": 255,
   "alias": "Location Name",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "address",
   "length": 255,
   "alias": "Street Address",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "city",
   "length": 255,
   "alias": "City",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_stateprov",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "01",
      "name": "Alabama"
     },
     {
      "code": "02",
      "name": "Alaska"
     },
     {
      "code": "60",
      "name": "American Samoa"
     },
     {
      "code": "04",
      "name": "Arizona"
     },
     {
      "code": "05",
      "name": "Arkansas"
     },
     {
      "code": "06",
      "name": "California"
     },
     {
      "code": "08",
      "name": "Colorado"
     },
     {
      "code": "09",
      "name": "Connecticut"
     },
     {
      "code": "10",
      "name": "Delaware"
     },
     {
      "code": "11",
      "name": "District Of Columbia"
     },
     {
      "code": "12",
      "name": "Florida"
     },
     {
      "code": "13",
      "name": "Georgia"
     },
     {
      "code": "66",
      "name": "Guam"
     },
     {
      "code": "15",
      "name": "Hawaii"
     },
     {
      "code": "16",
      "name": "Idaho"
     },
     {
      "code": "17",
      "name": "Illinois"
     },
     {
      "code": "18",
      "name": "Indiana"
     },
     {
      "code": "19",
      "name": "Iowa"
     },
     {
      "code": "20",
      "name": "Kansas"
     },
     {
      "code": "21",
      "name": "Kentucky"
     },
     {
      "code": "22",
      "name": "Louisiana"
     },
     {
      "code": "23",
      "name": "Maine"
     },
     {
      "code": "24",
      "name": "Maryland"
     },
     {
      "code": "25",
      "name": "Massachusetts"
     },
     {
      "code": "26",
      "name": "Michigan"
     },
     {
      "code": "27",
      "name": "Minnesota"
     },
     {
      "code": "28",
      "name": "Mississippi"
     },
     {
      "code": "29",
      "name": "Missouri"
     },
     {
      "code": "30",
      "name": "Montana"
     },
     {
      "code": "31",
      "name": "Nebraska"
     },
     {
      "code": "32",
      "name": "Nevada"
     },
     {
      "code": "33",
      "name": "New Hampshire"
     },
     {
      "code": "34",
      "name": "New Jersey"
     },
     {
      "code": "35",
      "name": "New Mexico"
     },
     {
      "code": "36",
      "name": "New York"
     },
     {
      "code": "37",
      "name": "North Carolina"
     },
     {
      "code": "38",
      "name": "North Dakota"
     },
     {
      "code": "39",
      "name": "Ohio"
     },
     {
      "code": "40",
      "name": "Oklahoma"
     },
     {
      "code": "41",
      "name": "Oregon"
     },
     {
      "code": "70",
      "name": "Palau"
     },
     {
      "code": "42",
      "name": "Pennsylvania"
     },
     {
      "code": "72",
      "name": "Puerto Rico"
     },
     {
      "code": "44",
      "name": "Rhode Island"
     },
     {
      "code": "45",
      "name": "South Carolina"
     },
     {
      "code": "46",
      "name": "South Dakota"
     },
     {
      "code": "47",
      "name": "Tennessee"
     },
     {
      "code": "48",
      "name": "Texas"
     },
     {
      "code": "49",
      "name": "Utah"
     },
     {
      "code": "50",
      "name": "Vermont"
     },
     {
      "code": "78",
      "name": "Virgin Islands"
     },
     {
      "code": "51",
      "name": "Virginia"
     },
     {
      "code": "53",
      "name": "Washington"
     },
     {
      "code": "54",
      "name": "West Virginia"
     },
     {
      "code": "55",
      "name": "Wisconsin"
     },
     {
      "code": "56",
      "name": "Wyoming"
     }
    ]
   },
   "name": "stateprov",
   "length": 2,
   "alias": "State",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "zipcode",
   "length": 255,
   "alias": "Zip Code",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_CountyCodes",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "01001",
      "name": "Autauga County (AL)"
     },
     {
      "code": "01003",
      "name": "Baldwin County (AL)"
     },
     {
      "code": "01005",
      "name": "Barbour County (AL)"
     },
     {
      "code": "01007",
      "name": "Bibb County (AL)"
     },
     {
      "code": "01009",
      "name": "Blount County (AL)"
     },
     {
      "code": "01011",
      "name": "Bullock County (AL)"
     },
     {
      "code": "01013",
      "name": "Butler County (AL)"
     },
     {
      "code": "01015",
      "name": "Calhoun County (AL)"
     },
     {
      "code": "01017",
      "name": "Chambers County (AL)"
     },
     {
      "code": "01019",
      "name": "Cherokee County (AL)"
     },
     {
      "code": "01021",
      "name": "Chilton County (AL)"
     },
     {
      "code": "01023",
      "name": "Choctaw County (AL)"
     },
     {
      "code": "01025",
      "name": "Clarke County (AL)"
     },
     {
      "code": "01027",
      "name": "Clay County (AL)"
     },
     {
      "code": "01029",
      "name": "Cleburne County (AL)"
     },
     {
      "code": "01031",
      "name": "Coffee County (AL)"
     },
     {
      "code": "01033",
      "name": "Colbert County (AL)"
     },
     {
      "code": "01035",
      "name": "Conecuh County (AL)"
     },
     {
      "code": "01037",
      "name": "Coosa County (AL)"
     },
     {
      "code": "01039",
      "name": "Covington County (AL)"
     },
     {
      "code": "01041",
      "name": "Crenshaw County (AL)"
     },
     {
      "code": "01043",
      "name": "Cullman County (AL)"
     },
     {
      "code": "01045",
      "name": "Dale County (AL)"
     },
     {
      "code": "01047",
      "name": "Dallas County (AL)"
     },
     {
      "code": "01049",
      "name": "DeKalb County (AL)"
     },
     {
      "code": "01051",
      "name": "Elmore County (AL)"
     },
     {
      "code": "01053",
      "name": "Escambia County (AL)"
     },
     {
      "code": "01055",
      "name": "Etowah County (AL)"
     },
     {
      "code": "01057",
      "name": "Fayette County (AL)"
     },
     {
      "code": "01059",
      "name": "Franklin County (AL)"
     },
     {
      "code": "01061",
      "name": "Geneva County (AL)"
     },
     {
      "code": "01063",
      "name": "Greene County (AL)"
     },
     {
      "code": "01065",
      "name": "Hale County (AL)"
     },
     {
      "code": "01067",
      "name": "Henry County (AL)"
     },
     {
      "code": "01069",
      "name": "Houston County (AL)"
     },
     {
      "code": "01071",
      "name": "Jackson County (AL)"
     },
     {
      "code": "01073",
      "name": "Jefferson County (AL)"
     },
     {
      "code": "01075",
      "name": "Lamar County (AL)"
     },
     {
      "code": "01077",
      "name": "Lauderdale County (AL)"
     },
     {
      "code": "01079",
      "name": "Lawrence County (AL)"
     },
     {
      "code": "01081",
      "name": "Lee County (AL)"
     },
     {
      "code": "01083",
      "name": "Limestone County (AL)"
     },
     {
      "code": "01085",
      "name": "Lowndes County (AL)"
     },
     {
      "code": "01087",
      "name": "Macon County (AL)"
     },
     {
      "code": "01089",
      "name": "Madison County (AL)"
     },
     {
      "code": "01091",
      "name": "Marengo County (AL)"
     },
     {
      "code": "01093",
      "name": "Marion County (AL)"
     },
     {
      "code": "01095",
      "name": "Marshall County (AL)"
     },
     {
      "code": "01097",
      "name": "Mobile County (AL)"
     },
     {
      "code": "01099",
      "name": "Monroe County (AL)"
     },
     {
      "code": "01101",
      "name": "Montgomery County (AL)"
     },
     {
      "code": "01103",
      "name": "Morgan County (AL)"
     },
     {
      "code": "01105",
      "name": "Perry County (AL)"
     },
     {
      "code": "01107",
      "name": "Pickens County (AL)"
     },
     {
      "code": "01109",
      "name": "Pike County (AL)"
     },
     {
      "code": "01111",
      "name": "Randolph County (AL)"
     },
     {
      "code": "01113",
      "name": "Russell County (AL)"
     },
     {
      "code": "01115",
      "name": "St. Clair County (AL)"
     },
     {
      "code": "01117",
      "name": "Shelby County (AL)"
     },
     {
      "code": "01119",
      "name": "Sumter County (AL)"
     },
     {
      "code": "01121",
      "name": "Talladega County (AL)"
     },
     {
      "code": "01123",
      "name": "Tallapoosa County (AL)"
     },
     {
      "code": "01125",
      "name": "Tuscaloosa County (AL)"
     },
     {
      "code": "01127",
      "name": "Walker County (AL)"
     },
     {
      "code": "01129",
      "name": "Washington County (AL)"
     },
     {
      "code": "01131",
      "name": "Wilcox County (AL)"
     },
     {
      "code": "01133",
      "name": "Winston County (AL)"
     },
     {
      "code": "02013",
      "name": "Aleutians East Borough (AK)"
     },
     {
      "code": "02016",
      "name": "Aleutians West Census Area (AK)"
     },
     {
      "code": "02020",
      "name": "Anchorage Municipality (AK)"
     },
     {
      "code": "02050",
      "name": "Bethel Census Area (AK)"
     },
     {
      "code": "02060",
      "name": "Bristol Bay Borough (AK)"
     },
     {
      "code": "02068",
      "name": "Denali Borough (AK)"
     },
     {
      "code": "02070",
      "name": "Dillingham Census Area (AK)"
     },
     {
      "code": "02090",
      "name": "Fairbanks North Star Borough (AK)"
     },
     {
      "code": "02100",
      "name": "Haines Borough (AK)"
     },
     {
      "code": "02105",
      "name": "Hoonah-Angoon Census Area (AK)"
     },
     {
      "code": "02110",
      "name": "Juneau City and Borough (AK)"
     },
     {
      "code": "02122",
      "name": "Kenai Peninsula Borough (AK)"
     },
     {
      "code": "02130",
      "name": "Ketchikan Gateway Borough (AK)"
     },
     {
      "code": "02150",
      "name": "Kodiak Island Borough (AK)"
     },
     {
      "code": "02164",
      "name": "Lake and Peninsula Borough (AK)"
     },
     {
      "code": "02170",
      "name": "Matanuska-Susitna Borough (AK)"
     },
     {
      "code": "02180",
      "name": "Nome Census Area (AK)"
     },
     {
      "code": "02185",
      "name": "North Slope Borough (AK)"
     },
     {
      "code": "02188",
      "name": "Northwest Arctic Borough (AK)"
     },
     {
      "code": "02195",
      "name": "Petersburg Census Area (AK)"
     },
     {
      "code": "02198",
      "name": "Prince of Wales-Hyder Census Area (AK)"
     },
     {
      "code": "02201",
      "name": "Prince of Wales - Outer (AK)"
     },
     {
      "code": "02220",
      "name": "Sitka City and Borough (AK)"
     },
     {
      "code": "02230",
      "name": "Skagway Municipality (AK)"
     },
     {
      "code": "02232",
      "name": "Skagway-Hoonah-Angoon (AK)"
     },
     {
      "code": "02240",
      "name": "Southeast Fairbanks Census Area (AK)"
     },
     {
      "code": "02261",
      "name": "Valdez-Cordova Census Area (AK)"
     },
     {
      "code": "02270",
      "name": "Wade Hampton Census Area (AK)"
     },
     {
      "code": "02275",
      "name": "Wrangell City and Borough (AK)"
     },
     {
      "code": "02280",
      "name": "Wrangell-Petersburg (AK)"
     },
     {
      "code": "02282",
      "name": "Yakutat City and Borough (AK)"
     },
     {
      "code": "02290",
      "name": "Yukon-Koyukuk Census Area (AK)"
     },
     {
      "code": "04001",
      "name": "Apache County (AZ)"
     },
     {
      "code": "04003",
      "name": "Cochise County (AZ)"
     },
     {
      "code": "04005",
      "name": "Coconino County (AZ)"
     },
     {
      "code": "04007",
      "name": "Gila County (AZ)"
     },
     {
      "code": "04009",
      "name": "Graham County (AZ)"
     },
     {
      "code": "04011",
      "name": "Greenlee County (AZ)"
     },
     {
      "code": "04012",
      "name": "La Paz County (AZ)"
     },
     {
      "code": "04013",
      "name": "Maricopa County (AZ)"
     },
     {
      "code": "04015",
      "name": "Mohave County (AZ)"
     },
     {
      "code": "04017",
      "name": "Navajo County (AZ)"
     },
     {
      "code": "04019",
      "name": "Pima County (AZ)"
     },
     {
      "code": "04021",
      "name": "Pinal County (AZ)"
     },
     {
      "code": "04023",
      "name": "Santa Cruz County (AZ)"
     },
     {
      "code": "04025",
      "name": "Yavapai County (AZ)"
     },
     {
      "code": "04027",
      "name": "Yuma County (AZ)"
     },
     {
      "code": "05001",
      "name": "Arkansas County (AR)"
     },
     {
      "code": "05003",
      "name": "Ashley County (AR)"
     },
     {
      "code": "05005",
      "name": "Baxter County (AR)"
     },
     {
      "code": "05007",
      "name": "Benton County (AR)"
     },
     {
      "code": "05009",
      "name": "Boone County (AR)"
     },
     {
      "code": "05011",
      "name": "Bradley County (AR)"
     },
     {
      "code": "05013",
      "name": "Calhoun County (AR)"
     },
     {
      "code": "05015",
      "name": "Carroll County (AR)"
     },
     {
      "code": "05017",
      "name": "Chicot County (AR)"
     },
     {
      "code": "05019",
      "name": "Clark County (AR)"
     },
     {
      "code": "05021",
      "name": "Clay County (AR)"
     },
     {
      "code": "05023",
      "name": "Cleburne County (AR)"
     },
     {
      "code": "05025",
      "name": "Cleveland County (AR)"
     },
     {
      "code": "05027",
      "name": "Columbia County (AR)"
     },
     {
      "code": "05029",
      "name": "Conway County (AR)"
     },
     {
      "code": "05031",
      "name": "Craighead County (AR)"
     },
     {
      "code": "05033",
      "name": "Crawford County (AR)"
     },
     {
      "code": "05035",
      "name": "Crittenden County (AR)"
     },
     {
      "code": "05037",
      "name": "Cross County (AR)"
     },
     {
      "code": "05039",
      "name": "Dallas County (AR)"
     },
     {
      "code": "05041",
      "name": "Desha County (AR)"
     },
     {
      "code": "05043",
      "name": "Drew County (AR)"
     },
     {
      "code": "05045",
      "name": "Faulkner County (AR)"
     },
     {
      "code": "05047",
      "name": "Franklin County (AR)"
     },
     {
      "code": "05049",
      "name": "Fulton County (AR)"
     },
     {
      "code": "05051",
      "name": "Garland County (AR)"
     },
     {
      "code": "05053",
      "name": "Grant County (AR)"
     },
     {
      "code": "05055",
      "name": "Greene County (AR)"
     },
     {
      "code": "05057",
      "name": "Hempstead County (AR)"
     },
     {
      "code": "05059",
      "name": "Hot Spring County (AR)"
     },
     {
      "code": "05061",
      "name": "Howard County (AR)"
     },
     {
      "code": "05063",
      "name": "Independence County (AR)"
     },
     {
      "code": "05065",
      "name": "Izard County (AR)"
     },
     {
      "code": "05067",
      "name": "Jackson County (AR)"
     },
     {
      "code": "05069",
      "name": "Jefferson County (AR)"
     },
     {
      "code": "05071",
      "name": "Johnson County (AR)"
     },
     {
      "code": "05073",
      "name": "Lafayette County (AR)"
     },
     {
      "code": "05075",
      "name": "Lawrence County (AR)"
     },
     {
      "code": "05077",
      "name": "Lee County (AR)"
     },
     {
      "code": "05079",
      "name": "Lincoln County (AR)"
     },
     {
      "code": "05081",
      "name": "Little River County (AR)"
     },
     {
      "code": "05083",
      "name": "Logan County (AR)"
     },
     {
      "code": "05085",
      "name": "Lonoke County (AR)"
     },
     {
      "code": "05087",
      "name": "Madison County (AR)"
     },
     {
      "code": "05089",
      "name": "Marion County (AR)"
     },
     {
      "code": "05091",
      "name": "Miller County (AR)"
     },
     {
      "code": "05093",
      "name": "Mississippi County (AR)"
     },
     {
      "code": "05095",
      "name": "Monroe County (AR)"
     },
     {
      "code": "05097",
      "name": "Montgomery County (AR)"
     },
     {
      "code": "05099",
      "name": "Nevada County (AR)"
     },
     {
      "code": "05101",
      "name": "Newton County (AR)"
     },
     {
      "code": "05103",
      "name": "Ouachita County (AR)"
     },
     {
      "code": "05105",
      "name": "Perry County (AR)"
     },
     {
      "code": "05107",
      "name": "Phillips County (AR)"
     },
     {
      "code": "05109",
      "name": "Pike County (AR)"
     },
     {
      "code": "05111",
      "name": "Poinsett County (AR)"
     },
     {
      "code": "05113",
      "name": "Polk County (AR)"
     },
     {
      "code": "05115",
      "name": "Pope County (AR)"
     },
     {
      "code": "05117",
      "name": "Prairie County (AR)"
     },
     {
      "code": "05119",
      "name": "Pulaski County (AR)"
     },
     {
      "code": "05121",
      "name": "Randolph County (AR)"
     },
     {
      "code": "05123",
      "name": "St. Francis County (AR)"
     },
     {
      "code": "05125",
      "name": "Saline County (AR)"
     },
     {
      "code": "05127",
      "name": "Scott County (AR)"
     },
     {
      "code": "05129",
      "name": "Searcy County (AR)"
     },
     {
      "code": "05131",
      "name": "Sebastian County (AR)"
     },
     {
      "code": "05133",
      "name": "Sevier County (AR)"
     },
     {
      "code": "05135",
      "name": "Sharp County (AR)"
     },
     {
      "code": "05137",
      "name": "Stone County (AR)"
     },
     {
      "code": "05139",
      "name": "Union County (AR)"
     },
     {
      "code": "05141",
      "name": "Van Buren County (AR)"
     },
     {
      "code": "05143",
      "name": "Washington County (AR)"
     },
     {
      "code": "05145",
      "name": "White County (AR)"
     },
     {
      "code": "05147",
      "name": "Woodruff County (AR)"
     },
     {
      "code": "05149",
      "name": "Yell County (AR)"
     },
     {
      "code": "06001",
      "name": "Alameda County (CA)"
     },
     {
      "code": "06003",
      "name": "Alpine County (CA)"
     },
     {
      "code": "06005",
      "name": "Amador County (CA)"
     },
     {
      "code": "06007",
      "name": "Butte County (CA)"
     },
     {
      "code": "06009",
      "name": "Calaveras County (CA)"
     },
     {
      "code": "06011",
      "name": "Colusa County (CA)"
     },
     {
      "code": "06013",
      "name": "Contra Costa County (CA)"
     },
     {
      "code": "06015",
      "name": "Del Norte County (CA)"
     },
     {
      "code": "06017",
      "name": "El Dorado County (CA)"
     },
     {
      "code": "06019",
      "name": "Fresno County (CA)"
     },
     {
      "code": "06021",
      "name": "Glenn County (CA)"
     },
     {
      "code": "06023",
      "name": "Humboldt County (CA)"
     },
     {
      "code": "06025",
      "name": "Imperial County (CA)"
     },
     {
      "code": "06027",
      "name": "Inyo County (CA)"
     },
     {
      "code": "06029",
      "name": "Kern County (CA)"
     },
     {
      "code": "06031",
      "name": "Kings County (CA)"
     },
     {
      "code": "06033",
      "name": "Lake County (CA)"
     },
     {
      "code": "06035",
      "name": "Lassen County (CA)"
     },
     {
      "code": "06037",
      "name": "Los Angeles County (CA)"
     },
     {
      "code": "06039",
      "name": "Madera County (CA)"
     },
     {
      "code": "06041",
      "name": "Marin County (CA)"
     },
     {
      "code": "06043",
      "name": "Mariposa County (CA)"
     },
     {
      "code": "06045",
      "name": "Mendocino County (CA)"
     },
     {
      "code": "06047",
      "name": "Merced County (CA)"
     },
     {
      "code": "06049",
      "name": "Modoc County (CA)"
     },
     {
      "code": "06051",
      "name": "Mono County (CA)"
     },
     {
      "code": "06053",
      "name": "Monterey County (CA)"
     },
     {
      "code": "06055",
      "name": "Napa County (CA)"
     },
     {
      "code": "06057",
      "name": "Nevada County (CA)"
     },
     {
      "code": "06059",
      "name": "Orange County (CA)"
     },
     {
      "code": "06061",
      "name": "Placer County (CA)"
     },
     {
      "code": "06063",
      "name": "Plumas County (CA)"
     },
     {
      "code": "06065",
      "name": "Riverside County (CA)"
     },
     {
      "code": "06067",
      "name": "Sacramento County (CA)"
     },
     {
      "code": "06069",
      "name": "San Benito County (CA)"
     },
     {
      "code": "06071",
      "name": "San Bernardino County (CA)"
     },
     {
      "code": "06073",
      "name": "San Diego County (CA)"
     },
     {
      "code": "06075",
      "name": "San Francisco County (CA)"
     },
     {
      "code": "06077",
      "name": "San Joaquin County (CA)"
     },
     {
      "code": "06079",
      "name": "San Luis Obispo County (CA)"
     },
     {
      "code": "06081",
      "name": "San Mateo County (CA)"
     },
     {
      "code": "06083",
      "name": "Santa Barbara County (CA)"
     },
     {
      "code": "06085",
      "name": "Santa Clara County (CA)"
     },
     {
      "code": "06087",
      "name": "Santa Cruz County (CA)"
     },
     {
      "code": "06089",
      "name": "Shasta County (CA)"
     },
     {
      "code": "06091",
      "name": "Sierra County (CA)"
     },
     {
      "code": "06093",
      "name": "Siskiyou County (CA)"
     },
     {
      "code": "06095",
      "name": "Solano County (CA)"
     },
     {
      "code": "06097",
      "name": "Sonoma County (CA)"
     },
     {
      "code": "06099",
      "name": "Stanislaus County (CA)"
     },
     {
      "code": "06101",
      "name": "Sutter County (CA)"
     },
     {
      "code": "06103",
      "name": "Tehama County (CA)"
     },
     {
      "code": "06105",
      "name": "Trinity County (CA)"
     },
     {
      "code": "06107",
      "name": "Tulare County (CA)"
     },
     {
      "code": "06109",
      "name": "Tuolumne County (CA)"
     },
     {
      "code": "06111",
      "name": "Ventura County (CA)"
     },
     {
      "code": "06113",
      "name": "Yolo County (CA)"
     },
     {
      "code": "06115",
      "name": "Yuba County (CA)"
     },
     {
      "code": "08001",
      "name": "Adams County (CO)"
     },
     {
      "code": "08003",
      "name": "Alamosa County (CO)"
     },
     {
      "code": "08005",
      "name": "Arapahoe County (CO)"
     },
     {
      "code": "08007",
      "name": "Archuleta County (CO)"
     },
     {
      "code": "08009",
      "name": "Baca County (CO)"
     },
     {
      "code": "08011",
      "name": "Bent County (CO)"
     },
     {
      "code": "08013",
      "name": "Boulder County (CO)"
     },
     {
      "code": "08014",
      "name": "Broomfield County (CO)"
     },
     {
      "code": "08015",
      "name": "Chaffee County (CO)"
     },
     {
      "code": "08017",
      "name": "Cheyenne County (CO)"
     },
     {
      "code": "08019",
      "name": "Clear Creek County (CO)"
     },
     {
      "code": "08021",
      "name": "Conejos County (CO)"
     },
     {
      "code": "08023",
      "name": "Costilla County (CO)"
     },
     {
      "code": "08025",
      "name": "Crowley County (CO)"
     },
     {
      "code": "08027",
      "name": "Custer County (CO)"
     },
     {
      "code": "08029",
      "name": "Delta County (CO)"
     },
     {
      "code": "08031",
      "name": "Denver County (CO)"
     },
     {
      "code": "08033",
      "name": "Dolores County (CO)"
     },
     {
      "code": "08035",
      "name": "Douglas County (CO)"
     },
     {
      "code": "08037",
      "name": "Eagle County (CO)"
     },
     {
      "code": "08039",
      "name": "Elbert County (CO)"
     },
     {
      "code": "08041",
      "name": "El Paso County (CO)"
     },
     {
      "code": "08043",
      "name": "Fremont County (CO)"
     },
     {
      "code": "08045",
      "name": "Garfield County (CO)"
     },
     {
      "code": "08047",
      "name": "Gilpin County (CO)"
     },
     {
      "code": "08049",
      "name": "Grand County (CO)"
     },
     {
      "code": "08051",
      "name": "Gunnison County (CO)"
     },
     {
      "code": "08053",
      "name": "Hinsdale County (CO)"
     },
     {
      "code": "08055",
      "name": "Huerfano County (CO)"
     },
     {
      "code": "08057",
      "name": "Jackson County (CO)"
     },
     {
      "code": "08059",
      "name": "Jefferson County (CO)"
     },
     {
      "code": "08061",
      "name": "Kiowa County (CO)"
     },
     {
      "code": "08063",
      "name": "Kit Carson County (CO)"
     },
     {
      "code": "08065",
      "name": "Lake County (CO)"
     },
     {
      "code": "08067",
      "name": "La Plata County (CO)"
     },
     {
      "code": "08069",
      "name": "Larimer County (CO)"
     },
     {
      "code": "08071",
      "name": "Las Animas County (CO)"
     },
     {
      "code": "08073",
      "name": "Lincoln County (CO)"
     },
     {
      "code": "08075",
      "name": "Logan County (CO)"
     },
     {
      "code": "08077",
      "name": "Mesa County (CO)"
     },
     {
      "code": "08079",
      "name": "Mineral County (CO)"
     },
     {
      "code": "08081",
      "name": "Moffat County (CO)"
     },
     {
      "code": "08083",
      "name": "Montezuma County (CO)"
     },
     {
      "code": "08085",
      "name": "Montrose County (CO)"
     },
     {
      "code": "08087",
      "name": "Morgan County (CO)"
     },
     {
      "code": "08089",
      "name": "Otero County (CO)"
     },
     {
      "code": "08091",
      "name": "Ouray County (CO)"
     },
     {
      "code": "08093",
      "name": "Park County (CO)"
     },
     {
      "code": "08095",
      "name": "Phillips County (CO)"
     },
     {
      "code": "08097",
      "name": "Pitkin County (CO)"
     },
     {
      "code": "08099",
      "name": "Prowers County (CO)"
     },
     {
      "code": "08101",
      "name": "Pueblo County (CO)"
     },
     {
      "code": "08103",
      "name": "Rio Blanco County (CO)"
     },
     {
      "code": "08105",
      "name": "Rio Grande County (CO)"
     },
     {
      "code": "08107",
      "name": "Routt County (CO)"
     },
     {
      "code": "08109",
      "name": "Saguache County (CO)"
     },
     {
      "code": "08111",
      "name": "San Juan County (CO)"
     },
     {
      "code": "08113",
      "name": "San Miguel County (CO)"
     },
     {
      "code": "08115",
      "name": "Sedgwick County (CO)"
     },
     {
      "code": "08117",
      "name": "Summit County (CO)"
     },
     {
      "code": "08119",
      "name": "Teller County (CO)"
     },
     {
      "code": "08121",
      "name": "Washington County (CO)"
     },
     {
      "code": "08123",
      "name": "Weld County (CO)"
     },
     {
      "code": "08125",
      "name": "Yuma County (CO)"
     },
     {
      "code": "09001",
      "name": "Fairfield County (CT)"
     },
     {
      "code": "09003",
      "name": "Hartford County (CT)"
     },
     {
      "code": "09005",
      "name": "Litchfield County (CT)"
     },
     {
      "code": "09007",
      "name": "Middlesex County (CT)"
     },
     {
      "code": "09009",
      "name": "New Haven County (CT)"
     },
     {
      "code": "09011",
      "name": "New London County (CT)"
     },
     {
      "code": "09013",
      "name": "Tolland County (CT)"
     },
     {
      "code": "09015",
      "name": "Windham County (CT)"
     },
     {
      "code": "10001",
      "name": "Kent County (DE)"
     },
     {
      "code": "10003",
      "name": "New Castle County (DE)"
     },
     {
      "code": "10005",
      "name": "Sussex County (DE)"
     },
     {
      "code": "11001",
      "name": "District of Columbia (DC)"
     },
     {
      "code": "12001",
      "name": "Alachua County (FL)"
     },
     {
      "code": "12003",
      "name": "Baker County (FL)"
     },
     {
      "code": "12005",
      "name": "Bay County (FL)"
     },
     {
      "code": "12007",
      "name": "Bradford County (FL)"
     },
     {
      "code": "12009",
      "name": "Brevard County (FL)"
     },
     {
      "code": "12011",
      "name": "Broward County (FL)"
     },
     {
      "code": "12013",
      "name": "Calhoun County (FL)"
     },
     {
      "code": "12015",
      "name": "Charlotte County (FL)"
     },
     {
      "code": "12017",
      "name": "Citrus County (FL)"
     },
     {
      "code": "12019",
      "name": "Clay County (FL)"
     },
     {
      "code": "12021",
      "name": "Collier County (FL)"
     },
     {
      "code": "12023",
      "name": "Columbia County (FL)"
     },
     {
      "code": "12025",
      "name": "Dade (FL)"
     },
     {
      "code": "12027",
      "name": "DeSoto County (FL)"
     },
     {
      "code": "12029",
      "name": "Dixie County (FL)"
     },
     {
      "code": "12031",
      "name": "Duval County (FL)"
     },
     {
      "code": "12033",
      "name": "Escambia County (FL)"
     },
     {
      "code": "12035",
      "name": "Flagler County (FL)"
     },
     {
      "code": "12037",
      "name": "Franklin County (FL)"
     },
     {
      "code": "12039",
      "name": "Gadsden County (FL)"
     },
     {
      "code": "12041",
      "name": "Gilchrist County (FL)"
     },
     {
      "code": "12043",
      "name": "Glades County (FL)"
     },
     {
      "code": "12045",
      "name": "Gulf County (FL)"
     },
     {
      "code": "12047",
      "name": "Hamilton County (FL)"
     },
     {
      "code": "12049",
      "name": "Hardee County (FL)"
     },
     {
      "code": "12051",
      "name": "Hendry County (FL)"
     },
     {
      "code": "12053",
      "name": "Hernando County (FL)"
     },
     {
      "code": "12055",
      "name": "Highlands County (FL)"
     },
     {
      "code": "12057",
      "name": "Hillsborough County (FL)"
     },
     {
      "code": "12059",
      "name": "Holmes County (FL)"
     },
     {
      "code": "12061",
      "name": "Indian River County (FL)"
     },
     {
      "code": "12063",
      "name": "Jackson County (FL)"
     },
     {
      "code": "12065",
      "name": "Jefferson County (FL)"
     },
     {
      "code": "12067",
      "name": "Lafayette County (FL)"
     },
     {
      "code": "12069",
      "name": "Lake County (FL)"
     },
     {
      "code": "12071",
      "name": "Lee County (FL)"
     },
     {
      "code": "12073",
      "name": "Leon County (FL)"
     },
     {
      "code": "12075",
      "name": "Levy County (FL)"
     },
     {
      "code": "12077",
      "name": "Liberty County (FL)"
     },
     {
      "code": "12079",
      "name": "Madison County (FL)"
     },
     {
      "code": "12081",
      "name": "Manatee County (FL)"
     },
     {
      "code": "12083",
      "name": "Marion County (FL)"
     },
     {
      "code": "12085",
      "name": "Martin County (FL)"
     },
     {
      "code": "12086",
      "name": "Miami-Dade County (FL)"
     },
     {
      "code": "12087",
      "name": "Monroe County (FL)"
     },
     {
      "code": "12089",
      "name": "Nassau County (FL)"
     },
     {
      "code": "12091",
      "name": "Okaloosa County (FL)"
     },
     {
      "code": "12093",
      "name": "Okeechobee County (FL)"
     },
     {
      "code": "12095",
      "name": "Orange County (FL)"
     },
     {
      "code": "12097",
      "name": "Osceola County (FL)"
     },
     {
      "code": "12099",
      "name": "Palm Beach County (FL)"
     },
     {
      "code": "12101",
      "name": "Pasco County (FL)"
     },
     {
      "code": "12103",
      "name": "Pinellas County (FL)"
     },
     {
      "code": "12105",
      "name": "Polk County (FL)"
     },
     {
      "code": "12107",
      "name": "Putnam County (FL)"
     },
     {
      "code": "12109",
      "name": "St. Johns County (FL)"
     },
     {
      "code": "12111",
      "name": "St. Lucie County (FL)"
     },
     {
      "code": "12113",
      "name": "Santa Rosa County (FL)"
     },
     {
      "code": "12115",
      "name": "Sarasota County (FL)"
     },
     {
      "code": "12117",
      "name": "Seminole County (FL)"
     },
     {
      "code": "12119",
      "name": "Sumter County (FL)"
     },
     {
      "code": "12121",
      "name": "Suwannee County (FL)"
     },
     {
      "code": "12123",
      "name": "Taylor County (FL)"
     },
     {
      "code": "12125",
      "name": "Union County (FL)"
     },
     {
      "code": "12127",
      "name": "Volusia County (FL)"
     },
     {
      "code": "12129",
      "name": "Wakulla County (FL)"
     },
     {
      "code": "12131",
      "name": "Walton County (FL)"
     },
     {
      "code": "12133",
      "name": "Washington County (FL)"
     },
     {
      "code": "13001",
      "name": "Appling County (GA)"
     },
     {
      "code": "13003",
      "name": "Atkinson County (GA)"
     },
     {
      "code": "13005",
      "name": "Bacon County (GA)"
     },
     {
      "code": "13007",
      "name": "Baker County (GA)"
     },
     {
      "code": "13009",
      "name": "Baldwin County (GA)"
     },
     {
      "code": "13011",
      "name": "Banks County (GA)"
     },
     {
      "code": "13013",
      "name": "Barrow County (GA)"
     },
     {
      "code": "13015",
      "name": "Bartow County (GA)"
     },
     {
      "code": "13017",
      "name": "Ben Hill County (GA)"
     },
     {
      "code": "13019",
      "name": "Berrien County (GA)"
     },
     {
      "code": "13021",
      "name": "Bibb County (GA)"
     },
     {
      "code": "13023",
      "name": "Bleckley County (GA)"
     },
     {
      "code": "13025",
      "name": "Brantley County (GA)"
     },
     {
      "code": "13027",
      "name": "Brooks County (GA)"
     },
     {
      "code": "13029",
      "name": "Bryan County (GA)"
     },
     {
      "code": "13031",
      "name": "Bulloch County (GA)"
     },
     {
      "code": "13033",
      "name": "Burke County (GA)"
     },
     {
      "code": "13035",
      "name": "Butts County (GA)"
     },
     {
      "code": "13037",
      "name": "Calhoun County (GA)"
     },
     {
      "code": "13039",
      "name": "Camden County (GA)"
     },
     {
      "code": "13043",
      "name": "Candler County (GA)"
     },
     {
      "code": "13045",
      "name": "Carroll County (GA)"
     },
     {
      "code": "13047",
      "name": "Catoosa County (GA)"
     },
     {
      "code": "13049",
      "name": "Charlton County (GA)"
     },
     {
      "code": "13051",
      "name": "Chatham County (GA)"
     },
     {
      "code": "13053",
      "name": "Chattahoochee County (GA)"
     },
     {
      "code": "13055",
      "name": "Chattooga County (GA)"
     },
     {
      "code": "13057",
      "name": "Cherokee County (GA)"
     },
     {
      "code": "13059",
      "name": "Clarke County (GA)"
     },
     {
      "code": "13061",
      "name": "Clay County (GA)"
     },
     {
      "code": "13063",
      "name": "Clayton County (GA)"
     },
     {
      "code": "13065",
      "name": "Clinch County (GA)"
     },
     {
      "code": "13067",
      "name": "Cobb County (GA)"
     },
     {
      "code": "13069",
      "name": "Coffee County (GA)"
     },
     {
      "code": "13071",
      "name": "Colquitt County (GA)"
     },
     {
      "code": "13073",
      "name": "Columbia County (GA)"
     },
     {
      "code": "13075",
      "name": "Cook County (GA)"
     },
     {
      "code": "13077",
      "name": "Coweta County (GA)"
     },
     {
      "code": "13079",
      "name": "Crawford County (GA)"
     },
     {
      "code": "13081",
      "name": "Crisp County (GA)"
     },
     {
      "code": "13083",
      "name": "Dade County (GA)"
     },
     {
      "code": "13085",
      "name": "Dawson County (GA)"
     },
     {
      "code": "13087",
      "name": "Decatur County (GA)"
     },
     {
      "code": "13089",
      "name": "DeKalb County (GA)"
     },
     {
      "code": "13091",
      "name": "Dodge County (GA)"
     },
     {
      "code": "13093",
      "name": "Dooly County (GA)"
     },
     {
      "code": "13095",
      "name": "Dougherty County (GA)"
     },
     {
      "code": "13097",
      "name": "Douglas County (GA)"
     },
     {
      "code": "13099",
      "name": "Early County (GA)"
     },
     {
      "code": "13101",
      "name": "Echols County (GA)"
     },
     {
      "code": "13103",
      "name": "Effingham County (GA)"
     },
     {
      "code": "13105",
      "name": "Elbert County (GA)"
     },
     {
      "code": "13107",
      "name": "Emanuel County (GA)"
     },
     {
      "code": "13109",
      "name": "Evans County (GA)"
     },
     {
      "code": "13111",
      "name": "Fannin County (GA)"
     },
     {
      "code": "13113",
      "name": "Fayette County (GA)"
     },
     {
      "code": "13115",
      "name": "Floyd County (GA)"
     },
     {
      "code": "13117",
      "name": "Forsyth County (GA)"
     },
     {
      "code": "13119",
      "name": "Franklin County (GA)"
     },
     {
      "code": "13121",
      "name": "Fulton County (GA)"
     },
     {
      "code": "13123",
      "name": "Gilmer County (GA)"
     },
     {
      "code": "13125",
      "name": "Glascock County (GA)"
     },
     {
      "code": "13127",
      "name": "Glynn County (GA)"
     },
     {
      "code": "13129",
      "name": "Gordon County (GA)"
     },
     {
      "code": "13131",
      "name": "Grady County (GA)"
     },
     {
      "code": "13133",
      "name": "Greene County (GA)"
     },
     {
      "code": "13135",
      "name": "Gwinnett County (GA)"
     },
     {
      "code": "13137",
      "name": "Habersham County (GA)"
     },
     {
      "code": "13139",
      "name": "Hall County (GA)"
     },
     {
      "code": "13141",
      "name": "Hancock County (GA)"
     },
     {
      "code": "13143",
      "name": "Haralson County (GA)"
     },
     {
      "code": "13145",
      "name": "Harris County (GA)"
     },
     {
      "code": "13147",
      "name": "Hart County (GA)"
     },
     {
      "code": "13149",
      "name": "Heard County (GA)"
     },
     {
      "code": "13151",
      "name": "Henry County (GA)"
     },
     {
      "code": "13153",
      "name": "Houston County (GA)"
     },
     {
      "code": "13155",
      "name": "Irwin County (GA)"
     },
     {
      "code": "13157",
      "name": "Jackson County (GA)"
     },
     {
      "code": "13159",
      "name": "Jasper County (GA)"
     },
     {
      "code": "13161",
      "name": "Jeff Davis County (GA)"
     },
     {
      "code": "13163",
      "name": "Jefferson County (GA)"
     },
     {
      "code": "13165",
      "name": "Jenkins County (GA)"
     },
     {
      "code": "13167",
      "name": "Johnson County (GA)"
     },
     {
      "code": "13169",
      "name": "Jones County (GA)"
     },
     {
      "code": "13171",
      "name": "Lamar County (GA)"
     },
     {
      "code": "13173",
      "name": "Lanier County (GA)"
     },
     {
      "code": "13175",
      "name": "Laurens County (GA)"
     },
     {
      "code": "13177",
      "name": "Lee County (GA)"
     },
     {
      "code": "13179",
      "name": "Liberty County (GA)"
     },
     {
      "code": "13181",
      "name": "Lincoln County (GA)"
     },
     {
      "code": "13183",
      "name": "Long County (GA)"
     },
     {
      "code": "13185",
      "name": "Lowndes County (GA)"
     },
     {
      "code": "13187",
      "name": "Lumpkin County (GA)"
     },
     {
      "code": "13189",
      "name": "McDuffie County (GA)"
     },
     {
      "code": "13191",
      "name": "McIntosh County (GA)"
     },
     {
      "code": "13193",
      "name": "Macon County (GA)"
     },
     {
      "code": "13195",
      "name": "Madison County (GA)"
     },
     {
      "code": "13197",
      "name": "Marion County (GA)"
     },
     {
      "code": "13199",
      "name": "Meriwether County (GA)"
     },
     {
      "code": "13201",
      "name": "Miller County (GA)"
     },
     {
      "code": "13205",
      "name": "Mitchell County (GA)"
     },
     {
      "code": "13207",
      "name": "Monroe County (GA)"
     },
     {
      "code": "13209",
      "name": "Montgomery County (GA)"
     },
     {
      "code": "13211",
      "name": "Morgan County (GA)"
     },
     {
      "code": "13213",
      "name": "Murray County (GA)"
     },
     {
      "code": "13215",
      "name": "Muscogee County (GA)"
     },
     {
      "code": "13217",
      "name": "Newton County (GA)"
     },
     {
      "code": "13219",
      "name": "Oconee County (GA)"
     },
     {
      "code": "13221",
      "name": "Oglethorpe County (GA)"
     },
     {
      "code": "13223",
      "name": "Paulding County (GA)"
     },
     {
      "code": "13225",
      "name": "Peach County (GA)"
     },
     {
      "code": "13227",
      "name": "Pickens County (GA)"
     },
     {
      "code": "13229",
      "name": "Pierce County (GA)"
     },
     {
      "code": "13231",
      "name": "Pike County (GA)"
     },
     {
      "code": "13233",
      "name": "Polk County (GA)"
     },
     {
      "code": "13235",
      "name": "Pulaski County (GA)"
     },
     {
      "code": "13237",
      "name": "Putnam County (GA)"
     },
     {
      "code": "13239",
      "name": "Quitman County (GA)"
     },
     {
      "code": "13241",
      "name": "Rabun County (GA)"
     },
     {
      "code": "13243",
      "name": "Randolph County (GA)"
     },
     {
      "code": "13245",
      "name": "Richmond County (GA)"
     },
     {
      "code": "13247",
      "name": "Rockdale County (GA)"
     },
     {
      "code": "13249",
      "name": "Schley County (GA)"
     },
     {
      "code": "13251",
      "name": "Screven County (GA)"
     },
     {
      "code": "13253",
      "name": "Seminole County (GA)"
     },
     {
      "code": "13255",
      "name": "Spalding County (GA)"
     },
     {
      "code": "13257",
      "name": "Stephens County (GA)"
     },
     {
      "code": "13259",
      "name": "Stewart County (GA)"
     },
     {
      "code": "13261",
      "name": "Sumter County (GA)"
     },
     {
      "code": "13263",
      "name": "Talbot County (GA)"
     },
     {
      "code": "13265",
      "name": "Taliaferro County (GA)"
     },
     {
      "code": "13267",
      "name": "Tattnall County (GA)"
     },
     {
      "code": "13269",
      "name": "Taylor County (GA)"
     },
     {
      "code": "13271",
      "name": "Telfair County (GA)"
     },
     {
      "code": "13273",
      "name": "Terrell County (GA)"
     },
     {
      "code": "13275",
      "name": "Thomas County (GA)"
     },
     {
      "code": "13277",
      "name": "Tift County (GA)"
     },
     {
      "code": "13279",
      "name": "Toombs County (GA)"
     },
     {
      "code": "13281",
      "name": "Towns County (GA)"
     },
     {
      "code": "13283",
      "name": "Treutlen County (GA)"
     },
     {
      "code": "13285",
      "name": "Troup County (GA)"
     },
     {
      "code": "13287",
      "name": "Turner County (GA)"
     },
     {
      "code": "13289",
      "name": "Twiggs County (GA)"
     },
     {
      "code": "13291",
      "name": "Union County (GA)"
     },
     {
      "code": "13293",
      "name": "Upson County (GA)"
     },
     {
      "code": "13295",
      "name": "Walker County (GA)"
     },
     {
      "code": "13297",
      "name": "Walton County (GA)"
     },
     {
      "code": "13299",
      "name": "Ware County (GA)"
     },
     {
      "code": "13301",
      "name": "Warren County (GA)"
     },
     {
      "code": "13303",
      "name": "Washington County (GA)"
     },
     {
      "code": "13305",
      "name": "Wayne County (GA)"
     },
     {
      "code": "13307",
      "name": "Webster County (GA)"
     },
     {
      "code": "13309",
      "name": "Wheeler County (GA)"
     },
     {
      "code": "13311",
      "name": "White County (GA)"
     },
     {
      "code": "13313",
      "name": "Whitfield County (GA)"
     },
     {
      "code": "13315",
      "name": "Wilcox County (GA)"
     },
     {
      "code": "13317",
      "name": "Wilkes County (GA)"
     },
     {
      "code": "13319",
      "name": "Wilkinson County (GA)"
     },
     {
      "code": "13321",
      "name": "Worth County (GA)"
     },
     {
      "code": "15001",
      "name": "Hawaii County (HI)"
     },
     {
      "code": "15003",
      "name": "Honolulu County (HI)"
     },
     {
      "code": "15005",
      "name": "Kalawao County (HI)"
     },
     {
      "code": "15007",
      "name": "Kauai County (HI)"
     },
     {
      "code": "15009",
      "name": "Maui County (HI)"
     },
     {
      "code": "16001",
      "name": "Ada County (ID)"
     },
     {
      "code": "16003",
      "name": "Adams County (ID)"
     },
     {
      "code": "16005",
      "name": "Bannock County (ID)"
     },
     {
      "code": "16007",
      "name": "Bear Lake County (ID)"
     },
     {
      "code": "16009",
      "name": "Benewah County (ID)"
     },
     {
      "code": "16011",
      "name": "Bingham County (ID)"
     },
     {
      "code": "16013",
      "name": "Blaine County (ID)"
     },
     {
      "code": "16015",
      "name": "Boise County (ID)"
     },
     {
      "code": "16017",
      "name": "Bonner County (ID)"
     },
     {
      "code": "16019",
      "name": "Bonneville County (ID)"
     },
     {
      "code": "16021",
      "name": "Boundary County (ID)"
     },
     {
      "code": "16023",
      "name": "Butte County (ID)"
     },
     {
      "code": "16025",
      "name": "Camas County (ID)"
     },
     {
      "code": "16027",
      "name": "Canyon County (ID)"
     },
     {
      "code": "16029",
      "name": "Caribou County (ID)"
     },
     {
      "code": "16031",
      "name": "Cassia County (ID)"
     },
     {
      "code": "16033",
      "name": "Clark County (ID)"
     },
     {
      "code": "16035",
      "name": "Clearwater County (ID)"
     },
     {
      "code": "16037",
      "name": "Custer County (ID)"
     },
     {
      "code": "16039",
      "name": "Elmore County (ID)"
     },
     {
      "code": "16041",
      "name": "Franklin County (ID)"
     },
     {
      "code": "16043",
      "name": "Fremont County (ID)"
     },
     {
      "code": "16045",
      "name": "Gem County (ID)"
     },
     {
      "code": "16047",
      "name": "Gooding County (ID)"
     },
     {
      "code": "16049",
      "name": "Idaho County (ID)"
     },
     {
      "code": "16051",
      "name": "Jefferson County (ID)"
     },
     {
      "code": "16053",
      "name": "Jerome County (ID)"
     },
     {
      "code": "16055",
      "name": "Kootenai County (ID)"
     },
     {
      "code": "16057",
      "name": "Latah County (ID)"
     },
     {
      "code": "16059",
      "name": "Lemhi County (ID)"
     },
     {
      "code": "16061",
      "name": "Lewis County (ID)"
     },
     {
      "code": "16063",
      "name": "Lincoln County (ID)"
     },
     {
      "code": "16065",
      "name": "Madison County (ID)"
     },
     {
      "code": "16067",
      "name": "Minidoka County (ID)"
     },
     {
      "code": "16069",
      "name": "Nez Perce County (ID)"
     },
     {
      "code": "16071",
      "name": "Oneida County (ID)"
     },
     {
      "code": "16073",
      "name": "Owyhee County (ID)"
     },
     {
      "code": "16075",
      "name": "Payette County (ID)"
     },
     {
      "code": "16077",
      "name": "Power County (ID)"
     },
     {
      "code": "16079",
      "name": "Shoshone County (ID)"
     },
     {
      "code": "16081",
      "name": "Teton County (ID)"
     },
     {
      "code": "16083",
      "name": "Twin Falls County (ID)"
     },
     {
      "code": "16085",
      "name": "Valley County (ID)"
     },
     {
      "code": "16087",
      "name": "Washington County (ID)"
     },
     {
      "code": "17001",
      "name": "Adams County (IL)"
     },
     {
      "code": "17003",
      "name": "Alexander County (IL)"
     },
     {
      "code": "17005",
      "name": "Bond County (IL)"
     },
     {
      "code": "17007",
      "name": "Boone County (IL)"
     },
     {
      "code": "17009",
      "name": "Brown County (IL)"
     },
     {
      "code": "17011",
      "name": "Bureau County (IL)"
     },
     {
      "code": "17013",
      "name": "Calhoun County (IL)"
     },
     {
      "code": "17015",
      "name": "Carroll County (IL)"
     },
     {
      "code": "17017",
      "name": "Cass County (IL)"
     },
     {
      "code": "17019",
      "name": "Champaign County (IL)"
     },
     {
      "code": "17021",
      "name": "Christian County (IL)"
     },
     {
      "code": "17023",
      "name": "Clark County (IL)"
     },
     {
      "code": "17025",
      "name": "Clay County (IL)"
     },
     {
      "code": "17027",
      "name": "Clinton County (IL)"
     },
     {
      "code": "17029",
      "name": "Coles County (IL)"
     },
     {
      "code": "17031",
      "name": "Cook County (IL)"
     },
     {
      "code": "17033",
      "name": "Crawford County (IL)"
     },
     {
      "code": "17035",
      "name": "Cumberland County (IL)"
     },
     {
      "code": "17037",
      "name": "DeKalb County (IL)"
     },
     {
      "code": "17039",
      "name": "De Witt County (IL)"
     },
     {
      "code": "17041",
      "name": "Douglas County (IL)"
     },
     {
      "code": "17043",
      "name": "DuPage County (IL)"
     },
     {
      "code": "17045",
      "name": "Edgar County (IL)"
     },
     {
      "code": "17047",
      "name": "Edwards County (IL)"
     },
     {
      "code": "17049",
      "name": "Effingham County (IL)"
     },
     {
      "code": "17051",
      "name": "Fayette County (IL)"
     },
     {
      "code": "17053",
      "name": "Ford County (IL)"
     },
     {
      "code": "17055",
      "name": "Franklin County (IL)"
     },
     {
      "code": "17057",
      "name": "Fulton County (IL)"
     },
     {
      "code": "17059",
      "name": "Gallatin County (IL)"
     },
     {
      "code": "17061",
      "name": "Greene County (IL)"
     },
     {
      "code": "17063",
      "name": "Grundy County (IL)"
     },
     {
      "code": "17065",
      "name": "Hamilton County (IL)"
     },
     {
      "code": "17067",
      "name": "Hancock County (IL)"
     },
     {
      "code": "17069",
      "name": "Hardin County (IL)"
     },
     {
      "code": "17071",
      "name": "Henderson County (IL)"
     },
     {
      "code": "17073",
      "name": "Henry County (IL)"
     },
     {
      "code": "17075",
      "name": "Iroquois County (IL)"
     },
     {
      "code": "17077",
      "name": "Jackson County (IL)"
     },
     {
      "code": "17079",
      "name": "Jasper County (IL)"
     },
     {
      "code": "17081",
      "name": "Jefferson County (IL)"
     },
     {
      "code": "17083",
      "name": "Jersey County (IL)"
     },
     {
      "code": "17085",
      "name": "Jo Daviess County (IL)"
     },
     {
      "code": "17087",
      "name": "Johnson County (IL)"
     },
     {
      "code": "17089",
      "name": "Kane County (IL)"
     },
     {
      "code": "17091",
      "name": "Kankakee County (IL)"
     },
     {
      "code": "17093",
      "name": "Kendall County (IL)"
     },
     {
      "code": "17095",
      "name": "Knox County (IL)"
     },
     {
      "code": "17097",
      "name": "Lake County (IL)"
     },
     {
      "code": "17099",
      "name": "LaSalle County (IL)"
     },
     {
      "code": "17101",
      "name": "Lawrence County (IL)"
     },
     {
      "code": "17103",
      "name": "Lee County (IL)"
     },
     {
      "code": "17105",
      "name": "Livingston County (IL)"
     },
     {
      "code": "17107",
      "name": "Logan County (IL)"
     },
     {
      "code": "17109",
      "name": "McDonough County (IL)"
     },
     {
      "code": "17111",
      "name": "McHenry County (IL)"
     },
     {
      "code": "17113",
      "name": "McLean County (IL)"
     },
     {
      "code": "17115",
      "name": "Macon County (IL)"
     },
     {
      "code": "17117",
      "name": "Macoupin County (IL)"
     },
     {
      "code": "17119",
      "name": "Madison County (IL)"
     },
     {
      "code": "17121",
      "name": "Marion County (IL)"
     },
     {
      "code": "17123",
      "name": "Marshall County (IL)"
     },
     {
      "code": "17125",
      "name": "Mason County (IL)"
     },
     {
      "code": "17127",
      "name": "Massac County (IL)"
     },
     {
      "code": "17129",
      "name": "Menard County (IL)"
     },
     {
      "code": "17131",
      "name": "Mercer County (IL)"
     },
     {
      "code": "17133",
      "name": "Monroe County (IL)"
     },
     {
      "code": "17135",
      "name": "Montgomery County (IL)"
     },
     {
      "code": "17137",
      "name": "Morgan County (IL)"
     },
     {
      "code": "17139",
      "name": "Moultrie County (IL)"
     },
     {
      "code": "17141",
      "name": "Ogle County (IL)"
     },
     {
      "code": "17143",
      "name": "Peoria County (IL)"
     },
     {
      "code": "17145",
      "name": "Perry County (IL)"
     },
     {
      "code": "17147",
      "name": "Piatt County (IL)"
     },
     {
      "code": "17149",
      "name": "Pike County (IL)"
     },
     {
      "code": "17151",
      "name": "Pope County (IL)"
     },
     {
      "code": "17153",
      "name": "Pulaski County (IL)"
     },
     {
      "code": "17155",
      "name": "Putnam County (IL)"
     },
     {
      "code": "17157",
      "name": "Randolph County (IL)"
     },
     {
      "code": "17159",
      "name": "Richland County (IL)"
     },
     {
      "code": "17161",
      "name": "Rock Island County (IL)"
     },
     {
      "code": "17163",
      "name": "St. Clair County (IL)"
     },
     {
      "code": "17165",
      "name": "Saline County (IL)"
     },
     {
      "code": "17167",
      "name": "Sangamon County (IL)"
     },
     {
      "code": "17169",
      "name": "Schuyler County (IL)"
     },
     {
      "code": "17171",
      "name": "Scott County (IL)"
     },
     {
      "code": "17173",
      "name": "Shelby County (IL)"
     },
     {
      "code": "17175",
      "name": "Stark County (IL)"
     },
     {
      "code": "17177",
      "name": "Stephenson County (IL)"
     },
     {
      "code": "17179",
      "name": "Tazewell County (IL)"
     },
     {
      "code": "17181",
      "name": "Union County (IL)"
     },
     {
      "code": "17183",
      "name": "Vermilion County (IL)"
     },
     {
      "code": "17185",
      "name": "Wabash County (IL)"
     },
     {
      "code": "17187",
      "name": "Warren County (IL)"
     },
     {
      "code": "17189",
      "name": "Washington County (IL)"
     },
     {
      "code": "17191",
      "name": "Wayne County (IL)"
     },
     {
      "code": "17193",
      "name": "White County (IL)"
     },
     {
      "code": "17195",
      "name": "Whiteside County (IL)"
     },
     {
      "code": "17197",
      "name": "Will County (IL)"
     },
     {
      "code": "17199",
      "name": "Williamson County (IL)"
     },
     {
      "code": "17201",
      "name": "Winnebago County (IL)"
     },
     {
      "code": "17203",
      "name": "Woodford County (IL)"
     },
     {
      "code": "18001",
      "name": "Adams County (IN)"
     },
     {
      "code": "18003",
      "name": "Allen County (IN)"
     },
     {
      "code": "18005",
      "name": "Bartholomew County (IN)"
     },
     {
      "code": "18007",
      "name": "Benton County (IN)"
     },
     {
      "code": "18009",
      "name": "Blackford County (IN)"
     },
     {
      "code": "18011",
      "name": "Boone County (IN)"
     },
     {
      "code": "18013",
      "name": "Brown County (IN)"
     },
     {
      "code": "18015",
      "name": "Carroll County (IN)"
     },
     {
      "code": "18017",
      "name": "Cass County (IN)"
     },
     {
      "code": "18019",
      "name": "Clark County (IN)"
     },
     {
      "code": "18021",
      "name": "Clay County (IN)"
     },
     {
      "code": "18023",
      "name": "Clinton County (IN)"
     },
     {
      "code": "18025",
      "name": "Crawford County (IN)"
     },
     {
      "code": "18027",
      "name": "Daviess County (IN)"
     },
     {
      "code": "18029",
      "name": "Dearborn County (IN)"
     },
     {
      "code": "18031",
      "name": "Decatur County (IN)"
     },
     {
      "code": "18033",
      "name": "DeKalb County (IN)"
     },
     {
      "code": "18035",
      "name": "Delaware County (IN)"
     },
     {
      "code": "18037",
      "name": "Dubois County (IN)"
     },
     {
      "code": "18039",
      "name": "Elkhart County (IN)"
     },
     {
      "code": "18041",
      "name": "Fayette County (IN)"
     },
     {
      "code": "18043",
      "name": "Floyd County (IN)"
     },
     {
      "code": "18045",
      "name": "Fountain County (IN)"
     },
     {
      "code": "18047",
      "name": "Franklin County (IN)"
     },
     {
      "code": "18049",
      "name": "Fulton County (IN)"
     },
     {
      "code": "18051",
      "name": "Gibson County (IN)"
     },
     {
      "code": "18053",
      "name": "Grant County (IN)"
     },
     {
      "code": "18055",
      "name": "Greene County (IN)"
     },
     {
      "code": "18057",
      "name": "Hamilton County (IN)"
     },
     {
      "code": "18059",
      "name": "Hancock County (IN)"
     },
     {
      "code": "18061",
      "name": "Harrison County (IN)"
     },
     {
      "code": "18063",
      "name": "Hendricks County (IN)"
     },
     {
      "code": "18065",
      "name": "Henry County (IN)"
     },
     {
      "code": "18067",
      "name": "Howard County (IN)"
     },
     {
      "code": "18069",
      "name": "Huntington County (IN)"
     },
     {
      "code": "18071",
      "name": "Jackson County (IN)"
     },
     {
      "code": "18073",
      "name": "Jasper County (IN)"
     },
     {
      "code": "18075",
      "name": "Jay County (IN)"
     },
     {
      "code": "18077",
      "name": "Jefferson County (IN)"
     },
     {
      "code": "18079",
      "name": "Jennings County (IN)"
     },
     {
      "code": "18081",
      "name": "Johnson County (IN)"
     },
     {
      "code": "18083",
      "name": "Knox County (IN)"
     },
     {
      "code": "18085",
      "name": "Kosciusko County (IN)"
     },
     {
      "code": "18087",
      "name": "LaGrange County (IN)"
     },
     {
      "code": "18089",
      "name": "Lake County (IN)"
     },
     {
      "code": "18091",
      "name": "LaPorte County (IN)"
     },
     {
      "code": "18093",
      "name": "Lawrence County (IN)"
     },
     {
      "code": "18095",
      "name": "Madison County (IN)"
     },
     {
      "code": "18097",
      "name": "Marion County (IN)"
     },
     {
      "code": "18099",
      "name": "Marshall County (IN)"
     },
     {
      "code": "18101",
      "name": "Martin County (IN)"
     },
     {
      "code": "18103",
      "name": "Miami County (IN)"
     },
     {
      "code": "18105",
      "name": "Monroe County (IN)"
     },
     {
      "code": "18107",
      "name": "Montgomery County (IN)"
     },
     {
      "code": "18109",
      "name": "Morgan County (IN)"
     },
     {
      "code": "18111",
      "name": "Newton County (IN)"
     },
     {
      "code": "18113",
      "name": "Noble County (IN)"
     },
     {
      "code": "18115",
      "name": "Ohio County (IN)"
     },
     {
      "code": "18117",
      "name": "Orange County (IN)"
     },
     {
      "code": "18119",
      "name": "Owen County (IN)"
     },
     {
      "code": "18121",
      "name": "Parke County (IN)"
     },
     {
      "code": "18123",
      "name": "Perry County (IN)"
     },
     {
      "code": "18125",
      "name": "Pike County (IN)"
     },
     {
      "code": "18127",
      "name": "Porter County (IN)"
     },
     {
      "code": "18129",
      "name": "Posey County (IN)"
     },
     {
      "code": "18131",
      "name": "Pulaski County (IN)"
     },
     {
      "code": "18133",
      "name": "Putnam County (IN)"
     },
     {
      "code": "18135",
      "name": "Randolph County (IN)"
     },
     {
      "code": "18137",
      "name": "Ripley County (IN)"
     },
     {
      "code": "18139",
      "name": "Rush County (IN)"
     },
     {
      "code": "18141",
      "name": "St. Joseph County (IN)"
     },
     {
      "code": "18143",
      "name": "Scott County (IN)"
     },
     {
      "code": "18145",
      "name": "Shelby County (IN)"
     },
     {
      "code": "18147",
      "name": "Spencer County (IN)"
     },
     {
      "code": "18149",
      "name": "Starke County (IN)"
     },
     {
      "code": "18151",
      "name": "Steuben County (IN)"
     },
     {
      "code": "18153",
      "name": "Sullivan County (IN)"
     },
     {
      "code": "18155",
      "name": "Switzerland County (IN)"
     },
     {
      "code": "18157",
      "name": "Tippecanoe County (IN)"
     },
     {
      "code": "18159",
      "name": "Tipton County (IN)"
     },
     {
      "code": "18161",
      "name": "Union County (IN)"
     },
     {
      "code": "18163",
      "name": "Vanderburgh County (IN)"
     },
     {
      "code": "18165",
      "name": "Vermillion County (IN)"
     },
     {
      "code": "18167",
      "name": "Vigo County (IN)"
     },
     {
      "code": "18169",
      "name": "Wabash County (IN)"
     },
     {
      "code": "18171",
      "name": "Warren County (IN)"
     },
     {
      "code": "18173",
      "name": "Warrick County (IN)"
     },
     {
      "code": "18175",
      "name": "Washington County (IN)"
     },
     {
      "code": "18177",
      "name": "Wayne County (IN)"
     },
     {
      "code": "18179",
      "name": "Wells County (IN)"
     },
     {
      "code": "18181",
      "name": "White County (IN)"
     },
     {
      "code": "18183",
      "name": "Whitley County (IN)"
     },
     {
      "code": "19001",
      "name": "Adair County (IA)"
     },
     {
      "code": "19003",
      "name": "Adams County (IA)"
     },
     {
      "code": "19005",
      "name": "Allamakee County (IA)"
     },
     {
      "code": "19007",
      "name": "Appanoose County (IA)"
     },
     {
      "code": "19009",
      "name": "Audubon County (IA)"
     },
     {
      "code": "19011",
      "name": "Benton County (IA)"
     },
     {
      "code": "19013",
      "name": "Black Hawk County (IA)"
     },
     {
      "code": "19015",
      "name": "Boone County (IA)"
     },
     {
      "code": "19017",
      "name": "Bremer County (IA)"
     },
     {
      "code": "19019",
      "name": "Buchanan County (IA)"
     },
     {
      "code": "19021",
      "name": "Buena Vista County (IA)"
     },
     {
      "code": "19023",
      "name": "Butler County (IA)"
     },
     {
      "code": "19025",
      "name": "Calhoun County (IA)"
     },
     {
      "code": "19027",
      "name": "Carroll County (IA)"
     },
     {
      "code": "19029",
      "name": "Cass County (IA)"
     },
     {
      "code": "19031",
      "name": "Cedar County (IA)"
     },
     {
      "code": "19033",
      "name": "Cerro Gordo County (IA)"
     },
     {
      "code": "19035",
      "name": "Cherokee County (IA)"
     },
     {
      "code": "19037",
      "name": "Chickasaw County (IA)"
     },
     {
      "code": "19039",
      "name": "Clarke County (IA)"
     },
     {
      "code": "19041",
      "name": "Clay County (IA)"
     },
     {
      "code": "19043",
      "name": "Clayton County (IA)"
     },
     {
      "code": "19045",
      "name": "Clinton County (IA)"
     },
     {
      "code": "19047",
      "name": "Crawford County (IA)"
     },
     {
      "code": "19049",
      "name": "Dallas County (IA)"
     },
     {
      "code": "19051",
      "name": "Davis County (IA)"
     },
     {
      "code": "19053",
      "name": "Decatur County (IA)"
     },
     {
      "code": "19055",
      "name": "Delaware County (IA)"
     },
     {
      "code": "19057",
      "name": "Des Moines County (IA)"
     },
     {
      "code": "19059",
      "name": "Dickinson County (IA)"
     },
     {
      "code": "19061",
      "name": "Dubuque County (IA)"
     },
     {
      "code": "19063",
      "name": "Emmet County (IA)"
     },
     {
      "code": "19065",
      "name": "Fayette County (IA)"
     },
     {
      "code": "19067",
      "name": "Floyd County (IA)"
     },
     {
      "code": "19069",
      "name": "Franklin County (IA)"
     },
     {
      "code": "19071",
      "name": "Fremont County (IA)"
     },
     {
      "code": "19073",
      "name": "Greene County (IA)"
     },
     {
      "code": "19075",
      "name": "Grundy County (IA)"
     },
     {
      "code": "19077",
      "name": "Guthrie County (IA)"
     },
     {
      "code": "19079",
      "name": "Hamilton County (IA)"
     },
     {
      "code": "19081",
      "name": "Hancock County (IA)"
     },
     {
      "code": "19083",
      "name": "Hardin County (IA)"
     },
     {
      "code": "19085",
      "name": "Harrison County (IA)"
     },
     {
      "code": "19087",
      "name": "Henry County (IA)"
     },
     {
      "code": "19089",
      "name": "Howard County (IA)"
     },
     {
      "code": "19091",
      "name": "Humboldt County (IA)"
     },
     {
      "code": "19093",
      "name": "Ida County (IA)"
     },
     {
      "code": "19095",
      "name": "Iowa County (IA)"
     },
     {
      "code": "19097",
      "name": "Jackson County (IA)"
     },
     {
      "code": "19099",
      "name": "Jasper County (IA)"
     },
     {
      "code": "19101",
      "name": "Jefferson County (IA)"
     },
     {
      "code": "19103",
      "name": "Johnson County (IA)"
     },
     {
      "code": "19105",
      "name": "Jones County (IA)"
     },
     {
      "code": "19107",
      "name": "Keokuk County (IA)"
     },
     {
      "code": "19109",
      "name": "Kossuth County (IA)"
     },
     {
      "code": "19111",
      "name": "Lee County (IA)"
     },
     {
      "code": "19113",
      "name": "Linn County (IA)"
     },
     {
      "code": "19115",
      "name": "Louisa County (IA)"
     },
     {
      "code": "19117",
      "name": "Lucas County (IA)"
     },
     {
      "code": "19119",
      "name": "Lyon County (IA)"
     },
     {
      "code": "19121",
      "name": "Madison County (IA)"
     },
     {
      "code": "19123",
      "name": "Mahaska County (IA)"
     },
     {
      "code": "19125",
      "name": "Marion County (IA)"
     },
     {
      "code": "19127",
      "name": "Marshall County (IA)"
     },
     {
      "code": "19129",
      "name": "Mills County (IA)"
     },
     {
      "code": "19131",
      "name": "Mitchell County (IA)"
     },
     {
      "code": "19133",
      "name": "Monona County (IA)"
     },
     {
      "code": "19135",
      "name": "Monroe County (IA)"
     },
     {
      "code": "19137",
      "name": "Montgomery County (IA)"
     },
     {
      "code": "19139",
      "name": "Muscatine County (IA)"
     },
     {
      "code": "19141",
      "name": "O'Brien County (IA)"
     },
     {
      "code": "19143",
      "name": "Osceola County (IA)"
     },
     {
      "code": "19145",
      "name": "Page County (IA)"
     },
     {
      "code": "19147",
      "name": "Palo Alto County (IA)"
     },
     {
      "code": "19149",
      "name": "Plymouth County (IA)"
     },
     {
      "code": "19151",
      "name": "Pocahontas County (IA)"
     },
     {
      "code": "19153",
      "name": "Polk County (IA)"
     },
     {
      "code": "19155",
      "name": "Pottawattamie County (IA)"
     },
     {
      "code": "19157",
      "name": "Poweshiek County (IA)"
     },
     {
      "code": "19159",
      "name": "Ringgold County (IA)"
     },
     {
      "code": "19161",
      "name": "Sac County (IA)"
     },
     {
      "code": "19163",
      "name": "Scott County (IA)"
     },
     {
      "code": "19165",
      "name": "Shelby County (IA)"
     },
     {
      "code": "19167",
      "name": "Sioux County (IA)"
     },
     {
      "code": "19169",
      "name": "Story County (IA)"
     },
     {
      "code": "19171",
      "name": "Tama County (IA)"
     },
     {
      "code": "19173",
      "name": "Taylor County (IA)"
     },
     {
      "code": "19175",
      "name": "Union County (IA)"
     },
     {
      "code": "19177",
      "name": "Van Buren County (IA)"
     },
     {
      "code": "19179",
      "name": "Wapello County (IA)"
     },
     {
      "code": "19181",
      "name": "Warren County (IA)"
     },
     {
      "code": "19183",
      "name": "Washington County (IA)"
     },
     {
      "code": "19185",
      "name": "Wayne County (IA)"
     },
     {
      "code": "19187",
      "name": "Webster County (IA)"
     },
     {
      "code": "19189",
      "name": "Winnebago County (IA)"
     },
     {
      "code": "19191",
      "name": "Winneshiek County (IA)"
     },
     {
      "code": "19193",
      "name": "Woodbury County (IA)"
     },
     {
      "code": "19195",
      "name": "Worth County (IA)"
     },
     {
      "code": "19197",
      "name": "Wright County (IA)"
     },
     {
      "code": "20001",
      "name": "Allen County (KS)"
     },
     {
      "code": "20003",
      "name": "Anderson County (KS)"
     },
     {
      "code": "20005",
      "name": "Atchison County (KS)"
     },
     {
      "code": "20007",
      "name": "Barber County (KS)"
     },
     {
      "code": "20009",
      "name": "Barton County (KS)"
     },
     {
      "code": "20011",
      "name": "Bourbon County (KS)"
     },
     {
      "code": "20013",
      "name": "Brown County (KS)"
     },
     {
      "code": "20015",
      "name": "Butler County (KS)"
     },
     {
      "code": "20017",
      "name": "Chase County (KS)"
     },
     {
      "code": "20019",
      "name": "Chautauqua County (KS)"
     },
     {
      "code": "20021",
      "name": "Cherokee County (KS)"
     },
     {
      "code": "20023",
      "name": "Cheyenne County (KS)"
     },
     {
      "code": "20025",
      "name": "Clark County (KS)"
     },
     {
      "code": "20027",
      "name": "Clay County (KS)"
     },
     {
      "code": "20029",
      "name": "Cloud County (KS)"
     },
     {
      "code": "20031",
      "name": "Coffey County (KS)"
     },
     {
      "code": "20033",
      "name": "Comanche County (KS)"
     },
     {
      "code": "20035",
      "name": "Cowley County (KS)"
     },
     {
      "code": "20037",
      "name": "Crawford County (KS)"
     },
     {
      "code": "20039",
      "name": "Decatur County (KS)"
     },
     {
      "code": "20041",
      "name": "Dickinson County (KS)"
     },
     {
      "code": "20043",
      "name": "Doniphan County (KS)"
     },
     {
      "code": "20045",
      "name": "Douglas County (KS)"
     },
     {
      "code": "20047",
      "name": "Edwards County (KS)"
     },
     {
      "code": "20049",
      "name": "Elk County (KS)"
     },
     {
      "code": "20051",
      "name": "Ellis County (KS)"
     },
     {
      "code": "20053",
      "name": "Ellsworth County (KS)"
     },
     {
      "code": "20055",
      "name": "Finney County (KS)"
     },
     {
      "code": "20057",
      "name": "Ford County (KS)"
     },
     {
      "code": "20059",
      "name": "Franklin County (KS)"
     },
     {
      "code": "20061",
      "name": "Geary County (KS)"
     },
     {
      "code": "20063",
      "name": "Gove County (KS)"
     },
     {
      "code": "20065",
      "name": "Graham County (KS)"
     },
     {
      "code": "20067",
      "name": "Grant County (KS)"
     },
     {
      "code": "20069",
      "name": "Gray County (KS)"
     },
     {
      "code": "20071",
      "name": "Greeley County (KS)"
     },
     {
      "code": "20073",
      "name": "Greenwood County (KS)"
     },
     {
      "code": "20075",
      "name": "Hamilton County (KS)"
     },
     {
      "code": "20077",
      "name": "Harper County (KS)"
     },
     {
      "code": "20079",
      "name": "Harvey County (KS)"
     },
     {
      "code": "20081",
      "name": "Haskell County (KS)"
     },
     {
      "code": "20083",
      "name": "Hodgeman County (KS)"
     },
     {
      "code": "20085",
      "name": "Jackson County (KS)"
     },
     {
      "code": "20087",
      "name": "Jefferson County (KS)"
     },
     {
      "code": "20089",
      "name": "Jewell County (KS)"
     },
     {
      "code": "20091",
      "name": "Johnson County (KS)"
     },
     {
      "code": "20093",
      "name": "Kearny County (KS)"
     },
     {
      "code": "20095",
      "name": "Kingman County (KS)"
     },
     {
      "code": "20097",
      "name": "Kiowa County (KS)"
     },
     {
      "code": "20099",
      "name": "Labette County (KS)"
     },
     {
      "code": "20101",
      "name": "Lane County (KS)"
     },
     {
      "code": "20103",
      "name": "Leavenworth County (KS)"
     },
     {
      "code": "20105",
      "name": "Lincoln County (KS)"
     },
     {
      "code": "20107",
      "name": "Linn County (KS)"
     },
     {
      "code": "20109",
      "name": "Logan County (KS)"
     },
     {
      "code": "20111",
      "name": "Lyon County (KS)"
     },
     {
      "code": "20113",
      "name": "McPherson County (KS)"
     },
     {
      "code": "20115",
      "name": "Marion County (KS)"
     },
     {
      "code": "20117",
      "name": "Marshall County (KS)"
     },
     {
      "code": "20119",
      "name": "Meade County (KS)"
     },
     {
      "code": "20121",
      "name": "Miami County (KS)"
     },
     {
      "code": "20123",
      "name": "Mitchell County (KS)"
     },
     {
      "code": "20125",
      "name": "Montgomery County (KS)"
     },
     {
      "code": "20127",
      "name": "Morris County (KS)"
     },
     {
      "code": "20129",
      "name": "Morton County (KS)"
     },
     {
      "code": "20131",
      "name": "Nemaha County (KS)"
     },
     {
      "code": "20133",
      "name": "Neosho County (KS)"
     },
     {
      "code": "20135",
      "name": "Ness County (KS)"
     },
     {
      "code": "20137",
      "name": "Norton County (KS)"
     },
     {
      "code": "20139",
      "name": "Osage County (KS)"
     },
     {
      "code": "20141",
      "name": "Osborne County (KS)"
     },
     {
      "code": "20143",
      "name": "Ottawa County (KS)"
     },
     {
      "code": "20145",
      "name": "Pawnee County (KS)"
     },
     {
      "code": "20147",
      "name": "Phillips County (KS)"
     },
     {
      "code": "20149",
      "name": "Pottawatomie County (KS)"
     },
     {
      "code": "20151",
      "name": "Pratt County (KS)"
     },
     {
      "code": "20153",
      "name": "Rawlins County (KS)"
     },
     {
      "code": "20155",
      "name": "Reno County (KS)"
     },
     {
      "code": "20157",
      "name": "Republic County (KS)"
     },
     {
      "code": "20159",
      "name": "Rice County (KS)"
     },
     {
      "code": "20161",
      "name": "Riley County (KS)"
     },
     {
      "code": "20163",
      "name": "Rooks County (KS)"
     },
     {
      "code": "20165",
      "name": "Rush County (KS)"
     },
     {
      "code": "20167",
      "name": "Russell County (KS)"
     },
     {
      "code": "20169",
      "name": "Saline County (KS)"
     },
     {
      "code": "20171",
      "name": "Scott County (KS)"
     },
     {
      "code": "20173",
      "name": "Sedgwick County (KS)"
     },
     {
      "code": "20175",
      "name": "Seward County (KS)"
     },
     {
      "code": "20177",
      "name": "Shawnee County (KS)"
     },
     {
      "code": "20179",
      "name": "Sheridan County (KS)"
     },
     {
      "code": "20181",
      "name": "Sherman County (KS)"
     },
     {
      "code": "20183",
      "name": "Smith County (KS)"
     },
     {
      "code": "20185",
      "name": "Stafford County (KS)"
     },
     {
      "code": "20187",
      "name": "Stanton County (KS)"
     },
     {
      "code": "20189",
      "name": "Stevens County (KS)"
     },
     {
      "code": "20191",
      "name": "Sumner County (KS)"
     },
     {
      "code": "20193",
      "name": "Thomas County (KS)"
     },
     {
      "code": "20195",
      "name": "Trego County (KS)"
     },
     {
      "code": "20197",
      "name": "Wabaunsee County (KS)"
     },
     {
      "code": "20199",
      "name": "Wallace County (KS)"
     },
     {
      "code": "20201",
      "name": "Washington County (KS)"
     },
     {
      "code": "20203",
      "name": "Wichita County (KS)"
     },
     {
      "code": "20205",
      "name": "Wilson County (KS)"
     },
     {
      "code": "20207",
      "name": "Woodson County (KS)"
     },
     {
      "code": "20209",
      "name": "Wyandotte County (KS)"
     },
     {
      "code": "21001",
      "name": "Adair County (KY)"
     },
     {
      "code": "21003",
      "name": "Allen County (KY)"
     },
     {
      "code": "21005",
      "name": "Anderson County (KY)"
     },
     {
      "code": "21007",
      "name": "Ballard County (KY)"
     },
     {
      "code": "21009",
      "name": "Barren County (KY)"
     },
     {
      "code": "21011",
      "name": "Bath County (KY)"
     },
     {
      "code": "21013",
      "name": "Bell County (KY)"
     },
     {
      "code": "21015",
      "name": "Boone County (KY)"
     },
     {
      "code": "21017",
      "name": "Bourbon County (KY)"
     },
     {
      "code": "21019",
      "name": "Boyd County (KY)"
     },
     {
      "code": "21021",
      "name": "Boyle County (KY)"
     },
     {
      "code": "21023",
      "name": "Bracken County (KY)"
     },
     {
      "code": "21025",
      "name": "Breathitt County (KY)"
     },
     {
      "code": "21027",
      "name": "Breckinridge County (KY)"
     },
     {
      "code": "21029",
      "name": "Bullitt County (KY)"
     },
     {
      "code": "21031",
      "name": "Butler County (KY)"
     },
     {
      "code": "21033",
      "name": "Caldwell County (KY)"
     },
     {
      "code": "21035",
      "name": "Calloway County (KY)"
     },
     {
      "code": "21037",
      "name": "Campbell County (KY)"
     },
     {
      "code": "21039",
      "name": "Carlisle County (KY)"
     },
     {
      "code": "21041",
      "name": "Carroll County (KY)"
     },
     {
      "code": "21043",
      "name": "Carter County (KY)"
     },
     {
      "code": "21045",
      "name": "Casey County (KY)"
     },
     {
      "code": "21047",
      "name": "Christian County (KY)"
     },
     {
      "code": "21049",
      "name": "Clark County (KY)"
     },
     {
      "code": "21051",
      "name": "Clay County (KY)"
     },
     {
      "code": "21053",
      "name": "Clinton County (KY)"
     },
     {
      "code": "21055",
      "name": "Crittenden County (KY)"
     },
     {
      "code": "21057",
      "name": "Cumberland County (KY)"
     },
     {
      "code": "21059",
      "name": "Daviess County (KY)"
     },
     {
      "code": "21061",
      "name": "Edmonson County (KY)"
     },
     {
      "code": "21063",
      "name": "Elliott County (KY)"
     },
     {
      "code": "21065",
      "name": "Estill County (KY)"
     },
     {
      "code": "21067",
      "name": "Fayette County (KY)"
     },
     {
      "code": "21069",
      "name": "Fleming County (KY)"
     },
     {
      "code": "21071",
      "name": "Floyd County (KY)"
     },
     {
      "code": "21073",
      "name": "Franklin County (KY)"
     },
     {
      "code": "21075",
      "name": "Fulton County (KY)"
     },
     {
      "code": "21077",
      "name": "Gallatin County (KY)"
     },
     {
      "code": "21079",
      "name": "Garrard County (KY)"
     },
     {
      "code": "21081",
      "name": "Grant County (KY)"
     },
     {
      "code": "21083",
      "name": "Graves County (KY)"
     },
     {
      "code": "21085",
      "name": "Grayson County (KY)"
     },
     {
      "code": "21087",
      "name": "Green County (KY)"
     },
     {
      "code": "21089",
      "name": "Greenup County (KY)"
     },
     {
      "code": "21091",
      "name": "Hancock County (KY)"
     },
     {
      "code": "21093",
      "name": "Hardin County (KY)"
     },
     {
      "code": "21095",
      "name": "Harlan County (KY)"
     },
     {
      "code": "21097",
      "name": "Harrison County (KY)"
     },
     {
      "code": "21099",
      "name": "Hart County (KY)"
     },
     {
      "code": "21101",
      "name": "Henderson County (KY)"
     },
     {
      "code": "21103",
      "name": "Henry County (KY)"
     },
     {
      "code": "21105",
      "name": "Hickman County (KY)"
     },
     {
      "code": "21107",
      "name": "Hopkins County (KY)"
     },
     {
      "code": "21109",
      "name": "Jackson County (KY)"
     },
     {
      "code": "21111",
      "name": "Jefferson County (KY)"
     },
     {
      "code": "21113",
      "name": "Jessamine County (KY)"
     },
     {
      "code": "21115",
      "name": "Johnson County (KY)"
     },
     {
      "code": "21117",
      "name": "Kenton County (KY)"
     },
     {
      "code": "21119",
      "name": "Knott County (KY)"
     },
     {
      "code": "21121",
      "name": "Knox County (KY)"
     },
     {
      "code": "21123",
      "name": "Larue County (KY)"
     },
     {
      "code": "21125",
      "name": "Laurel County (KY)"
     },
     {
      "code": "21127",
      "name": "Lawrence County (KY)"
     },
     {
      "code": "21129",
      "name": "Lee County (KY)"
     },
     {
      "code": "21131",
      "name": "Leslie County (KY)"
     },
     {
      "code": "21133",
      "name": "Letcher County (KY)"
     },
     {
      "code": "21135",
      "name": "Lewis County (KY)"
     },
     {
      "code": "21137",
      "name": "Lincoln County (KY)"
     },
     {
      "code": "21139",
      "name": "Livingston County (KY)"
     },
     {
      "code": "21141",
      "name": "Logan County (KY)"
     },
     {
      "code": "21143",
      "name": "Lyon County (KY)"
     },
     {
      "code": "21145",
      "name": "McCracken County (KY)"
     },
     {
      "code": "21147",
      "name": "McCreary County (KY)"
     },
     {
      "code": "21149",
      "name": "McLean County (KY)"
     },
     {
      "code": "21151",
      "name": "Madison County (KY)"
     },
     {
      "code": "21153",
      "name": "Magoffin County (KY)"
     },
     {
      "code": "21155",
      "name": "Marion County (KY)"
     },
     {
      "code": "21157",
      "name": "Marshall County (KY)"
     },
     {
      "code": "21159",
      "name": "Martin County (KY)"
     },
     {
      "code": "21161",
      "name": "Mason County (KY)"
     },
     {
      "code": "21163",
      "name": "Meade County (KY)"
     },
     {
      "code": "21165",
      "name": "Menifee County (KY)"
     },
     {
      "code": "21167",
      "name": "Mercer County (KY)"
     },
     {
      "code": "21169",
      "name": "Metcalfe County (KY)"
     },
     {
      "code": "21171",
      "name": "Monroe County (KY)"
     },
     {
      "code": "21173",
      "name": "Montgomery County (KY)"
     },
     {
      "code": "21175",
      "name": "Morgan County (KY)"
     },
     {
      "code": "21177",
      "name": "Muhlenberg County (KY)"
     },
     {
      "code": "21179",
      "name": "Nelson County (KY)"
     },
     {
      "code": "21181",
      "name": "Nicholas County (KY)"
     },
     {
      "code": "21183",
      "name": "Ohio County (KY)"
     },
     {
      "code": "21185",
      "name": "Oldham County (KY)"
     },
     {
      "code": "21187",
      "name": "Owen County (KY)"
     },
     {
      "code": "21189",
      "name": "Owsley County (KY)"
     },
     {
      "code": "21191",
      "name": "Pendleton County (KY)"
     },
     {
      "code": "21193",
      "name": "Perry County (KY)"
     },
     {
      "code": "21195",
      "name": "Pike County (KY)"
     },
     {
      "code": "21197",
      "name": "Powell County (KY)"
     },
     {
      "code": "21199",
      "name": "Pulaski County (KY)"
     },
     {
      "code": "21201",
      "name": "Robertson County (KY)"
     },
     {
      "code": "21203",
      "name": "Rockcastle County (KY)"
     },
     {
      "code": "21205",
      "name": "Rowan County (KY)"
     },
     {
      "code": "21207",
      "name": "Russell County (KY)"
     },
     {
      "code": "21209",
      "name": "Scott County (KY)"
     },
     {
      "code": "21211",
      "name": "Shelby County (KY)"
     },
     {
      "code": "21213",
      "name": "Simpson County (KY)"
     },
     {
      "code": "21215",
      "name": "Spencer County (KY)"
     },
     {
      "code": "21217",
      "name": "Taylor County (KY)"
     },
     {
      "code": "21219",
      "name": "Todd County (KY)"
     },
     {
      "code": "21221",
      "name": "Trigg County (KY)"
     },
     {
      "code": "21223",
      "name": "Trimble County (KY)"
     },
     {
      "code": "21225",
      "name": "Union County (KY)"
     },
     {
      "code": "21227",
      "name": "Warren County (KY)"
     },
     {
      "code": "21229",
      "name": "Washington County (KY)"
     },
     {
      "code": "21231",
      "name": "Wayne County (KY)"
     },
     {
      "code": "21233",
      "name": "Webster County (KY)"
     },
     {
      "code": "21235",
      "name": "Whitley County (KY)"
     },
     {
      "code": "21237",
      "name": "Wolfe County (KY)"
     },
     {
      "code": "21239",
      "name": "Woodford County (KY)"
     },
     {
      "code": "22001",
      "name": "Acadia Parish (LA)"
     },
     {
      "code": "22003",
      "name": "Allen Parish (LA)"
     },
     {
      "code": "22005",
      "name": "Ascension Parish (LA)"
     },
     {
      "code": "22007",
      "name": "Assumption Parish (LA)"
     },
     {
      "code": "22009",
      "name": "Avoyelles Parish (LA)"
     },
     {
      "code": "22011",
      "name": "Beauregard Parish (LA)"
     },
     {
      "code": "22013",
      "name": "Bienville Parish (LA)"
     },
     {
      "code": "22015",
      "name": "Bossier Parish (LA)"
     },
     {
      "code": "22017",
      "name": "Caddo Parish (LA)"
     },
     {
      "code": "22019",
      "name": "Calcasieu Parish (LA)"
     },
     {
      "code": "22021",
      "name": "Caldwell Parish (LA)"
     },
     {
      "code": "22023",
      "name": "Cameron Parish (LA)"
     },
     {
      "code": "22025",
      "name": "Catahoula Parish (LA)"
     },
     {
      "code": "22027",
      "name": "Claiborne Parish (LA)"
     },
     {
      "code": "22029",
      "name": "Concordia Parish (LA)"
     },
     {
      "code": "22031",
      "name": "De Soto Parish (LA)"
     },
     {
      "code": "22033",
      "name": "East Baton Rouge Parish (LA)"
     },
     {
      "code": "22035",
      "name": "East Carroll Parish (LA)"
     },
     {
      "code": "22037",
      "name": "East Feliciana Parish (LA)"
     },
     {
      "code": "22039",
      "name": "Evangeline Parish (LA)"
     },
     {
      "code": "22041",
      "name": "Franklin Parish (LA)"
     },
     {
      "code": "22043",
      "name": "Grant Parish (LA)"
     },
     {
      "code": "22045",
      "name": "Iberia Parish (LA)"
     },
     {
      "code": "22047",
      "name": "Iberville Parish (LA)"
     },
     {
      "code": "22049",
      "name": "Jackson Parish (LA)"
     },
     {
      "code": "22051",
      "name": "Jefferson Parish (LA)"
     },
     {
      "code": "22053",
      "name": "Jefferson Davis Parish (LA)"
     },
     {
      "code": "22055",
      "name": "Lafayette Parish (LA)"
     },
     {
      "code": "22057",
      "name": "Lafourche Parish (LA)"
     },
     {
      "code": "22059",
      "name": "La Salle Parish (LA)"
     },
     {
      "code": "22061",
      "name": "Lincoln Parish (LA)"
     },
     {
      "code": "22063",
      "name": "Livingston Parish (LA)"
     },
     {
      "code": "22065",
      "name": "Madison Parish (LA)"
     },
     {
      "code": "22067",
      "name": "Morehouse Parish (LA)"
     },
     {
      "code": "22069",
      "name": "Natchitoches Parish (LA)"
     },
     {
      "code": "22071",
      "name": "Orleans Parish (LA)"
     },
     {
      "code": "22073",
      "name": "Ouachita Parish (LA)"
     },
     {
      "code": "22075",
      "name": "Plaquemines Parish (LA)"
     },
     {
      "code": "22077",
      "name": "Pointe Coupee Parish (LA)"
     },
     {
      "code": "22079",
      "name": "Rapides Parish (LA)"
     },
     {
      "code": "22081",
      "name": "Red River Parish (LA)"
     },
     {
      "code": "22083",
      "name": "Richland Parish (LA)"
     },
     {
      "code": "22085",
      "name": "Sabine Parish (LA)"
     },
     {
      "code": "22087",
      "name": "St. Bernard Parish (LA)"
     },
     {
      "code": "22089",
      "name": "St. Charles Parish (LA)"
     },
     {
      "code": "22091",
      "name": "St. Helena Parish (LA)"
     },
     {
      "code": "22093",
      "name": "St. James Parish (LA)"
     },
     {
      "code": "22095",
      "name": "St. John the Baptist Parish (LA)"
     },
     {
      "code": "22097",
      "name": "St. Landry Parish (LA)"
     },
     {
      "code": "22099",
      "name": "St. Martin Parish (LA)"
     },
     {
      "code": "22101",
      "name": "St. Mary Parish (LA)"
     },
     {
      "code": "22103",
      "name": "St. Tammany Parish (LA)"
     },
     {
      "code": "22105",
      "name": "Tangipahoa Parish (LA)"
     },
     {
      "code": "22107",
      "name": "Tensas Parish (LA)"
     },
     {
      "code": "22109",
      "name": "Terrebonne Parish (LA)"
     },
     {
      "code": "22111",
      "name": "Union Parish (LA)"
     },
     {
      "code": "22113",
      "name": "Vermilion Parish (LA)"
     },
     {
      "code": "22115",
      "name": "Vernon Parish (LA)"
     },
     {
      "code": "22117",
      "name": "Washington Parish (LA)"
     },
     {
      "code": "22119",
      "name": "Webster Parish (LA)"
     },
     {
      "code": "22121",
      "name": "West Baton Rouge Parish (LA)"
     },
     {
      "code": "22123",
      "name": "West Carroll Parish (LA)"
     },
     {
      "code": "22125",
      "name": "West Feliciana Parish (LA)"
     },
     {
      "code": "22127",
      "name": "Winn Parish (LA)"
     },
     {
      "code": "23001",
      "name": "Androscoggin County (ME)"
     },
     {
      "code": "23003",
      "name": "Aroostook County (ME)"
     },
     {
      "code": "23005",
      "name": "Cumberland County (ME)"
     },
     {
      "code": "23007",
      "name": "Franklin County (ME)"
     },
     {
      "code": "23009",
      "name": "Hancock County (ME)"
     },
     {
      "code": "23011",
      "name": "Kennebec County (ME)"
     },
     {
      "code": "23013",
      "name": "Knox County (ME)"
     },
     {
      "code": "23015",
      "name": "Lincoln County (ME)"
     },
     {
      "code": "23017",
      "name": "Oxford County (ME)"
     },
     {
      "code": "23019",
      "name": "Penobscot County (ME)"
     },
     {
      "code": "23021",
      "name": "Piscataquis County (ME)"
     },
     {
      "code": "23023",
      "name": "Sagadahoc County (ME)"
     },
     {
      "code": "23025",
      "name": "Somerset County (ME)"
     },
     {
      "code": "23027",
      "name": "Waldo County (ME)"
     },
     {
      "code": "23029",
      "name": "Washington County (ME)"
     },
     {
      "code": "23031",
      "name": "York County (ME)"
     },
     {
      "code": "24001",
      "name": "Allegany County (MD)"
     },
     {
      "code": "24003",
      "name": "Anne Arundel County (MD)"
     },
     {
      "code": "24005",
      "name": "Baltimore County (MD)"
     },
     {
      "code": "24009",
      "name": "Calvert County (MD)"
     },
     {
      "code": "24011",
      "name": "Caroline County (MD)"
     },
     {
      "code": "24013",
      "name": "Carroll County (MD)"
     },
     {
      "code": "24015",
      "name": "Cecil County (MD)"
     },
     {
      "code": "24017",
      "name": "Charles County (MD)"
     },
     {
      "code": "24019",
      "name": "Dorchester County (MD)"
     },
     {
      "code": "24021",
      "name": "Frederick County (MD)"
     },
     {
      "code": "24023",
      "name": "Garrett County (MD)"
     },
     {
      "code": "24025",
      "name": "Harford County (MD)"
     },
     {
      "code": "24027",
      "name": "Howard County (MD)"
     },
     {
      "code": "24029",
      "name": "Kent County (MD)"
     },
     {
      "code": "24031",
      "name": "Montgomery County (MD)"
     },
     {
      "code": "24033",
      "name": "Prince George's County (MD)"
     },
     {
      "code": "24035",
      "name": "Queen Anne's County (MD)"
     },
     {
      "code": "24037",
      "name": "St. Mary's County (MD)"
     },
     {
      "code": "24039",
      "name": "Somerset County (MD)"
     },
     {
      "code": "24041",
      "name": "Talbot County (MD)"
     },
     {
      "code": "24043",
      "name": "Washington County (MD)"
     },
     {
      "code": "24045",
      "name": "Wicomico County (MD)"
     },
     {
      "code": "24047",
      "name": "Worcester County (MD)"
     },
     {
      "code": "24510",
      "name": "Baltimore city (MD)"
     },
     {
      "code": "25001",
      "name": "Barnstable County (MA)"
     },
     {
      "code": "25003",
      "name": "Berkshire County (MA)"
     },
     {
      "code": "25005",
      "name": "Bristol County (MA)"
     },
     {
      "code": "25007",
      "name": "Dukes County (MA)"
     },
     {
      "code": "25009",
      "name": "Essex County (MA)"
     },
     {
      "code": "25011",
      "name": "Franklin County (MA)"
     },
     {
      "code": "25013",
      "name": "Hampden County (MA)"
     },
     {
      "code": "25015",
      "name": "Hampshire County (MA)"
     },
     {
      "code": "25017",
      "name": "Middlesex County (MA)"
     },
     {
      "code": "25019",
      "name": "Nantucket County (MA)"
     },
     {
      "code": "25021",
      "name": "Norfolk County (MA)"
     },
     {
      "code": "25023",
      "name": "Plymouth County (MA)"
     },
     {
      "code": "25025",
      "name": "Suffolk County (MA)"
     },
     {
      "code": "25027",
      "name": "Worcester County (MA)"
     },
     {
      "code": "26001",
      "name": "Alcona County (MI)"
     },
     {
      "code": "26003",
      "name": "Alger County (MI)"
     },
     {
      "code": "26005",
      "name": "Allegan County (MI)"
     },
     {
      "code": "26007",
      "name": "Alpena County (MI)"
     },
     {
      "code": "26009",
      "name": "Antrim County (MI)"
     },
     {
      "code": "26011",
      "name": "Arenac County (MI)"
     },
     {
      "code": "26013",
      "name": "Baraga County (MI)"
     },
     {
      "code": "26015",
      "name": "Barry County (MI)"
     },
     {
      "code": "26017",
      "name": "Bay County (MI)"
     },
     {
      "code": "26019",
      "name": "Benzie County (MI)"
     },
     {
      "code": "26021",
      "name": "Berrien County (MI)"
     },
     {
      "code": "26023",
      "name": "Branch County (MI)"
     },
     {
      "code": "26025",
      "name": "Calhoun County (MI)"
     },
     {
      "code": "26027",
      "name": "Cass County (MI)"
     },
     {
      "code": "26029",
      "name": "Charlevoix County (MI)"
     },
     {
      "code": "26031",
      "name": "Cheboygan County (MI)"
     },
     {
      "code": "26033",
      "name": "Chippewa County (MI)"
     },
     {
      "code": "26035",
      "name": "Clare County (MI)"
     },
     {
      "code": "26037",
      "name": "Clinton County (MI)"
     },
     {
      "code": "26039",
      "name": "Crawford County (MI)"
     },
     {
      "code": "26041",
      "name": "Delta County (MI)"
     },
     {
      "code": "26043",
      "name": "Dickinson County (MI)"
     },
     {
      "code": "26045",
      "name": "Eaton County (MI)"
     },
     {
      "code": "26047",
      "name": "Emmet County (MI)"
     },
     {
      "code": "26049",
      "name": "Genesee County (MI)"
     },
     {
      "code": "26051",
      "name": "Gladwin County (MI)"
     },
     {
      "code": "26053",
      "name": "Gogebic County (MI)"
     },
     {
      "code": "26055",
      "name": "Grand Traverse County (MI)"
     },
     {
      "code": "26057",
      "name": "Gratiot County (MI)"
     },
     {
      "code": "26059",
      "name": "Hillsdale County (MI)"
     },
     {
      "code": "26061",
      "name": "Houghton County (MI)"
     },
     {
      "code": "26063",
      "name": "Huron County (MI)"
     },
     {
      "code": "26065",
      "name": "Ingham County (MI)"
     },
     {
      "code": "26067",
      "name": "Ionia County (MI)"
     },
     {
      "code": "26069",
      "name": "Iosco County (MI)"
     },
     {
      "code": "26071",
      "name": "Iron County (MI)"
     },
     {
      "code": "26073",
      "name": "Isabella County (MI)"
     },
     {
      "code": "26075",
      "name": "Jackson County (MI)"
     },
     {
      "code": "26077",
      "name": "Kalamazoo County (MI)"
     },
     {
      "code": "26079",
      "name": "Kalkaska County (MI)"
     },
     {
      "code": "26081",
      "name": "Kent County (MI)"
     },
     {
      "code": "26083",
      "name": "Keweenaw County (MI)"
     },
     {
      "code": "26085",
      "name": "Lake County (MI)"
     },
     {
      "code": "26087",
      "name": "Lapeer County (MI)"
     },
     {
      "code": "26089",
      "name": "Leelanau County (MI)"
     },
     {
      "code": "26091",
      "name": "Lenawee County (MI)"
     },
     {
      "code": "26093",
      "name": "Livingston County (MI)"
     },
     {
      "code": "26095",
      "name": "Luce County (MI)"
     },
     {
      "code": "26097",
      "name": "Mackinac County (MI)"
     },
     {
      "code": "26099",
      "name": "Macomb County (MI)"
     },
     {
      "code": "26101",
      "name": "Manistee County (MI)"
     },
     {
      "code": "26103",
      "name": "Marquette County (MI)"
     },
     {
      "code": "26105",
      "name": "Mason County (MI)"
     },
     {
      "code": "26107",
      "name": "Mecosta County (MI)"
     },
     {
      "code": "26109",
      "name": "Menominee County (MI)"
     },
     {
      "code": "26111",
      "name": "Midland County (MI)"
     },
     {
      "code": "26113",
      "name": "Missaukee County (MI)"
     },
     {
      "code": "26115",
      "name": "Monroe County (MI)"
     },
     {
      "code": "26117",
      "name": "Montcalm County (MI)"
     },
     {
      "code": "26119",
      "name": "Montmorency County (MI)"
     },
     {
      "code": "26121",
      "name": "Muskegon County (MI)"
     },
     {
      "code": "26123",
      "name": "Newaygo County (MI)"
     },
     {
      "code": "26125",
      "name": "Oakland County (MI)"
     },
     {
      "code": "26127",
      "name": "Oceana County (MI)"
     },
     {
      "code": "26129",
      "name": "Ogemaw County (MI)"
     },
     {
      "code": "26131",
      "name": "Ontonagon County (MI)"
     },
     {
      "code": "26133",
      "name": "Osceola County (MI)"
     },
     {
      "code": "26135",
      "name": "Oscoda County (MI)"
     },
     {
      "code": "26137",
      "name": "Otsego County (MI)"
     },
     {
      "code": "26139",
      "name": "Ottawa County (MI)"
     },
     {
      "code": "26141",
      "name": "Presque Isle County (MI)"
     },
     {
      "code": "26143",
      "name": "Roscommon County (MI)"
     },
     {
      "code": "26145",
      "name": "Saginaw County (MI)"
     },
     {
      "code": "26147",
      "name": "St. Clair County (MI)"
     },
     {
      "code": "26149",
      "name": "St. Joseph County (MI)"
     },
     {
      "code": "26151",
      "name": "Sanilac County (MI)"
     },
     {
      "code": "26153",
      "name": "Schoolcraft County (MI)"
     },
     {
      "code": "26155",
      "name": "Shiawassee County (MI)"
     },
     {
      "code": "26157",
      "name": "Tuscola County (MI)"
     },
     {
      "code": "26159",
      "name": "Van Buren County (MI)"
     },
     {
      "code": "26161",
      "name": "Washtenaw County (MI)"
     },
     {
      "code": "26163",
      "name": "Wayne County (MI)"
     },
     {
      "code": "26165",
      "name": "Wexford County (MI)"
     },
     {
      "code": "27001",
      "name": "Aitkin County (MN)"
     },
     {
      "code": "27003",
      "name": "Anoka County (MN)"
     },
     {
      "code": "27005",
      "name": "Becker County (MN)"
     },
     {
      "code": "27007",
      "name": "Beltrami County (MN)"
     },
     {
      "code": "27009",
      "name": "Benton County (MN)"
     },
     {
      "code": "27011",
      "name": "Big Stone County (MN)"
     },
     {
      "code": "27013",
      "name": "Blue Earth County (MN)"
     },
     {
      "code": "27015",
      "name": "Brown County (MN)"
     },
     {
      "code": "27017",
      "name": "Carlton County (MN)"
     },
     {
      "code": "27019",
      "name": "Carver County (MN)"
     },
     {
      "code": "27021",
      "name": "Cass County (MN)"
     },
     {
      "code": "27023",
      "name": "Chippewa County (MN)"
     },
     {
      "code": "27025",
      "name": "Chisago County (MN)"
     },
     {
      "code": "27027",
      "name": "Clay County (MN)"
     },
     {
      "code": "27029",
      "name": "Clearwater County (MN)"
     },
     {
      "code": "27031",
      "name": "Cook County (MN)"
     },
     {
      "code": "27033",
      "name": "Cottonwood County (MN)"
     },
     {
      "code": "27035",
      "name": "Crow Wing County (MN)"
     },
     {
      "code": "27037",
      "name": "Dakota County (MN)"
     },
     {
      "code": "27039",
      "name": "Dodge County (MN)"
     },
     {
      "code": "27041",
      "name": "Douglas County (MN)"
     },
     {
      "code": "27043",
      "name": "Faribault County (MN)"
     },
     {
      "code": "27045",
      "name": "Fillmore County (MN)"
     },
     {
      "code": "27047",
      "name": "Freeborn County (MN)"
     },
     {
      "code": "27049",
      "name": "Goodhue County (MN)"
     },
     {
      "code": "27051",
      "name": "Grant County (MN)"
     },
     {
      "code": "27053",
      "name": "Hennepin County (MN)"
     },
     {
      "code": "27055",
      "name": "Houston County (MN)"
     },
     {
      "code": "27057",
      "name": "Hubbard County (MN)"
     },
     {
      "code": "27059",
      "name": "Isanti County (MN)"
     },
     {
      "code": "27061",
      "name": "Itasca County (MN)"
     },
     {
      "code": "27063",
      "name": "Jackson County (MN)"
     },
     {
      "code": "27065",
      "name": "Kanabec County (MN)"
     },
     {
      "code": "27067",
      "name": "Kandiyohi County (MN)"
     },
     {
      "code": "27069",
      "name": "Kittson County (MN)"
     },
     {
      "code": "27071",
      "name": "Koochiching County (MN)"
     },
     {
      "code": "27073",
      "name": "Lac qui Parle County (MN)"
     },
     {
      "code": "27075",
      "name": "Lake County (MN)"
     },
     {
      "code": "27077",
      "name": "Lake of the Woods County (MN)"
     },
     {
      "code": "27079",
      "name": "Le Sueur County (MN)"
     },
     {
      "code": "27081",
      "name": "Lincoln County (MN)"
     },
     {
      "code": "27083",
      "name": "Lyon County (MN)"
     },
     {
      "code": "27085",
      "name": "McLeod County (MN)"
     },
     {
      "code": "27087",
      "name": "Mahnomen County (MN)"
     },
     {
      "code": "27089",
      "name": "Marshall County (MN)"
     },
     {
      "code": "27091",
      "name": "Martin County (MN)"
     },
     {
      "code": "27093",
      "name": "Meeker County (MN)"
     },
     {
      "code": "27095",
      "name": "Mille Lacs County (MN)"
     },
     {
      "code": "27097",
      "name": "Morrison County (MN)"
     },
     {
      "code": "27099",
      "name": "Mower County (MN)"
     },
     {
      "code": "27101",
      "name": "Murray County (MN)"
     },
     {
      "code": "27103",
      "name": "Nicollet County (MN)"
     },
     {
      "code": "27105",
      "name": "Nobles County (MN)"
     },
     {
      "code": "27107",
      "name": "Norman County (MN)"
     },
     {
      "code": "27109",
      "name": "Olmsted County (MN)"
     },
     {
      "code": "27111",
      "name": "Otter Tail County (MN)"
     },
     {
      "code": "27113",
      "name": "Pennington County (MN)"
     },
     {
      "code": "27115",
      "name": "Pine County (MN)"
     },
     {
      "code": "27117",
      "name": "Pipestone County (MN)"
     },
     {
      "code": "27119",
      "name": "Polk County (MN)"
     },
     {
      "code": "27121",
      "name": "Pope County (MN)"
     },
     {
      "code": "27123",
      "name": "Ramsey County (MN)"
     },
     {
      "code": "27125",
      "name": "Red Lake County (MN)"
     },
     {
      "code": "27127",
      "name": "Redwood County (MN)"
     },
     {
      "code": "27129",
      "name": "Renville County (MN)"
     },
     {
      "code": "27131",
      "name": "Rice County (MN)"
     },
     {
      "code": "27133",
      "name": "Rock County (MN)"
     },
     {
      "code": "27135",
      "name": "Roseau County (MN)"
     },
     {
      "code": "27137",
      "name": "St. Louis County (MN)"
     },
     {
      "code": "27139",
      "name": "Scott County (MN)"
     },
     {
      "code": "27141",
      "name": "Sherburne County (MN)"
     },
     {
      "code": "27143",
      "name": "Sibley County (MN)"
     },
     {
      "code": "27145",
      "name": "Stearns County (MN)"
     },
     {
      "code": "27147",
      "name": "Steele County (MN)"
     },
     {
      "code": "27149",
      "name": "Stevens County (MN)"
     },
     {
      "code": "27151",
      "name": "Swift County (MN)"
     },
     {
      "code": "27153",
      "name": "Todd County (MN)"
     },
     {
      "code": "27155",
      "name": "Traverse County (MN)"
     },
     {
      "code": "27157",
      "name": "Wabasha County (MN)"
     },
     {
      "code": "27159",
      "name": "Wadena County (MN)"
     },
     {
      "code": "27161",
      "name": "Waseca County (MN)"
     },
     {
      "code": "27163",
      "name": "Washington County (MN)"
     },
     {
      "code": "27165",
      "name": "Watonwan County (MN)"
     },
     {
      "code": "27167",
      "name": "Wilkin County (MN)"
     },
     {
      "code": "27169",
      "name": "Winona County (MN)"
     },
     {
      "code": "27171",
      "name": "Wright County (MN)"
     },
     {
      "code": "27173",
      "name": "Yellow Medicine County (MN)"
     },
     {
      "code": "28001",
      "name": "Adams County (MS)"
     },
     {
      "code": "28003",
      "name": "Alcorn County (MS)"
     },
     {
      "code": "28005",
      "name": "Amite County (MS)"
     },
     {
      "code": "28007",
      "name": "Attala County (MS)"
     },
     {
      "code": "28009",
      "name": "Benton County (MS)"
     },
     {
      "code": "28011",
      "name": "Bolivar County (MS)"
     },
     {
      "code": "28013",
      "name": "Calhoun County (MS)"
     },
     {
      "code": "28015",
      "name": "Carroll County (MS)"
     },
     {
      "code": "28017",
      "name": "Chickasaw County (MS)"
     },
     {
      "code": "28019",
      "name": "Choctaw County (MS)"
     },
     {
      "code": "28021",
      "name": "Claiborne County (MS)"
     },
     {
      "code": "28023",
      "name": "Clarke County (MS)"
     },
     {
      "code": "28025",
      "name": "Clay County (MS)"
     },
     {
      "code": "28027",
      "name": "Coahoma County (MS)"
     },
     {
      "code": "28029",
      "name": "Copiah County (MS)"
     },
     {
      "code": "28031",
      "name": "Covington County (MS)"
     },
     {
      "code": "28033",
      "name": "DeSoto County (MS)"
     },
     {
      "code": "28035",
      "name": "Forrest County (MS)"
     },
     {
      "code": "28037",
      "name": "Franklin County (MS)"
     },
     {
      "code": "28039",
      "name": "George County (MS)"
     },
     {
      "code": "28041",
      "name": "Greene County (MS)"
     },
     {
      "code": "28043",
      "name": "Grenada County (MS)"
     },
     {
      "code": "28045",
      "name": "Hancock County (MS)"
     },
     {
      "code": "28047",
      "name": "Harrison County (MS)"
     },
     {
      "code": "28049",
      "name": "Hinds County (MS)"
     },
     {
      "code": "28051",
      "name": "Holmes County (MS)"
     },
     {
      "code": "28053",
      "name": "Humphreys County (MS)"
     },
     {
      "code": "28055",
      "name": "Issaquena County (MS)"
     },
     {
      "code": "28057",
      "name": "Itawamba County (MS)"
     },
     {
      "code": "28059",
      "name": "Jackson County (MS)"
     },
     {
      "code": "28061",
      "name": "Jasper County (MS)"
     },
     {
      "code": "28063",
      "name": "Jefferson County (MS)"
     },
     {
      "code": "28065",
      "name": "Jefferson Davis County (MS)"
     },
     {
      "code": "28067",
      "name": "Jones County (MS)"
     },
     {
      "code": "28069",
      "name": "Kemper County (MS)"
     },
     {
      "code": "28071",
      "name": "Lafayette County (MS)"
     },
     {
      "code": "28073",
      "name": "Lamar County (MS)"
     },
     {
      "code": "28075",
      "name": "Lauderdale County (MS)"
     },
     {
      "code": "28077",
      "name": "Lawrence County (MS)"
     },
     {
      "code": "28079",
      "name": "Leake County (MS)"
     },
     {
      "code": "28081",
      "name": "Lee County (MS)"
     },
     {
      "code": "28083",
      "name": "Leflore County (MS)"
     },
     {
      "code": "28085",
      "name": "Lincoln County (MS)"
     },
     {
      "code": "28087",
      "name": "Lowndes County (MS)"
     },
     {
      "code": "28089",
      "name": "Madison County (MS)"
     },
     {
      "code": "28091",
      "name": "Marion County (MS)"
     },
     {
      "code": "28093",
      "name": "Marshall County (MS)"
     },
     {
      "code": "28095",
      "name": "Monroe County (MS)"
     },
     {
      "code": "28097",
      "name": "Montgomery County (MS)"
     },
     {
      "code": "28099",
      "name": "Neshoba County (MS)"
     },
     {
      "code": "28101",
      "name": "Newton County (MS)"
     },
     {
      "code": "28103",
      "name": "Noxubee County (MS)"
     },
     {
      "code": "28105",
      "name": "Oktibbeha County (MS)"
     },
     {
      "code": "28107",
      "name": "Panola County (MS)"
     },
     {
      "code": "28109",
      "name": "Pearl River County (MS)"
     },
     {
      "code": "28111",
      "name": "Perry County (MS)"
     },
     {
      "code": "28113",
      "name": "Pike County (MS)"
     },
     {
      "code": "28115",
      "name": "Pontotoc County (MS)"
     },
     {
      "code": "28117",
      "name": "Prentiss County (MS)"
     },
     {
      "code": "28119",
      "name": "Quitman County (MS)"
     },
     {
      "code": "28121",
      "name": "Rankin County (MS)"
     },
     {
      "code": "28123",
      "name": "Scott County (MS)"
     },
     {
      "code": "28125",
      "name": "Sharkey County (MS)"
     },
     {
      "code": "28127",
      "name": "Simpson County (MS)"
     },
     {
      "code": "28129",
      "name": "Smith County (MS)"
     },
     {
      "code": "28131",
      "name": "Stone County (MS)"
     },
     {
      "code": "28133",
      "name": "Sunflower County (MS)"
     },
     {
      "code": "28135",
      "name": "Tallahatchie County (MS)"
     },
     {
      "code": "28137",
      "name": "Tate County (MS)"
     },
     {
      "code": "28139",
      "name": "Tippah County (MS)"
     },
     {
      "code": "28141",
      "name": "Tishomingo County (MS)"
     },
     {
      "code": "28143",
      "name": "Tunica County (MS)"
     },
     {
      "code": "28145",
      "name": "Union County (MS)"
     },
     {
      "code": "28147",
      "name": "Walthall County (MS)"
     },
     {
      "code": "28149",
      "name": "Warren County (MS)"
     },
     {
      "code": "28151",
      "name": "Washington County (MS)"
     },
     {
      "code": "28153",
      "name": "Wayne County (MS)"
     },
     {
      "code": "28155",
      "name": "Webster County (MS)"
     },
     {
      "code": "28157",
      "name": "Wilkinson County (MS)"
     },
     {
      "code": "28159",
      "name": "Winston County (MS)"
     },
     {
      "code": "28161",
      "name": "Yalobusha County (MS)"
     },
     {
      "code": "28163",
      "name": "Yazoo County (MS)"
     },
     {
      "code": "29001",
      "name": "Adair County (MO)"
     },
     {
      "code": "29003",
      "name": "Andrew County (MO)"
     },
     {
      "code": "29005",
      "name": "Atchison County (MO)"
     },
     {
      "code": "29007",
      "name": "Audrain County (MO)"
     },
     {
      "code": "29009",
      "name": "Barry County (MO)"
     },
     {
      "code": "29011",
      "name": "Barton County (MO)"
     },
     {
      "code": "29013",
      "name": "Bates County (MO)"
     },
     {
      "code": "29015",
      "name": "Benton County (MO)"
     },
     {
      "code": "29017",
      "name": "Bollinger County (MO)"
     },
     {
      "code": "29019",
      "name": "Boone County (MO)"
     },
     {
      "code": "29021",
      "name": "Buchanan County (MO)"
     },
     {
      "code": "29023",
      "name": "Butler County (MO)"
     },
     {
      "code": "29025",
      "name": "Caldwell County (MO)"
     },
     {
      "code": "29027",
      "name": "Callaway County (MO)"
     },
     {
      "code": "29029",
      "name": "Camden County (MO)"
     },
     {
      "code": "29031",
      "name": "Cape Girardeau County (MO)"
     },
     {
      "code": "29033",
      "name": "Carroll County (MO)"
     },
     {
      "code": "29035",
      "name": "Carter County (MO)"
     },
     {
      "code": "29037",
      "name": "Cass County (MO)"
     },
     {
      "code": "29039",
      "name": "Cedar County (MO)"
     },
     {
      "code": "29041",
      "name": "Chariton County (MO)"
     },
     {
      "code": "29043",
      "name": "Christian County (MO)"
     },
     {
      "code": "29045",
      "name": "Clark County (MO)"
     },
     {
      "code": "29047",
      "name": "Clay County (MO)"
     },
     {
      "code": "29049",
      "name": "Clinton County (MO)"
     },
     {
      "code": "29051",
      "name": "Cole County (MO)"
     },
     {
      "code": "29053",
      "name": "Cooper County (MO)"
     },
     {
      "code": "29055",
      "name": "Crawford County (MO)"
     },
     {
      "code": "29057",
      "name": "Dade County (MO)"
     },
     {
      "code": "29059",
      "name": "Dallas County (MO)"
     },
     {
      "code": "29061",
      "name": "Daviess County (MO)"
     },
     {
      "code": "29063",
      "name": "DeKalb County (MO)"
     },
     {
      "code": "29065",
      "name": "Dent County (MO)"
     },
     {
      "code": "29067",
      "name": "Douglas County (MO)"
     },
     {
      "code": "29069",
      "name": "Dunklin County (MO)"
     },
     {
      "code": "29071",
      "name": "Franklin County (MO)"
     },
     {
      "code": "29073",
      "name": "Gasconade County (MO)"
     },
     {
      "code": "29075",
      "name": "Gentry County (MO)"
     },
     {
      "code": "29077",
      "name": "Greene County (MO)"
     },
     {
      "code": "29079",
      "name": "Grundy County (MO)"
     },
     {
      "code": "29081",
      "name": "Harrison County (MO)"
     },
     {
      "code": "29083",
      "name": "Henry County (MO)"
     },
     {
      "code": "29085",
      "name": "Hickory County (MO)"
     },
     {
      "code": "29087",
      "name": "Holt County (MO)"
     },
     {
      "code": "29089",
      "name": "Howard County (MO)"
     },
     {
      "code": "29091",
      "name": "Howell County (MO)"
     },
     {
      "code": "29093",
      "name": "Iron County (MO)"
     },
     {
      "code": "29095",
      "name": "Jackson County (MO)"
     },
     {
      "code": "29097",
      "name": "Jasper County (MO)"
     },
     {
      "code": "29099",
      "name": "Jefferson County (MO)"
     },
     {
      "code": "29101",
      "name": "Johnson County (MO)"
     },
     {
      "code": "29103",
      "name": "Knox County (MO)"
     },
     {
      "code": "29105",
      "name": "Laclede County (MO)"
     },
     {
      "code": "29107",
      "name": "Lafayette County (MO)"
     },
     {
      "code": "29109",
      "name": "Lawrence County (MO)"
     },
     {
      "code": "29111",
      "name": "Lewis County (MO)"
     },
     {
      "code": "29113",
      "name": "Lincoln County (MO)"
     },
     {
      "code": "29115",
      "name": "Linn County (MO)"
     },
     {
      "code": "29117",
      "name": "Livingston County (MO)"
     },
     {
      "code": "29119",
      "name": "McDonald County (MO)"
     },
     {
      "code": "29121",
      "name": "Macon County (MO)"
     },
     {
      "code": "29123",
      "name": "Madison County (MO)"
     },
     {
      "code": "29125",
      "name": "Maries County (MO)"
     },
     {
      "code": "29127",
      "name": "Marion County (MO)"
     },
     {
      "code": "29129",
      "name": "Mercer County (MO)"
     },
     {
      "code": "29131",
      "name": "Miller County (MO)"
     },
     {
      "code": "29133",
      "name": "Mississippi County (MO)"
     },
     {
      "code": "29135",
      "name": "Moniteau County (MO)"
     },
     {
      "code": "29137",
      "name": "Monroe County (MO)"
     },
     {
      "code": "29139",
      "name": "Montgomery County (MO)"
     },
     {
      "code": "29141",
      "name": "Morgan County (MO)"
     },
     {
      "code": "29143",
      "name": "New Madrid County (MO)"
     },
     {
      "code": "29145",
      "name": "Newton County (MO)"
     },
     {
      "code": "29147",
      "name": "Nodaway County (MO)"
     },
     {
      "code": "29149",
      "name": "Oregon County (MO)"
     },
     {
      "code": "29151",
      "name": "Osage County (MO)"
     },
     {
      "code": "29153",
      "name": "Ozark County (MO)"
     },
     {
      "code": "29155",
      "name": "Pemiscot County (MO)"
     },
     {
      "code": "29157",
      "name": "Perry County (MO)"
     },
     {
      "code": "29159",
      "name": "Pettis County (MO)"
     },
     {
      "code": "29161",
      "name": "Phelps County (MO)"
     },
     {
      "code": "29163",
      "name": "Pike County (MO)"
     },
     {
      "code": "29165",
      "name": "Platte County (MO)"
     },
     {
      "code": "29167",
      "name": "Polk County (MO)"
     },
     {
      "code": "29169",
      "name": "Pulaski County (MO)"
     },
     {
      "code": "29171",
      "name": "Putnam County (MO)"
     },
     {
      "code": "29173",
      "name": "Ralls County (MO)"
     },
     {
      "code": "29175",
      "name": "Randolph County (MO)"
     },
     {
      "code": "29177",
      "name": "Ray County (MO)"
     },
     {
      "code": "29179",
      "name": "Reynolds County (MO)"
     },
     {
      "code": "29181",
      "name": "Ripley County (MO)"
     },
     {
      "code": "29183",
      "name": "St. Charles County (MO)"
     },
     {
      "code": "29185",
      "name": "St. Clair County (MO)"
     },
     {
      "code": "29186",
      "name": "Ste. Genevieve County (MO)"
     },
     {
      "code": "29187",
      "name": "St. Francois County (MO)"
     },
     {
      "code": "29189",
      "name": "St. Louis County (MO)"
     },
     {
      "code": "29195",
      "name": "Saline County (MO)"
     },
     {
      "code": "29197",
      "name": "Schuyler County (MO)"
     },
     {
      "code": "29199",
      "name": "Scotland County (MO)"
     },
     {
      "code": "29201",
      "name": "Scott County (MO)"
     },
     {
      "code": "29203",
      "name": "Shannon County (MO)"
     },
     {
      "code": "29205",
      "name": "Shelby County (MO)"
     },
     {
      "code": "29207",
      "name": "Stoddard County (MO)"
     },
     {
      "code": "29209",
      "name": "Stone County (MO)"
     },
     {
      "code": "29211",
      "name": "Sullivan County (MO)"
     },
     {
      "code": "29213",
      "name": "Taney County (MO)"
     },
     {
      "code": "29215",
      "name": "Texas County (MO)"
     },
     {
      "code": "29217",
      "name": "Vernon County (MO)"
     },
     {
      "code": "29219",
      "name": "Warren County (MO)"
     },
     {
      "code": "29221",
      "name": "Washington County (MO)"
     },
     {
      "code": "29223",
      "name": "Wayne County (MO)"
     },
     {
      "code": "29225",
      "name": "Webster County (MO)"
     },
     {
      "code": "29227",
      "name": "Worth County (MO)"
     },
     {
      "code": "29229",
      "name": "Wright County (MO)"
     },
     {
      "code": "29510",
      "name": "St. Louis city (MO)"
     },
     {
      "code": "30001",
      "name": "Beaverhead County (MT)"
     },
     {
      "code": "30003",
      "name": "Big Horn County (MT)"
     },
     {
      "code": "30005",
      "name": "Blaine County (MT)"
     },
     {
      "code": "30007",
      "name": "Broadwater County (MT)"
     },
     {
      "code": "30009",
      "name": "Carbon County (MT)"
     },
     {
      "code": "30011",
      "name": "Carter County (MT)"
     },
     {
      "code": "30013",
      "name": "Cascade County (MT)"
     },
     {
      "code": "30015",
      "name": "Chouteau County (MT)"
     },
     {
      "code": "30017",
      "name": "Custer County (MT)"
     },
     {
      "code": "30019",
      "name": "Daniels County (MT)"
     },
     {
      "code": "30021",
      "name": "Dawson County (MT)"
     },
     {
      "code": "30023",
      "name": "Deer Lodge County (MT)"
     },
     {
      "code": "30025",
      "name": "Fallon County (MT)"
     },
     {
      "code": "30027",
      "name": "Fergus County (MT)"
     },
     {
      "code": "30029",
      "name": "Flathead County (MT)"
     },
     {
      "code": "30031",
      "name": "Gallatin County (MT)"
     },
     {
      "code": "30033",
      "name": "Garfield County (MT)"
     },
     {
      "code": "30035",
      "name": "Glacier County (MT)"
     },
     {
      "code": "30037",
      "name": "Golden Valley County (MT)"
     },
     {
      "code": "30039",
      "name": "Granite County (MT)"
     },
     {
      "code": "30041",
      "name": "Hill County (MT)"
     },
     {
      "code": "30043",
      "name": "Jefferson County (MT)"
     },
     {
      "code": "30045",
      "name": "Judith Basin County (MT)"
     },
     {
      "code": "30047",
      "name": "Lake County (MT)"
     },
     {
      "code": "30049",
      "name": "Lewis and Clark County (MT)"
     },
     {
      "code": "30051",
      "name": "Liberty County (MT)"
     },
     {
      "code": "30053",
      "name": "Lincoln County (MT)"
     },
     {
      "code": "30055",
      "name": "McCone County (MT)"
     },
     {
      "code": "30057",
      "name": "Madison County (MT)"
     },
     {
      "code": "30059",
      "name": "Meagher County (MT)"
     },
     {
      "code": "30061",
      "name": "Mineral County (MT)"
     },
     {
      "code": "30063",
      "name": "Missoula County (MT)"
     },
     {
      "code": "30065",
      "name": "Musselshell County (MT)"
     },
     {
      "code": "30067",
      "name": "Park County (MT)"
     },
     {
      "code": "30069",
      "name": "Petroleum County (MT)"
     },
     {
      "code": "30071",
      "name": "Phillips County (MT)"
     },
     {
      "code": "30073",
      "name": "Pondera County (MT)"
     },
     {
      "code": "30075",
      "name": "Powder River County (MT)"
     },
     {
      "code": "30077",
      "name": "Powell County (MT)"
     },
     {
      "code": "30079",
      "name": "Prairie County (MT)"
     },
     {
      "code": "30081",
      "name": "Ravalli County (MT)"
     },
     {
      "code": "30083",
      "name": "Richland County (MT)"
     },
     {
      "code": "30085",
      "name": "Roosevelt County (MT)"
     },
     {
      "code": "30087",
      "name": "Rosebud County (MT)"
     },
     {
      "code": "30089",
      "name": "Sanders County (MT)"
     },
     {
      "code": "30091",
      "name": "Sheridan County (MT)"
     },
     {
      "code": "30093",
      "name": "Silver Bow County (MT)"
     },
     {
      "code": "30095",
      "name": "Stillwater County (MT)"
     },
     {
      "code": "30097",
      "name": "Sweet Grass County (MT)"
     },
     {
      "code": "30099",
      "name": "Teton County (MT)"
     },
     {
      "code": "30101",
      "name": "Toole County (MT)"
     },
     {
      "code": "30103",
      "name": "Treasure County (MT)"
     },
     {
      "code": "30105",
      "name": "Valley County (MT)"
     },
     {
      "code": "30107",
      "name": "Wheatland County (MT)"
     },
     {
      "code": "30109",
      "name": "Wibaux County (MT)"
     },
     {
      "code": "30111",
      "name": "Yellowstone County (MT)"
     },
     {
      "code": "30113",
      "name": "Yellowstone Nat Park (MT)"
     },
     {
      "code": "31001",
      "name": "Adams County (NE)"
     },
     {
      "code": "31003",
      "name": "Antelope County (NE)"
     },
     {
      "code": "31005",
      "name": "Arthur County (NE)"
     },
     {
      "code": "31007",
      "name": "Banner County (NE)"
     },
     {
      "code": "31009",
      "name": "Blaine County (NE)"
     },
     {
      "code": "31011",
      "name": "Boone County (NE)"
     },
     {
      "code": "31013",
      "name": "Box Butte County (NE)"
     },
     {
      "code": "31015",
      "name": "Boyd County (NE)"
     },
     {
      "code": "31017",
      "name": "Brown County (NE)"
     },
     {
      "code": "31019",
      "name": "Buffalo County (NE)"
     },
     {
      "code": "31021",
      "name": "Burt County (NE)"
     },
     {
      "code": "31023",
      "name": "Butler County (NE)"
     },
     {
      "code": "31025",
      "name": "Cass County (NE)"
     },
     {
      "code": "31027",
      "name": "Cedar County (NE)"
     },
     {
      "code": "31029",
      "name": "Chase County (NE)"
     },
     {
      "code": "31031",
      "name": "Cherry County (NE)"
     },
     {
      "code": "31033",
      "name": "Cheyenne County (NE)"
     },
     {
      "code": "31035",
      "name": "Clay County (NE)"
     },
     {
      "code": "31037",
      "name": "Colfax County (NE)"
     },
     {
      "code": "31039",
      "name": "Cuming County (NE)"
     },
     {
      "code": "31041",
      "name": "Custer County (NE)"
     },
     {
      "code": "31043",
      "name": "Dakota County (NE)"
     },
     {
      "code": "31045",
      "name": "Dawes County (NE)"
     },
     {
      "code": "31047",
      "name": "Dawson County (NE)"
     },
     {
      "code": "31049",
      "name": "Deuel County (NE)"
     },
     {
      "code": "31051",
      "name": "Dixon County (NE)"
     },
     {
      "code": "31053",
      "name": "Dodge County (NE)"
     },
     {
      "code": "31055",
      "name": "Douglas County (NE)"
     },
     {
      "code": "31057",
      "name": "Dundy County (NE)"
     },
     {
      "code": "31059",
      "name": "Fillmore County (NE)"
     },
     {
      "code": "31061",
      "name": "Franklin County (NE)"
     },
     {
      "code": "31063",
      "name": "Frontier County (NE)"
     },
     {
      "code": "31065",
      "name": "Furnas County (NE)"
     },
     {
      "code": "31067",
      "name": "Gage County (NE)"
     },
     {
      "code": "31069",
      "name": "Garden County (NE)"
     },
     {
      "code": "31071",
      "name": "Garfield County (NE)"
     },
     {
      "code": "31073",
      "name": "Gosper County (NE)"
     },
     {
      "code": "31075",
      "name": "Grant County (NE)"
     },
     {
      "code": "31077",
      "name": "Greeley County (NE)"
     },
     {
      "code": "31079",
      "name": "Hall County (NE)"
     },
     {
      "code": "31081",
      "name": "Hamilton County (NE)"
     },
     {
      "code": "31083",
      "name": "Harlan County (NE)"
     },
     {
      "code": "31085",
      "name": "Hayes County (NE)"
     },
     {
      "code": "31087",
      "name": "Hitchcock County (NE)"
     },
     {
      "code": "31089",
      "name": "Holt County (NE)"
     },
     {
      "code": "31091",
      "name": "Hooker County (NE)"
     },
     {
      "code": "31093",
      "name": "Howard County (NE)"
     },
     {
      "code": "31095",
      "name": "Jefferson County (NE)"
     },
     {
      "code": "31097",
      "name": "Johnson County (NE)"
     },
     {
      "code": "31099",
      "name": "Kearney County (NE)"
     },
     {
      "code": "31101",
      "name": "Keith County (NE)"
     },
     {
      "code": "31103",
      "name": "Keya Paha County (NE)"
     },
     {
      "code": "31105",
      "name": "Kimball County (NE)"
     },
     {
      "code": "31107",
      "name": "Knox County (NE)"
     },
     {
      "code": "31109",
      "name": "Lancaster County (NE)"
     },
     {
      "code": "31111",
      "name": "Lincoln County (NE)"
     },
     {
      "code": "31113",
      "name": "Logan County (NE)"
     },
     {
      "code": "31115",
      "name": "Loup County (NE)"
     },
     {
      "code": "31117",
      "name": "McPherson County (NE)"
     },
     {
      "code": "31119",
      "name": "Madison County (NE)"
     },
     {
      "code": "31121",
      "name": "Merrick County (NE)"
     },
     {
      "code": "31123",
      "name": "Morrill County (NE)"
     },
     {
      "code": "31125",
      "name": "Nance County (NE)"
     },
     {
      "code": "31127",
      "name": "Nemaha County (NE)"
     },
     {
      "code": "31129",
      "name": "Nuckolls County (NE)"
     },
     {
      "code": "31131",
      "name": "Otoe County (NE)"
     },
     {
      "code": "31133",
      "name": "Pawnee County (NE)"
     },
     {
      "code": "31135",
      "name": "Perkins County (NE)"
     },
     {
      "code": "31137",
      "name": "Phelps County (NE)"
     },
     {
      "code": "31139",
      "name": "Pierce County (NE)"
     },
     {
      "code": "31141",
      "name": "Platte County (NE)"
     },
     {
      "code": "31143",
      "name": "Polk County (NE)"
     },
     {
      "code": "31145",
      "name": "Red Willow County (NE)"
     },
     {
      "code": "31147",
      "name": "Richardson County (NE)"
     },
     {
      "code": "31149",
      "name": "Rock County (NE)"
     },
     {
      "code": "31151",
      "name": "Saline County (NE)"
     },
     {
      "code": "31153",
      "name": "Sarpy County (NE)"
     },
     {
      "code": "31155",
      "name": "Saunders County (NE)"
     },
     {
      "code": "31157",
      "name": "Scotts Bluff County (NE)"
     },
     {
      "code": "31159",
      "name": "Seward County (NE)"
     },
     {
      "code": "31161",
      "name": "Sheridan County (NE)"
     },
     {
      "code": "31163",
      "name": "Sherman County (NE)"
     },
     {
      "code": "31165",
      "name": "Sioux County (NE)"
     },
     {
      "code": "31167",
      "name": "Stanton County (NE)"
     },
     {
      "code": "31169",
      "name": "Thayer County (NE)"
     },
     {
      "code": "31171",
      "name": "Thomas County (NE)"
     },
     {
      "code": "31173",
      "name": "Thurston County (NE)"
     },
     {
      "code": "31175",
      "name": "Valley County (NE)"
     },
     {
      "code": "31177",
      "name": "Washington County (NE)"
     },
     {
      "code": "31179",
      "name": "Wayne County (NE)"
     },
     {
      "code": "31181",
      "name": "Webster County (NE)"
     },
     {
      "code": "31183",
      "name": "Wheeler County (NE)"
     },
     {
      "code": "31185",
      "name": "York County (NE)"
     },
     {
      "code": "32001",
      "name": "Churchill County (NV)"
     },
     {
      "code": "32003",
      "name": "Clark County (NV)"
     },
     {
      "code": "32005",
      "name": "Douglas County (NV)"
     },
     {
      "code": "32007",
      "name": "Elko County (NV)"
     },
     {
      "code": "32009",
      "name": "Esmeralda County (NV)"
     },
     {
      "code": "32011",
      "name": "Eureka County (NV)"
     },
     {
      "code": "32013",
      "name": "Humboldt County (NV)"
     },
     {
      "code": "32015",
      "name": "Lander County (NV)"
     },
     {
      "code": "32017",
      "name": "Lincoln County (NV)"
     },
     {
      "code": "32019",
      "name": "Lyon County (NV)"
     },
     {
      "code": "32021",
      "name": "Mineral County (NV)"
     },
     {
      "code": "32023",
      "name": "Nye County (NV)"
     },
     {
      "code": "32027",
      "name": "Pershing County (NV)"
     },
     {
      "code": "32029",
      "name": "Storey County (NV)"
     },
     {
      "code": "32031",
      "name": "Washoe County (NV)"
     },
     {
      "code": "32033",
      "name": "White Pine County (NV)"
     },
     {
      "code": "32510",
      "name": "Carson City (NV)"
     },
     {
      "code": "33001",
      "name": "Belknap County (NH)"
     },
     {
      "code": "33003",
      "name": "Carroll County (NH)"
     },
     {
      "code": "33005",
      "name": "Cheshire County (NH)"
     },
     {
      "code": "33007",
      "name": "Coos County (NH)"
     },
     {
      "code": "33009",
      "name": "Grafton County (NH)"
     },
     {
      "code": "33011",
      "name": "Hillsborough County (NH)"
     },
     {
      "code": "33013",
      "name": "Merrimack County (NH)"
     },
     {
      "code": "33015",
      "name": "Rockingham County (NH)"
     },
     {
      "code": "33017",
      "name": "Strafford County (NH)"
     },
     {
      "code": "33019",
      "name": "Sullivan County (NH)"
     },
     {
      "code": "34001",
      "name": "Atlantic County (NJ)"
     },
     {
      "code": "34003",
      "name": "Bergen County (NJ)"
     },
     {
      "code": "34005",
      "name": "Burlington County (NJ)"
     },
     {
      "code": "34007",
      "name": "Camden County (NJ)"
     },
     {
      "code": "34009",
      "name": "Cape May County (NJ)"
     },
     {
      "code": "34011",
      "name": "Cumberland County (NJ)"
     },
     {
      "code": "34013",
      "name": "Essex County (NJ)"
     },
     {
      "code": "34015",
      "name": "Gloucester County (NJ)"
     },
     {
      "code": "34017",
      "name": "Hudson County (NJ)"
     },
     {
      "code": "34019",
      "name": "Hunterdon County (NJ)"
     },
     {
      "code": "34021",
      "name": "Mercer County (NJ)"
     },
     {
      "code": "34023",
      "name": "Middlesex County (NJ)"
     },
     {
      "code": "34025",
      "name": "Monmouth County (NJ)"
     },
     {
      "code": "34027",
      "name": "Morris County (NJ)"
     },
     {
      "code": "34029",
      "name": "Ocean County (NJ)"
     },
     {
      "code": "34031",
      "name": "Passaic County (NJ)"
     },
     {
      "code": "34033",
      "name": "Salem County (NJ)"
     },
     {
      "code": "34035",
      "name": "Somerset County (NJ)"
     },
     {
      "code": "34037",
      "name": "Sussex County (NJ)"
     },
     {
      "code": "34039",
      "name": "Union County (NJ)"
     },
     {
      "code": "34041",
      "name": "Warren County (NJ)"
     },
     {
      "code": "35001",
      "name": "Bernalillo County (NM)"
     },
     {
      "code": "35003",
      "name": "Catron County (NM)"
     },
     {
      "code": "35005",
      "name": "Chaves County (NM)"
     },
     {
      "code": "35006",
      "name": "Cibola County (NM)"
     },
     {
      "code": "35007",
      "name": "Colfax County (NM)"
     },
     {
      "code": "35009",
      "name": "Curry County (NM)"
     },
     {
      "code": "35011",
      "name": "De Baca County (NM)"
     },
     {
      "code": "35013",
      "name": "Dona Ana County (NM)"
     },
     {
      "code": "35015",
      "name": "Eddy County (NM)"
     },
     {
      "code": "35017",
      "name": "Grant County (NM)"
     },
     {
      "code": "35019",
      "name": "Guadalupe County (NM)"
     },
     {
      "code": "35021",
      "name": "Harding County (NM)"
     },
     {
      "code": "35023",
      "name": "Hidalgo County (NM)"
     },
     {
      "code": "35025",
      "name": "Lea County (NM)"
     },
     {
      "code": "35027",
      "name": "Lincoln County (NM)"
     },
     {
      "code": "35028",
      "name": "Los Alamos County (NM)"
     },
     {
      "code": "35029",
      "name": "Luna County (NM)"
     },
     {
      "code": "35031",
      "name": "McKinley County (NM)"
     },
     {
      "code": "35033",
      "name": "Mora County (NM)"
     },
     {
      "code": "35035",
      "name": "Otero County (NM)"
     },
     {
      "code": "35037",
      "name": "Quay County (NM)"
     },
     {
      "code": "35039",
      "name": "Rio Arriba County (NM)"
     },
     {
      "code": "35041",
      "name": "Roosevelt County (NM)"
     },
     {
      "code": "35043",
      "name": "Sandoval County (NM)"
     },
     {
      "code": "35045",
      "name": "San Juan County (NM)"
     },
     {
      "code": "35047",
      "name": "San Miguel County (NM)"
     },
     {
      "code": "35049",
      "name": "Santa Fe County (NM)"
     },
     {
      "code": "35051",
      "name": "Sierra County (NM)"
     },
     {
      "code": "35053",
      "name": "Socorro County (NM)"
     },
     {
      "code": "35055",
      "name": "Taos County (NM)"
     },
     {
      "code": "35057",
      "name": "Torrance County (NM)"
     },
     {
      "code": "35059",
      "name": "Union County (NM)"
     },
     {
      "code": "35061",
      "name": "Valencia County (NM)"
     },
     {
      "code": "36001",
      "name": "Albany County (NY)"
     },
     {
      "code": "36003",
      "name": "Allegany County (NY)"
     },
     {
      "code": "36005",
      "name": "Bronx County (NY)"
     },
     {
      "code": "36007",
      "name": "Broome County (NY)"
     },
     {
      "code": "36009",
      "name": "Cattaraugus County (NY)"
     },
     {
      "code": "36011",
      "name": "Cayuga County (NY)"
     },
     {
      "code": "36013",
      "name": "Chautauqua County (NY)"
     },
     {
      "code": "36015",
      "name": "Chemung County (NY)"
     },
     {
      "code": "36017",
      "name": "Chenango County (NY)"
     },
     {
      "code": "36019",
      "name": "Clinton County (NY)"
     },
     {
      "code": "36021",
      "name": "Columbia County (NY)"
     },
     {
      "code": "36023",
      "name": "Cortland County (NY)"
     },
     {
      "code": "36025",
      "name": "Delaware County (NY)"
     },
     {
      "code": "36027",
      "name": "Dutchess County (NY)"
     },
     {
      "code": "36029",
      "name": "Erie County (NY)"
     },
     {
      "code": "36031",
      "name": "Essex County (NY)"
     },
     {
      "code": "36033",
      "name": "Franklin County (NY)"
     },
     {
      "code": "36035",
      "name": "Fulton County (NY)"
     },
     {
      "code": "36037",
      "name": "Genesee County (NY)"
     },
     {
      "code": "36039",
      "name": "Greene County (NY)"
     },
     {
      "code": "36041",
      "name": "Hamilton County (NY)"
     },
     {
      "code": "36043",
      "name": "Herkimer County (NY)"
     },
     {
      "code": "36045",
      "name": "Jefferson County (NY)"
     },
     {
      "code": "36047",
      "name": "Kings County (NY)"
     },
     {
      "code": "36049",
      "name": "Lewis County (NY)"
     },
     {
      "code": "36051",
      "name": "Livingston County (NY)"
     },
     {
      "code": "36053",
      "name": "Madison County (NY)"
     },
     {
      "code": "36055",
      "name": "Monroe County (NY)"
     },
     {
      "code": "36057",
      "name": "Montgomery County (NY)"
     },
     {
      "code": "36059",
      "name": "Nassau County (NY)"
     },
     {
      "code": "36061",
      "name": "New York County (NY)"
     },
     {
      "code": "36063",
      "name": "Niagara County (NY)"
     },
     {
      "code": "36065",
      "name": "Oneida County (NY)"
     },
     {
      "code": "36067",
      "name": "Onondaga County (NY)"
     },
     {
      "code": "36069",
      "name": "Ontario County (NY)"
     },
     {
      "code": "36071",
      "name": "Orange County (NY)"
     },
     {
      "code": "36073",
      "name": "Orleans County (NY)"
     },
     {
      "code": "36075",
      "name": "Oswego County (NY)"
     },
     {
      "code": "36077",
      "name": "Otsego County (NY)"
     },
     {
      "code": "36079",
      "name": "Putnam County (NY)"
     },
     {
      "code": "36081",
      "name": "Queens County (NY)"
     },
     {
      "code": "36083",
      "name": "Rensselaer County (NY)"
     },
     {
      "code": "36085",
      "name": "Richmond County (NY)"
     },
     {
      "code": "36087",
      "name": "Rockland County (NY)"
     },
     {
      "code": "36089",
      "name": "St. Lawrence County (NY)"
     },
     {
      "code": "36091",
      "name": "Saratoga County (NY)"
     },
     {
      "code": "36093",
      "name": "Schenectady County (NY)"
     },
     {
      "code": "36095",
      "name": "Schoharie County (NY)"
     },
     {
      "code": "36097",
      "name": "Schuyler County (NY)"
     },
     {
      "code": "36099",
      "name": "Seneca County (NY)"
     },
     {
      "code": "36101",
      "name": "Steuben County (NY)"
     },
     {
      "code": "36103",
      "name": "Suffolk County (NY)"
     },
     {
      "code": "36105",
      "name": "Sullivan County (NY)"
     },
     {
      "code": "36107",
      "name": "Tioga County (NY)"
     },
     {
      "code": "36109",
      "name": "Tompkins County (NY)"
     },
     {
      "code": "36111",
      "name": "Ulster County (NY)"
     },
     {
      "code": "36113",
      "name": "Warren County (NY)"
     },
     {
      "code": "36115",
      "name": "Washington County (NY)"
     },
     {
      "code": "36117",
      "name": "Wayne County (NY)"
     },
     {
      "code": "36119",
      "name": "Westchester County (NY)"
     },
     {
      "code": "36121",
      "name": "Wyoming County (NY)"
     },
     {
      "code": "36123",
      "name": "Yates County (NY)"
     },
     {
      "code": "37001",
      "name": "Alamance County (NC)"
     },
     {
      "code": "37003",
      "name": "Alexander County (NC)"
     },
     {
      "code": "37005",
      "name": "Alleghany County (NC)"
     },
     {
      "code": "37007",
      "name": "Anson County (NC)"
     },
     {
      "code": "37009",
      "name": "Ashe County (NC)"
     },
     {
      "code": "37011",
      "name": "Avery County (NC)"
     },
     {
      "code": "37013",
      "name": "Beaufort County (NC)"
     },
     {
      "code": "37015",
      "name": "Bertie County (NC)"
     },
     {
      "code": "37017",
      "name": "Bladen County (NC)"
     },
     {
      "code": "37019",
      "name": "Brunswick County (NC)"
     },
     {
      "code": "37021",
      "name": "Buncombe County (NC)"
     },
     {
      "code": "37023",
      "name": "Burke County (NC)"
     },
     {
      "code": "37025",
      "name": "Cabarrus County (NC)"
     },
     {
      "code": "37027",
      "name": "Caldwell County (NC)"
     },
     {
      "code": "37029",
      "name": "Camden County (NC)"
     },
     {
      "code": "37031",
      "name": "Carteret County (NC)"
     },
     {
      "code": "37033",
      "name": "Caswell County (NC)"
     },
     {
      "code": "37035",
      "name": "Catawba County (NC)"
     },
     {
      "code": "37037",
      "name": "Chatham County (NC)"
     },
     {
      "code": "37039",
      "name": "Cherokee County (NC)"
     },
     {
      "code": "37041",
      "name": "Chowan County (NC)"
     },
     {
      "code": "37043",
      "name": "Clay County (NC)"
     },
     {
      "code": "37045",
      "name": "Cleveland County (NC)"
     },
     {
      "code": "37047",
      "name": "Columbus County (NC)"
     },
     {
      "code": "37049",
      "name": "Craven County (NC)"
     },
     {
      "code": "37051",
      "name": "Cumberland County (NC)"
     },
     {
      "code": "37053",
      "name": "Currituck County (NC)"
     },
     {
      "code": "37055",
      "name": "Dare County (NC)"
     },
     {
      "code": "37057",
      "name": "Davidson County (NC)"
     },
     {
      "code": "37059",
      "name": "Davie County (NC)"
     },
     {
      "code": "37061",
      "name": "Duplin County (NC)"
     },
     {
      "code": "37063",
      "name": "Durham County (NC)"
     },
     {
      "code": "37065",
      "name": "Edgecombe County (NC)"
     },
     {
      "code": "37067",
      "name": "Forsyth County (NC)"
     },
     {
      "code": "37069",
      "name": "Franklin County (NC)"
     },
     {
      "code": "37071",
      "name": "Gaston County (NC)"
     },
     {
      "code": "37073",
      "name": "Gates County (NC)"
     },
     {
      "code": "37075",
      "name": "Graham County (NC)"
     },
     {
      "code": "37077",
      "name": "Granville County (NC)"
     },
     {
      "code": "37079",
      "name": "Greene County (NC)"
     },
     {
      "code": "37081",
      "name": "Guilford County (NC)"
     },
     {
      "code": "37083",
      "name": "Halifax County (NC)"
     },
     {
      "code": "37085",
      "name": "Harnett County (NC)"
     },
     {
      "code": "37087",
      "name": "Haywood County (NC)"
     },
     {
      "code": "37089",
      "name": "Henderson County (NC)"
     },
     {
      "code": "37091",
      "name": "Hertford County (NC)"
     },
     {
      "code": "37093",
      "name": "Hoke County (NC)"
     },
     {
      "code": "37095",
      "name": "Hyde County (NC)"
     },
     {
      "code": "37097",
      "name": "Iredell County (NC)"
     },
     {
      "code": "37099",
      "name": "Jackson County (NC)"
     },
     {
      "code": "37101",
      "name": "Johnston County (NC)"
     },
     {
      "code": "37103",
      "name": "Jones County (NC)"
     },
     {
      "code": "37105",
      "name": "Lee County (NC)"
     },
     {
      "code": "37107",
      "name": "Lenoir County (NC)"
     },
     {
      "code": "37109",
      "name": "Lincoln County (NC)"
     },
     {
      "code": "37111",
      "name": "McDowell County (NC)"
     },
     {
      "code": "37113",
      "name": "Macon County (NC)"
     },
     {
      "code": "37115",
      "name": "Madison County (NC)"
     },
     {
      "code": "37117",
      "name": "Martin County (NC)"
     },
     {
      "code": "37119",
      "name": "Mecklenburg County (NC)"
     },
     {
      "code": "37121",
      "name": "Mitchell County (NC)"
     },
     {
      "code": "37123",
      "name": "Montgomery County (NC)"
     },
     {
      "code": "37125",
      "name": "Moore County (NC)"
     },
     {
      "code": "37127",
      "name": "Nash County (NC)"
     },
     {
      "code": "37129",
      "name": "New Hanover County (NC)"
     },
     {
      "code": "37131",
      "name": "Northampton County (NC)"
     },
     {
      "code": "37133",
      "name": "Onslow County (NC)"
     },
     {
      "code": "37135",
      "name": "Orange County (NC)"
     },
     {
      "code": "37137",
      "name": "Pamlico County (NC)"
     },
     {
      "code": "37139",
      "name": "Pasquotank County (NC)"
     },
     {
      "code": "37141",
      "name": "Pender County (NC)"
     },
     {
      "code": "37143",
      "name": "Perquimans County (NC)"
     },
     {
      "code": "37145",
      "name": "Person County (NC)"
     },
     {
      "code": "37147",
      "name": "Pitt County (NC)"
     },
     {
      "code": "37149",
      "name": "Polk County (NC)"
     },
     {
      "code": "37151",
      "name": "Randolph County (NC)"
     },
     {
      "code": "37153",
      "name": "Richmond County (NC)"
     },
     {
      "code": "37155",
      "name": "Robeson County (NC)"
     },
     {
      "code": "37157",
      "name": "Rockingham County (NC)"
     },
     {
      "code": "37159",
      "name": "Rowan County (NC)"
     },
     {
      "code": "37161",
      "name": "Rutherford County (NC)"
     },
     {
      "code": "37163",
      "name": "Sampson County (NC)"
     },
     {
      "code": "37165",
      "name": "Scotland County (NC)"
     },
     {
      "code": "37167",
      "name": "Stanly County (NC)"
     },
     {
      "code": "37169",
      "name": "Stokes County (NC)"
     },
     {
      "code": "37171",
      "name": "Surry County (NC)"
     },
     {
      "code": "37173",
      "name": "Swain County (NC)"
     },
     {
      "code": "37175",
      "name": "Transylvania County (NC)"
     },
     {
      "code": "37177",
      "name": "Tyrrell County (NC)"
     },
     {
      "code": "37179",
      "name": "Union County (NC)"
     },
     {
      "code": "37181",
      "name": "Vance County (NC)"
     },
     {
      "code": "37183",
      "name": "Wake County (NC)"
     },
     {
      "code": "37185",
      "name": "Warren County (NC)"
     },
     {
      "code": "37187",
      "name": "Washington County (NC)"
     },
     {
      "code": "37189",
      "name": "Watauga County (NC)"
     },
     {
      "code": "37191",
      "name": "Wayne County (NC)"
     },
     {
      "code": "37193",
      "name": "Wilkes County (NC)"
     },
     {
      "code": "37195",
      "name": "Wilson County (NC)"
     },
     {
      "code": "37197",
      "name": "Yadkin County (NC)"
     },
     {
      "code": "37199",
      "name": "Yancey County (NC)"
     },
     {
      "code": "38001",
      "name": "Adams County (ND)"
     },
     {
      "code": "38003",
      "name": "Barnes County (ND)"
     },
     {
      "code": "38005",
      "name": "Benson County (ND)"
     },
     {
      "code": "38007",
      "name": "Billings County (ND)"
     },
     {
      "code": "38009",
      "name": "Bottineau County (ND)"
     },
     {
      "code": "38011",
      "name": "Bowman County (ND)"
     },
     {
      "code": "38013",
      "name": "Burke County (ND)"
     },
     {
      "code": "38015",
      "name": "Burleigh County (ND)"
     },
     {
      "code": "38017",
      "name": "Cass County (ND)"
     },
     {
      "code": "38019",
      "name": "Cavalier County (ND)"
     },
     {
      "code": "38021",
      "name": "Dickey County (ND)"
     },
     {
      "code": "38023",
      "name": "Divide County (ND)"
     },
     {
      "code": "38025",
      "name": "Dunn County (ND)"
     },
     {
      "code": "38027",
      "name": "Eddy County (ND)"
     },
     {
      "code": "38029",
      "name": "Emmons County (ND)"
     },
     {
      "code": "38031",
      "name": "Foster County (ND)"
     },
     {
      "code": "38033",
      "name": "Golden Valley County (ND)"
     },
     {
      "code": "38035",
      "name": "Grand Forks County (ND)"
     },
     {
      "code": "38037",
      "name": "Grant County (ND)"
     },
     {
      "code": "38039",
      "name": "Griggs County (ND)"
     },
     {
      "code": "38041",
      "name": "Hettinger County (ND)"
     },
     {
      "code": "38043",
      "name": "Kidder County (ND)"
     },
     {
      "code": "38045",
      "name": "LaMoure County (ND)"
     },
     {
      "code": "38047",
      "name": "Logan County (ND)"
     },
     {
      "code": "38049",
      "name": "McHenry County (ND)"
     },
     {
      "code": "38051",
      "name": "McIntosh County (ND)"
     },
     {
      "code": "38053",
      "name": "McKenzie County (ND)"
     },
     {
      "code": "38055",
      "name": "McLean County (ND)"
     },
     {
      "code": "38057",
      "name": "Mercer County (ND)"
     },
     {
      "code": "38059",
      "name": "Morton County (ND)"
     },
     {
      "code": "38061",
      "name": "Mountrail County (ND)"
     },
     {
      "code": "38063",
      "name": "Nelson County (ND)"
     },
     {
      "code": "38065",
      "name": "Oliver County (ND)"
     },
     {
      "code": "38067",
      "name": "Pembina County (ND)"
     },
     {
      "code": "38069",
      "name": "Pierce County (ND)"
     },
     {
      "code": "38071",
      "name": "Ramsey County (ND)"
     },
     {
      "code": "38073",
      "name": "Ransom County (ND)"
     },
     {
      "code": "38075",
      "name": "Renville County (ND)"
     },
     {
      "code": "38077",
      "name": "Richland County (ND)"
     },
     {
      "code": "38079",
      "name": "Rolette County (ND)"
     },
     {
      "code": "38081",
      "name": "Sargent County (ND)"
     },
     {
      "code": "38083",
      "name": "Sheridan County (ND)"
     },
     {
      "code": "38085",
      "name": "Sioux County (ND)"
     },
     {
      "code": "38087",
      "name": "Slope County (ND)"
     },
     {
      "code": "38089",
      "name": "Stark County (ND)"
     },
     {
      "code": "38091",
      "name": "Steele County (ND)"
     },
     {
      "code": "38093",
      "name": "Stutsman County (ND)"
     },
     {
      "code": "38095",
      "name": "Towner County (ND)"
     },
     {
      "code": "38097",
      "name": "Traill County (ND)"
     },
     {
      "code": "38099",
      "name": "Walsh County (ND)"
     },
     {
      "code": "38101",
      "name": "Ward County (ND)"
     },
     {
      "code": "38103",
      "name": "Wells County (ND)"
     },
     {
      "code": "38105",
      "name": "Williams County (ND)"
     },
     {
      "code": "39001",
      "name": "Adams County (OH)"
     },
     {
      "code": "39003",
      "name": "Allen County (OH)"
     },
     {
      "code": "39005",
      "name": "Ashland County (OH)"
     },
     {
      "code": "39007",
      "name": "Ashtabula County (OH)"
     },
     {
      "code": "39009",
      "name": "Athens County (OH)"
     },
     {
      "code": "39011",
      "name": "Auglaize County (OH)"
     },
     {
      "code": "39013",
      "name": "Belmont County (OH)"
     },
     {
      "code": "39015",
      "name": "Brown County (OH)"
     },
     {
      "code": "39017",
      "name": "Butler County (OH)"
     },
     {
      "code": "39019",
      "name": "Carroll County (OH)"
     },
     {
      "code": "39021",
      "name": "Champaign County (OH)"
     },
     {
      "code": "39023",
      "name": "Clark County (OH)"
     },
     {
      "code": "39025",
      "name": "Clermont County (OH)"
     },
     {
      "code": "39027",
      "name": "Clinton County (OH)"
     },
     {
      "code": "39029",
      "name": "Columbiana County (OH)"
     },
     {
      "code": "39031",
      "name": "Coshocton County (OH)"
     },
     {
      "code": "39033",
      "name": "Crawford County (OH)"
     },
     {
      "code": "39035",
      "name": "Cuyahoga County (OH)"
     },
     {
      "code": "39037",
      "name": "Darke County (OH)"
     },
     {
      "code": "39039",
      "name": "Defiance County (OH)"
     },
     {
      "code": "39041",
      "name": "Delaware County (OH)"
     },
     {
      "code": "39043",
      "name": "Erie County (OH)"
     },
     {
      "code": "39045",
      "name": "Fairfield County (OH)"
     },
     {
      "code": "39047",
      "name": "Fayette County (OH)"
     },
     {
      "code": "39049",
      "name": "Franklin County (OH)"
     },
     {
      "code": "39051",
      "name": "Fulton County (OH)"
     },
     {
      "code": "39053",
      "name": "Gallia County (OH)"
     },
     {
      "code": "39055",
      "name": "Geauga County (OH)"
     },
     {
      "code": "39057",
      "name": "Greene County (OH)"
     },
     {
      "code": "39059",
      "name": "Guernsey County (OH)"
     },
     {
      "code": "39061",
      "name": "Hamilton County (OH)"
     },
     {
      "code": "39063",
      "name": "Hancock County (OH)"
     },
     {
      "code": "39065",
      "name": "Hardin County (OH)"
     },
     {
      "code": "39067",
      "name": "Harrison County (OH)"
     },
     {
      "code": "39069",
      "name": "Henry County (OH)"
     },
     {
      "code": "39071",
      "name": "Highland County (OH)"
     },
     {
      "code": "39073",
      "name": "Hocking County (OH)"
     },
     {
      "code": "39075",
      "name": "Holmes County (OH)"
     },
     {
      "code": "39077",
      "name": "Huron County (OH)"
     },
     {
      "code": "39079",
      "name": "Jackson County (OH)"
     },
     {
      "code": "39081",
      "name": "Jefferson County (OH)"
     },
     {
      "code": "39083",
      "name": "Knox County (OH)"
     },
     {
      "code": "39085",
      "name": "Lake County (OH)"
     },
     {
      "code": "39087",
      "name": "Lawrence County (OH)"
     },
     {
      "code": "39089",
      "name": "Licking County (OH)"
     },
     {
      "code": "39091",
      "name": "Logan County (OH)"
     },
     {
      "code": "39093",
      "name": "Lorain County (OH)"
     },
     {
      "code": "39095",
      "name": "Lucas County (OH)"
     },
     {
      "code": "39097",
      "name": "Madison County (OH)"
     },
     {
      "code": "39099",
      "name": "Mahoning County (OH)"
     },
     {
      "code": "39101",
      "name": "Marion County (OH)"
     },
     {
      "code": "39103",
      "name": "Medina County (OH)"
     },
     {
      "code": "39105",
      "name": "Meigs County (OH)"
     },
     {
      "code": "39107",
      "name": "Mercer County (OH)"
     },
     {
      "code": "39109",
      "name": "Miami County (OH)"
     },
     {
      "code": "39111",
      "name": "Monroe County (OH)"
     },
     {
      "code": "39113",
      "name": "Montgomery County (OH)"
     },
     {
      "code": "39115",
      "name": "Morgan County (OH)"
     },
     {
      "code": "39117",
      "name": "Morrow County (OH)"
     },
     {
      "code": "39119",
      "name": "Muskingum County (OH)"
     },
     {
      "code": "39121",
      "name": "Noble County (OH)"
     },
     {
      "code": "39123",
      "name": "Ottawa County (OH)"
     },
     {
      "code": "39125",
      "name": "Paulding County (OH)"
     },
     {
      "code": "39127",
      "name": "Perry County (OH)"
     },
     {
      "code": "39129",
      "name": "Pickaway County (OH)"
     },
     {
      "code": "39131",
      "name": "Pike County (OH)"
     },
     {
      "code": "39133",
      "name": "Portage County (OH)"
     },
     {
      "code": "39135",
      "name": "Preble County (OH)"
     },
     {
      "code": "39137",
      "name": "Putnam County (OH)"
     },
     {
      "code": "39139",
      "name": "Richland County (OH)"
     },
     {
      "code": "39141",
      "name": "Ross County (OH)"
     },
     {
      "code": "39143",
      "name": "Sandusky County (OH)"
     },
     {
      "code": "39145",
      "name": "Scioto County (OH)"
     },
     {
      "code": "39147",
      "name": "Seneca County (OH)"
     },
     {
      "code": "39149",
      "name": "Shelby County (OH)"
     },
     {
      "code": "39151",
      "name": "Stark County (OH)"
     },
     {
      "code": "39153",
      "name": "Summit County (OH)"
     },
     {
      "code": "39155",
      "name": "Trumbull County (OH)"
     },
     {
      "code": "39157",
      "name": "Tuscarawas County (OH)"
     },
     {
      "code": "39159",
      "name": "Union County (OH)"
     },
     {
      "code": "39161",
      "name": "Van Wert County (OH)"
     },
     {
      "code": "39163",
      "name": "Vinton County (OH)"
     },
     {
      "code": "39165",
      "name": "Warren County (OH)"
     },
     {
      "code": "39167",
      "name": "Washington County (OH)"
     },
     {
      "code": "39169",
      "name": "Wayne County (OH)"
     },
     {
      "code": "39171",
      "name": "Williams County (OH)"
     },
     {
      "code": "39173",
      "name": "Wood County (OH)"
     },
     {
      "code": "39175",
      "name": "Wyandot County (OH)"
     },
     {
      "code": "40001",
      "name": "Adair County (OK)"
     },
     {
      "code": "40003",
      "name": "Alfalfa County (OK)"
     },
     {
      "code": "40005",
      "name": "Atoka County (OK)"
     },
     {
      "code": "40007",
      "name": "Beaver County (OK)"
     },
     {
      "code": "40009",
      "name": "Beckham County (OK)"
     },
     {
      "code": "40011",
      "name": "Blaine County (OK)"
     },
     {
      "code": "40013",
      "name": "Bryan County (OK)"
     },
     {
      "code": "40015",
      "name": "Caddo County (OK)"
     },
     {
      "code": "40017",
      "name": "Canadian County (OK)"
     },
     {
      "code": "40019",
      "name": "Carter County (OK)"
     },
     {
      "code": "40021",
      "name": "Cherokee County (OK)"
     },
     {
      "code": "40023",
      "name": "Choctaw County (OK)"
     },
     {
      "code": "40025",
      "name": "Cimarron County (OK)"
     },
     {
      "code": "40027",
      "name": "Cleveland County (OK)"
     },
     {
      "code": "40029",
      "name": "Coal County (OK)"
     },
     {
      "code": "40031",
      "name": "Comanche County (OK)"
     },
     {
      "code": "40033",
      "name": "Cotton County (OK)"
     },
     {
      "code": "40035",
      "name": "Craig County (OK)"
     },
     {
      "code": "40037",
      "name": "Creek County (OK)"
     },
     {
      "code": "40039",
      "name": "Custer County (OK)"
     },
     {
      "code": "40041",
      "name": "Delaware County (OK)"
     },
     {
      "code": "40043",
      "name": "Dewey County (OK)"
     },
     {
      "code": "40045",
      "name": "Ellis County (OK)"
     },
     {
      "code": "40047",
      "name": "Garfield County (OK)"
     },
     {
      "code": "40049",
      "name": "Garvin County (OK)"
     },
     {
      "code": "40051",
      "name": "Grady County (OK)"
     },
     {
      "code": "40053",
      "name": "Grant County (OK)"
     },
     {
      "code": "40055",
      "name": "Greer County (OK)"
     },
     {
      "code": "40057",
      "name": "Harmon County (OK)"
     },
     {
      "code": "40059",
      "name": "Harper County (OK)"
     },
     {
      "code": "40061",
      "name": "Haskell County (OK)"
     },
     {
      "code": "40063",
      "name": "Hughes County (OK)"
     },
     {
      "code": "40065",
      "name": "Jackson County (OK)"
     },
     {
      "code": "40067",
      "name": "Jefferson County (OK)"
     },
     {
      "code": "40069",
      "name": "Johnston County (OK)"
     },
     {
      "code": "40071",
      "name": "Kay County (OK)"
     },
     {
      "code": "40073",
      "name": "Kingfisher County (OK)"
     },
     {
      "code": "40075",
      "name": "Kiowa County (OK)"
     },
     {
      "code": "40077",
      "name": "Latimer County (OK)"
     },
     {
      "code": "40079",
      "name": "Le Flore County (OK)"
     },
     {
      "code": "40081",
      "name": "Lincoln County (OK)"
     },
     {
      "code": "40083",
      "name": "Logan County (OK)"
     },
     {
      "code": "40085",
      "name": "Love County (OK)"
     },
     {
      "code": "40087",
      "name": "McClain County (OK)"
     },
     {
      "code": "40089",
      "name": "McCurtain County (OK)"
     },
     {
      "code": "40091",
      "name": "McIntosh County (OK)"
     },
     {
      "code": "40093",
      "name": "Major County (OK)"
     },
     {
      "code": "40095",
      "name": "Marshall County (OK)"
     },
     {
      "code": "40097",
      "name": "Mayes County (OK)"
     },
     {
      "code": "40099",
      "name": "Murray County (OK)"
     },
     {
      "code": "40101",
      "name": "Muskogee County (OK)"
     },
     {
      "code": "40103",
      "name": "Noble County (OK)"
     },
     {
      "code": "40105",
      "name": "Nowata County (OK)"
     },
     {
      "code": "40107",
      "name": "Okfuskee County (OK)"
     },
     {
      "code": "40109",
      "name": "Oklahoma County (OK)"
     },
     {
      "code": "40111",
      "name": "Okmulgee County (OK)"
     },
     {
      "code": "40113",
      "name": "Osage County (OK)"
     },
     {
      "code": "40115",
      "name": "Ottawa County (OK)"
     },
     {
      "code": "40117",
      "name": "Pawnee County (OK)"
     },
     {
      "code": "40119",
      "name": "Payne County (OK)"
     },
     {
      "code": "40121",
      "name": "Pittsburg County (OK)"
     },
     {
      "code": "40123",
      "name": "Pontotoc County (OK)"
     },
     {
      "code": "40125",
      "name": "Pottawatomie County (OK)"
     },
     {
      "code": "40127",
      "name": "Pushmataha County (OK)"
     },
     {
      "code": "40129",
      "name": "Roger Mills County (OK)"
     },
     {
      "code": "40131",
      "name": "Rogers County (OK)"
     },
     {
      "code": "40133",
      "name": "Seminole County (OK)"
     },
     {
      "code": "40135",
      "name": "Sequoyah County (OK)"
     },
     {
      "code": "40137",
      "name": "Stephens County (OK)"
     },
     {
      "code": "40139",
      "name": "Texas County (OK)"
     },
     {
      "code": "40141",
      "name": "Tillman County (OK)"
     },
     {
      "code": "40143",
      "name": "Tulsa County (OK)"
     },
     {
      "code": "40145",
      "name": "Wagoner County (OK)"
     },
     {
      "code": "40147",
      "name": "Washington County (OK)"
     },
     {
      "code": "40149",
      "name": "Washita County (OK)"
     },
     {
      "code": "40151",
      "name": "Woods County (OK)"
     },
     {
      "code": "40153",
      "name": "Woodward County (OK)"
     },
     {
      "code": "41001",
      "name": "Baker County (OR)"
     },
     {
      "code": "41003",
      "name": "Benton County (OR)"
     },
     {
      "code": "41005",
      "name": "Clackamas County (OR)"
     },
     {
      "code": "41007",
      "name": "Clatsop County (OR)"
     },
     {
      "code": "41009",
      "name": "Columbia County (OR)"
     },
     {
      "code": "41011",
      "name": "Coos County (OR)"
     },
     {
      "code": "41013",
      "name": "Crook County (OR)"
     },
     {
      "code": "41015",
      "name": "Curry County (OR)"
     },
     {
      "code": "41017",
      "name": "Deschutes County (OR)"
     },
     {
      "code": "41019",
      "name": "Douglas County (OR)"
     },
     {
      "code": "41021",
      "name": "Gilliam County (OR)"
     },
     {
      "code": "41023",
      "name": "Grant County (OR)"
     },
     {
      "code": "41025",
      "name": "Harney County (OR)"
     },
     {
      "code": "41027",
      "name": "Hood River County (OR)"
     },
     {
      "code": "41029",
      "name": "Jackson County (OR)"
     },
     {
      "code": "41031",
      "name": "Jefferson County (OR)"
     },
     {
      "code": "41033",
      "name": "Josephine County (OR)"
     },
     {
      "code": "41035",
      "name": "Klamath County (OR)"
     },
     {
      "code": "41037",
      "name": "Lake County (OR)"
     },
     {
      "code": "41039",
      "name": "Lane County (OR)"
     },
     {
      "code": "41041",
      "name": "Lincoln County (OR)"
     },
     {
      "code": "41043",
      "name": "Linn County (OR)"
     },
     {
      "code": "41045",
      "name": "Malheur County (OR)"
     },
     {
      "code": "41047",
      "name": "Marion County (OR)"
     },
     {
      "code": "41049",
      "name": "Morrow County (OR)"
     },
     {
      "code": "41051",
      "name": "Multnomah County (OR)"
     },
     {
      "code": "41053",
      "name": "Polk County (OR)"
     },
     {
      "code": "41055",
      "name": "Sherman County (OR)"
     },
     {
      "code": "41057",
      "name": "Tillamook County (OR)"
     },
     {
      "code": "41059",
      "name": "Umatilla County (OR)"
     },
     {
      "code": "41061",
      "name": "Union County (OR)"
     },
     {
      "code": "41063",
      "name": "Wallowa County (OR)"
     },
     {
      "code": "41065",
      "name": "Wasco County (OR)"
     },
     {
      "code": "41067",
      "name": "Washington County (OR)"
     },
     {
      "code": "41069",
      "name": "Wheeler County (OR)"
     },
     {
      "code": "41071",
      "name": "Yamhill County (OR)"
     },
     {
      "code": "42001",
      "name": "Adams County (PA)"
     },
     {
      "code": "42003",
      "name": "Allegheny County (PA)"
     },
     {
      "code": "42005",
      "name": "Armstrong County (PA)"
     },
     {
      "code": "42007",
      "name": "Beaver County (PA)"
     },
     {
      "code": "42009",
      "name": "Bedford County (PA)"
     },
     {
      "code": "42011",
      "name": "Berks County (PA)"
     },
     {
      "code": "42013",
      "name": "Blair County (PA)"
     },
     {
      "code": "42015",
      "name": "Bradford County (PA)"
     },
     {
      "code": "42017",
      "name": "Bucks County (PA)"
     },
     {
      "code": "42019",
      "name": "Butler County (PA)"
     },
     {
      "code": "42021",
      "name": "Cambria County (PA)"
     },
     {
      "code": "42023",
      "name": "Cameron County (PA)"
     },
     {
      "code": "42025",
      "name": "Carbon County (PA)"
     },
     {
      "code": "42027",
      "name": "Centre County (PA)"
     },
     {
      "code": "42029",
      "name": "Chester County (PA)"
     },
     {
      "code": "42031",
      "name": "Clarion County (PA)"
     },
     {
      "code": "42033",
      "name": "Clearfield County (PA)"
     },
     {
      "code": "42035",
      "name": "Clinton County (PA)"
     },
     {
      "code": "42037",
      "name": "Columbia County (PA)"
     },
     {
      "code": "42039",
      "name": "Crawford County (PA)"
     },
     {
      "code": "42041",
      "name": "Cumberland County (PA)"
     },
     {
      "code": "42043",
      "name": "Dauphin County (PA)"
     },
     {
      "code": "42045",
      "name": "Delaware County (PA)"
     },
     {
      "code": "42047",
      "name": "Elk County (PA)"
     },
     {
      "code": "42049",
      "name": "Erie County (PA)"
     },
     {
      "code": "42051",
      "name": "Fayette County (PA)"
     },
     {
      "code": "42053",
      "name": "Forest County (PA)"
     },
     {
      "code": "42055",
      "name": "Franklin County (PA)"
     },
     {
      "code": "42057",
      "name": "Fulton County (PA)"
     },
     {
      "code": "42059",
      "name": "Greene County (PA)"
     },
     {
      "code": "42061",
      "name": "Huntingdon County (PA)"
     },
     {
      "code": "42063",
      "name": "Indiana County (PA)"
     },
     {
      "code": "42065",
      "name": "Jefferson County (PA)"
     },
     {
      "code": "42067",
      "name": "Juniata County (PA)"
     },
     {
      "code": "42069",
      "name": "Lackawanna County (PA)"
     },
     {
      "code": "42071",
      "name": "Lancaster County (PA)"
     },
     {
      "code": "42073",
      "name": "Lawrence County (PA)"
     },
     {
      "code": "42075",
      "name": "Lebanon County (PA)"
     },
     {
      "code": "42077",
      "name": "Lehigh County (PA)"
     },
     {
      "code": "42079",
      "name": "Luzerne County (PA)"
     },
     {
      "code": "42081",
      "name": "Lycoming County (PA)"
     },
     {
      "code": "42083",
      "name": "McKean County (PA)"
     },
     {
      "code": "42085",
      "name": "Mercer County (PA)"
     },
     {
      "code": "42087",
      "name": "Mifflin County (PA)"
     },
     {
      "code": "42089",
      "name": "Monroe County (PA)"
     },
     {
      "code": "42091",
      "name": "Montgomery County (PA)"
     },
     {
      "code": "42093",
      "name": "Montour County (PA)"
     },
     {
      "code": "42095",
      "name": "Northampton County (PA)"
     },
     {
      "code": "42097",
      "name": "Northumberland County (PA)"
     },
     {
      "code": "42099",
      "name": "Perry County (PA)"
     },
     {
      "code": "42101",
      "name": "Philadelphia County (PA)"
     },
     {
      "code": "42103",
      "name": "Pike County (PA)"
     },
     {
      "code": "42105",
      "name": "Potter County (PA)"
     },
     {
      "code": "42107",
      "name": "Schuylkill County (PA)"
     },
     {
      "code": "42109",
      "name": "Snyder County (PA)"
     },
     {
      "code": "42111",
      "name": "Somerset County (PA)"
     },
     {
      "code": "42113",
      "name": "Sullivan County (PA)"
     },
     {
      "code": "42115",
      "name": "Susquehanna County (PA)"
     },
     {
      "code": "42117",
      "name": "Tioga County (PA)"
     },
     {
      "code": "42119",
      "name": "Union County (PA)"
     },
     {
      "code": "42121",
      "name": "Venango County (PA)"
     },
     {
      "code": "42123",
      "name": "Warren County (PA)"
     },
     {
      "code": "42125",
      "name": "Washington County (PA)"
     },
     {
      "code": "42127",
      "name": "Wayne County (PA)"
     },
     {
      "code": "42129",
      "name": "Westmoreland County (PA)"
     },
     {
      "code": "42131",
      "name": "Wyoming County (PA)"
     },
     {
      "code": "42133",
      "name": "York County (PA)"
     },
     {
      "code": "44001",
      "name": "Bristol County (RI)"
     },
     {
      "code": "44003",
      "name": "Kent County (RI)"
     },
     {
      "code": "44005",
      "name": "Newport County (RI)"
     },
     {
      "code": "44007",
      "name": "Providence County (RI)"
     },
     {
      "code": "44009",
      "name": "Washington County (RI)"
     },
     {
      "code": "45001",
      "name": "Abbeville County (SC)"
     },
     {
      "code": "45003",
      "name": "Aiken County (SC)"
     },
     {
      "code": "45005",
      "name": "Allendale County (SC)"
     },
     {
      "code": "45007",
      "name": "Anderson County (SC)"
     },
     {
      "code": "45009",
      "name": "Bamberg County (SC)"
     },
     {
      "code": "45011",
      "name": "Barnwell County (SC)"
     },
     {
      "code": "45013",
      "name": "Beaufort County (SC)"
     },
     {
      "code": "45015",
      "name": "Berkeley County (SC)"
     },
     {
      "code": "45017",
      "name": "Calhoun County (SC)"
     },
     {
      "code": "45019",
      "name": "Charleston County (SC)"
     },
     {
      "code": "45021",
      "name": "Cherokee County (SC)"
     },
     {
      "code": "45023",
      "name": "Chester County (SC)"
     },
     {
      "code": "45025",
      "name": "Chesterfield County (SC)"
     },
     {
      "code": "45027",
      "name": "Clarendon County (SC)"
     },
     {
      "code": "45029",
      "name": "Colleton County (SC)"
     },
     {
      "code": "45031",
      "name": "Darlington County (SC)"
     },
     {
      "code": "45033",
      "name": "Dillon County (SC)"
     },
     {
      "code": "45035",
      "name": "Dorchester County (SC)"
     },
     {
      "code": "45037",
      "name": "Edgefield County (SC)"
     },
     {
      "code": "45039",
      "name": "Fairfield County (SC)"
     },
     {
      "code": "45041",
      "name": "Florence County (SC)"
     },
     {
      "code": "45043",
      "name": "Georgetown County (SC)"
     },
     {
      "code": "45045",
      "name": "Greenville County (SC)"
     },
     {
      "code": "45047",
      "name": "Greenwood County (SC)"
     },
     {
      "code": "45049",
      "name": "Hampton County (SC)"
     },
     {
      "code": "45051",
      "name": "Horry County (SC)"
     },
     {
      "code": "45053",
      "name": "Jasper County (SC)"
     },
     {
      "code": "45055",
      "name": "Kershaw County (SC)"
     },
     {
      "code": "45057",
      "name": "Lancaster County (SC)"
     },
     {
      "code": "45059",
      "name": "Laurens County (SC)"
     },
     {
      "code": "45061",
      "name": "Lee County (SC)"
     },
     {
      "code": "45063",
      "name": "Lexington County (SC)"
     },
     {
      "code": "45065",
      "name": "McCormick County (SC)"
     },
     {
      "code": "45067",
      "name": "Marion County (SC)"
     },
     {
      "code": "45069",
      "name": "Marlboro County (SC)"
     },
     {
      "code": "45071",
      "name": "Newberry County (SC)"
     },
     {
      "code": "45073",
      "name": "Oconee County (SC)"
     },
     {
      "code": "45075",
      "name": "Orangeburg County (SC)"
     },
     {
      "code": "45077",
      "name": "Pickens County (SC)"
     },
     {
      "code": "45079",
      "name": "Richland County (SC)"
     },
     {
      "code": "45081",
      "name": "Saluda County (SC)"
     },
     {
      "code": "45083",
      "name": "Spartanburg County (SC)"
     },
     {
      "code": "45085",
      "name": "Sumter County (SC)"
     },
     {
      "code": "45087",
      "name": "Union County (SC)"
     },
     {
      "code": "45089",
      "name": "Williamsburg County (SC)"
     },
     {
      "code": "45091",
      "name": "York County (SC)"
     },
     {
      "code": "46003",
      "name": "Aurora County (SD)"
     },
     {
      "code": "46005",
      "name": "Beadle County (SD)"
     },
     {
      "code": "46007",
      "name": "Bennett County (SD)"
     },
     {
      "code": "46009",
      "name": "Bon Homme County (SD)"
     },
     {
      "code": "46011",
      "name": "Brookings County (SD)"
     },
     {
      "code": "46013",
      "name": "Brown County (SD)"
     },
     {
      "code": "46015",
      "name": "Brule County (SD)"
     },
     {
      "code": "46017",
      "name": "Buffalo County (SD)"
     },
     {
      "code": "46019",
      "name": "Butte County (SD)"
     },
     {
      "code": "46021",
      "name": "Campbell County (SD)"
     },
     {
      "code": "46023",
      "name": "Charles Mix County (SD)"
     },
     {
      "code": "46025",
      "name": "Clark County (SD)"
     },
     {
      "code": "46027",
      "name": "Clay County (SD)"
     },
     {
      "code": "46029",
      "name": "Codington County (SD)"
     },
     {
      "code": "46031",
      "name": "Corson County (SD)"
     },
     {
      "code": "46033",
      "name": "Custer County (SD)"
     },
     {
      "code": "46035",
      "name": "Davison County (SD)"
     },
     {
      "code": "46037",
      "name": "Day County (SD)"
     },
     {
      "code": "46039",
      "name": "Deuel County (SD)"
     },
     {
      "code": "46041",
      "name": "Dewey County (SD)"
     },
     {
      "code": "46043",
      "name": "Douglas County (SD)"
     },
     {
      "code": "46045",
      "name": "Edmunds County (SD)"
     },
     {
      "code": "46047",
      "name": "Fall River County (SD)"
     },
     {
      "code": "46049",
      "name": "Faulk County (SD)"
     },
     {
      "code": "46051",
      "name": "Grant County (SD)"
     },
     {
      "code": "46053",
      "name": "Gregory County (SD)"
     },
     {
      "code": "46055",
      "name": "Haakon County (SD)"
     },
     {
      "code": "46057",
      "name": "Hamlin County (SD)"
     },
     {
      "code": "46059",
      "name": "Hand County (SD)"
     },
     {
      "code": "46061",
      "name": "Hanson County (SD)"
     },
     {
      "code": "46063",
      "name": "Harding County (SD)"
     },
     {
      "code": "46065",
      "name": "Hughes County (SD)"
     },
     {
      "code": "46067",
      "name": "Hutchinson County (SD)"
     },
     {
      "code": "46069",
      "name": "Hyde County (SD)"
     },
     {
      "code": "46071",
      "name": "Jackson County (SD)"
     },
     {
      "code": "46073",
      "name": "Jerauld County (SD)"
     },
     {
      "code": "46075",
      "name": "Jones County (SD)"
     },
     {
      "code": "46077",
      "name": "Kingsbury County (SD)"
     },
     {
      "code": "46079",
      "name": "Lake County (SD)"
     },
     {
      "code": "46081",
      "name": "Lawrence County (SD)"
     },
     {
      "code": "46083",
      "name": "Lincoln County (SD)"
     },
     {
      "code": "46085",
      "name": "Lyman County (SD)"
     },
     {
      "code": "46087",
      "name": "McCook County (SD)"
     },
     {
      "code": "46089",
      "name": "McPherson County (SD)"
     },
     {
      "code": "46091",
      "name": "Marshall County (SD)"
     },
     {
      "code": "46093",
      "name": "Meade County (SD)"
     },
     {
      "code": "46095",
      "name": "Mellette County (SD)"
     },
     {
      "code": "46097",
      "name": "Miner County (SD)"
     },
     {
      "code": "46099",
      "name": "Minnehaha County (SD)"
     },
     {
      "code": "46101",
      "name": "Moody County (SD)"
     },
     {
      "code": "46103",
      "name": "Pennington County (SD)"
     },
     {
      "code": "46105",
      "name": "Perkins County (SD)"
     },
     {
      "code": "46107",
      "name": "Potter County (SD)"
     },
     {
      "code": "46109",
      "name": "Roberts County (SD)"
     },
     {
      "code": "46111",
      "name": "Sanborn County (SD)"
     },
     {
      "code": "46113",
      "name": "Shannon County (SD)"
     },
     {
      "code": "46115",
      "name": "Spink County (SD)"
     },
     {
      "code": "46117",
      "name": "Stanley County (SD)"
     },
     {
      "code": "46119",
      "name": "Sully County (SD)"
     },
     {
      "code": "46121",
      "name": "Todd County (SD)"
     },
     {
      "code": "46123",
      "name": "Tripp County (SD)"
     },
     {
      "code": "46125",
      "name": "Turner County (SD)"
     },
     {
      "code": "46127",
      "name": "Union County (SD)"
     },
     {
      "code": "46129",
      "name": "Walworth County (SD)"
     },
     {
      "code": "46131",
      "name": "Washabaugh (SD)"
     },
     {
      "code": "46135",
      "name": "Yankton County (SD)"
     },
     {
      "code": "46137",
      "name": "Ziebach County (SD)"
     },
     {
      "code": "47001",
      "name": "Anderson County (TN)"
     },
     {
      "code": "47003",
      "name": "Bedford County (TN)"
     },
     {
      "code": "47005",
      "name": "Benton County (TN)"
     },
     {
      "code": "47007",
      "name": "Bledsoe County (TN)"
     },
     {
      "code": "47009",
      "name": "Blount County (TN)"
     },
     {
      "code": "47011",
      "name": "Bradley County (TN)"
     },
     {
      "code": "47013",
      "name": "Campbell County (TN)"
     },
     {
      "code": "47015",
      "name": "Cannon County (TN)"
     },
     {
      "code": "47017",
      "name": "Carroll County (TN)"
     },
     {
      "code": "47019",
      "name": "Carter County (TN)"
     },
     {
      "code": "47021",
      "name": "Cheatham County (TN)"
     },
     {
      "code": "47023",
      "name": "Chester County (TN)"
     },
     {
      "code": "47025",
      "name": "Claiborne County (TN)"
     },
     {
      "code": "47027",
      "name": "Clay County (TN)"
     },
     {
      "code": "47029",
      "name": "Cocke County (TN)"
     },
     {
      "code": "47031",
      "name": "Coffee County (TN)"
     },
     {
      "code": "47033",
      "name": "Crockett County (TN)"
     },
     {
      "code": "47035",
      "name": "Cumberland County (TN)"
     },
     {
      "code": "47037",
      "name": "Davidson County (TN)"
     },
     {
      "code": "47039",
      "name": "Decatur County (TN)"
     },
     {
      "code": "47041",
      "name": "DeKalb County (TN)"
     },
     {
      "code": "47043",
      "name": "Dickson County (TN)"
     },
     {
      "code": "47045",
      "name": "Dyer County (TN)"
     },
     {
      "code": "47047",
      "name": "Fayette County (TN)"
     },
     {
      "code": "47049",
      "name": "Fentress County (TN)"
     },
     {
      "code": "47051",
      "name": "Franklin County (TN)"
     },
     {
      "code": "47053",
      "name": "Gibson County (TN)"
     },
     {
      "code": "47055",
      "name": "Giles County (TN)"
     },
     {
      "code": "47057",
      "name": "Grainger County (TN)"
     },
     {
      "code": "47059",
      "name": "Greene County (TN)"
     },
     {
      "code": "47061",
      "name": "Grundy County (TN)"
     },
     {
      "code": "47063",
      "name": "Hamblen County (TN)"
     },
     {
      "code": "47065",
      "name": "Hamilton County (TN)"
     },
     {
      "code": "47067",
      "name": "Hancock County (TN)"
     },
     {
      "code": "47069",
      "name": "Hardeman County (TN)"
     },
     {
      "code": "47071",
      "name": "Hardin County (TN)"
     },
     {
      "code": "47073",
      "name": "Hawkins County (TN)"
     },
     {
      "code": "47075",
      "name": "Haywood County (TN)"
     },
     {
      "code": "47077",
      "name": "Henderson County (TN)"
     },
     {
      "code": "47079",
      "name": "Henry County (TN)"
     },
     {
      "code": "47081",
      "name": "Hickman County (TN)"
     },
     {
      "code": "47083",
      "name": "Houston County (TN)"
     },
     {
      "code": "47085",
      "name": "Humphreys County (TN)"
     },
     {
      "code": "47087",
      "name": "Jackson County (TN)"
     },
     {
      "code": "47089",
      "name": "Jefferson County (TN)"
     },
     {
      "code": "47091",
      "name": "Johnson County (TN)"
     },
     {
      "code": "47093",
      "name": "Knox County (TN)"
     },
     {
      "code": "47095",
      "name": "Lake County (TN)"
     },
     {
      "code": "47097",
      "name": "Lauderdale County (TN)"
     },
     {
      "code": "47099",
      "name": "Lawrence County (TN)"
     },
     {
      "code": "47101",
      "name": "Lewis County (TN)"
     },
     {
      "code": "47103",
      "name": "Lincoln County (TN)"
     },
     {
      "code": "47105",
      "name": "Loudon County (TN)"
     },
     {
      "code": "47107",
      "name": "McMinn County (TN)"
     },
     {
      "code": "47109",
      "name": "McNairy County (TN)"
     },
     {
      "code": "47111",
      "name": "Macon County (TN)"
     },
     {
      "code": "47113",
      "name": "Madison County (TN)"
     },
     {
      "code": "47115",
      "name": "Marion County (TN)"
     },
     {
      "code": "47117",
      "name": "Marshall County (TN)"
     },
     {
      "code": "47119",
      "name": "Maury County (TN)"
     },
     {
      "code": "47121",
      "name": "Meigs County (TN)"
     },
     {
      "code": "47123",
      "name": "Monroe County (TN)"
     },
     {
      "code": "47125",
      "name": "Montgomery County (TN)"
     },
     {
      "code": "47127",
      "name": "Moore County (TN)"
     },
     {
      "code": "47129",
      "name": "Morgan County (TN)"
     },
     {
      "code": "47131",
      "name": "Obion County (TN)"
     },
     {
      "code": "47133",
      "name": "Overton County (TN)"
     },
     {
      "code": "47135",
      "name": "Perry County (TN)"
     },
     {
      "code": "47137",
      "name": "Pickett County (TN)"
     },
     {
      "code": "47139",
      "name": "Polk County (TN)"
     },
     {
      "code": "47141",
      "name": "Putnam County (TN)"
     },
     {
      "code": "47143",
      "name": "Rhea County (TN)"
     },
     {
      "code": "47145",
      "name": "Roane County (TN)"
     },
     {
      "code": "47147",
      "name": "Robertson County (TN)"
     },
     {
      "code": "47149",
      "name": "Rutherford County (TN)"
     },
     {
      "code": "47151",
      "name": "Scott County (TN)"
     },
     {
      "code": "47153",
      "name": "Sequatchie County (TN)"
     },
     {
      "code": "47155",
      "name": "Sevier County (TN)"
     },
     {
      "code": "47157",
      "name": "Shelby County (TN)"
     },
     {
      "code": "47159",
      "name": "Smith County (TN)"
     },
     {
      "code": "47161",
      "name": "Stewart County (TN)"
     },
     {
      "code": "47163",
      "name": "Sullivan County (TN)"
     },
     {
      "code": "47165",
      "name": "Sumner County (TN)"
     },
     {
      "code": "47167",
      "name": "Tipton County (TN)"
     },
     {
      "code": "47169",
      "name": "Trousdale County (TN)"
     },
     {
      "code": "47171",
      "name": "Unicoi County (TN)"
     },
     {
      "code": "47173",
      "name": "Union County (TN)"
     },
     {
      "code": "47175",
      "name": "Van Buren County (TN)"
     },
     {
      "code": "47177",
      "name": "Warren County (TN)"
     },
     {
      "code": "47179",
      "name": "Washington County (TN)"
     },
     {
      "code": "47181",
      "name": "Wayne County (TN)"
     },
     {
      "code": "47183",
      "name": "Weakley County (TN)"
     },
     {
      "code": "47185",
      "name": "White County (TN)"
     },
     {
      "code": "47187",
      "name": "Williamson County (TN)"
     },
     {
      "code": "47189",
      "name": "Wilson County (TN)"
     },
     {
      "code": "48001",
      "name": "Anderson County (TX)"
     },
     {
      "code": "48003",
      "name": "Andrews County (TX)"
     },
     {
      "code": "48005",
      "name": "Angelina County (TX)"
     },
     {
      "code": "48007",
      "name": "Aransas County (TX)"
     },
     {
      "code": "48009",
      "name": "Archer County (TX)"
     },
     {
      "code": "48011",
      "name": "Armstrong County (TX)"
     },
     {
      "code": "48013",
      "name": "Atascosa County (TX)"
     },
     {
      "code": "48015",
      "name": "Austin County (TX)"
     },
     {
      "code": "48017",
      "name": "Bailey County (TX)"
     },
     {
      "code": "48019",
      "name": "Bandera County (TX)"
     },
     {
      "code": "48021",
      "name": "Bastrop County (TX)"
     },
     {
      "code": "48023",
      "name": "Baylor County (TX)"
     },
     {
      "code": "48025",
      "name": "Bee County (TX)"
     },
     {
      "code": "48027",
      "name": "Bell County (TX)"
     },
     {
      "code": "48029",
      "name": "Bexar County (TX)"
     },
     {
      "code": "48031",
      "name": "Blanco County (TX)"
     },
     {
      "code": "48033",
      "name": "Borden County (TX)"
     },
     {
      "code": "48035",
      "name": "Bosque County (TX)"
     },
     {
      "code": "48037",
      "name": "Bowie County (TX)"
     },
     {
      "code": "48039",
      "name": "Brazoria County (TX)"
     },
     {
      "code": "48041",
      "name": "Brazos County (TX)"
     },
     {
      "code": "48043",
      "name": "Brewster County (TX)"
     },
     {
      "code": "48045",
      "name": "Briscoe County (TX)"
     },
     {
      "code": "48047",
      "name": "Brooks County (TX)"
     },
     {
      "code": "48049",
      "name": "Brown County (TX)"
     },
     {
      "code": "48051",
      "name": "Burleson County (TX)"
     },
     {
      "code": "48053",
      "name": "Burnet County (TX)"
     },
     {
      "code": "48055",
      "name": "Caldwell County (TX)"
     },
     {
      "code": "48057",
      "name": "Calhoun County (TX)"
     },
     {
      "code": "48059",
      "name": "Callahan County (TX)"
     },
     {
      "code": "48061",
      "name": "Cameron County (TX)"
     },
     {
      "code": "48063",
      "name": "Camp County (TX)"
     },
     {
      "code": "48065",
      "name": "Carson County (TX)"
     },
     {
      "code": "48067",
      "name": "Cass County (TX)"
     },
     {
      "code": "48069",
      "name": "Castro County (TX)"
     },
     {
      "code": "48071",
      "name": "Chambers County (TX)"
     },
     {
      "code": "48073",
      "name": "Cherokee County (TX)"
     },
     {
      "code": "48075",
      "name": "Childress County (TX)"
     },
     {
      "code": "48077",
      "name": "Clay County (TX)"
     },
     {
      "code": "48079",
      "name": "Cochran County (TX)"
     },
     {
      "code": "48081",
      "name": "Coke County (TX)"
     },
     {
      "code": "48083",
      "name": "Coleman County (TX)"
     },
     {
      "code": "48085",
      "name": "Collin County (TX)"
     },
     {
      "code": "48087",
      "name": "Collingsworth County (TX)"
     },
     {
      "code": "48089",
      "name": "Colorado County (TX)"
     },
     {
      "code": "48091",
      "name": "Comal County (TX)"
     },
     {
      "code": "48093",
      "name": "Comanche County (TX)"
     },
     {
      "code": "48095",
      "name": "Concho County (TX)"
     },
     {
      "code": "48097",
      "name": "Cooke County (TX)"
     },
     {
      "code": "48099",
      "name": "Coryell County (TX)"
     },
     {
      "code": "48101",
      "name": "Cottle County (TX)"
     },
     {
      "code": "48103",
      "name": "Crane County (TX)"
     },
     {
      "code": "48105",
      "name": "Crockett County (TX)"
     },
     {
      "code": "48107",
      "name": "Crosby County (TX)"
     },
     {
      "code": "48109",
      "name": "Culberson County (TX)"
     },
     {
      "code": "48111",
      "name": "Dallam County (TX)"
     },
     {
      "code": "48113",
      "name": "Dallas County (TX)"
     },
     {
      "code": "48115",
      "name": "Dawson County (TX)"
     },
     {
      "code": "48117",
      "name": "Deaf Smith County (TX)"
     },
     {
      "code": "48119",
      "name": "Delta County (TX)"
     },
     {
      "code": "48121",
      "name": "Denton County (TX)"
     },
     {
      "code": "48123",
      "name": "DeWitt County (TX)"
     },
     {
      "code": "48125",
      "name": "Dickens County (TX)"
     },
     {
      "code": "48127",
      "name": "Dimmit County (TX)"
     },
     {
      "code": "48129",
      "name": "Donley County (TX)"
     },
     {
      "code": "48131",
      "name": "Duval County (TX)"
     },
     {
      "code": "48133",
      "name": "Eastland County (TX)"
     },
     {
      "code": "48135",
      "name": "Ector County (TX)"
     },
     {
      "code": "48137",
      "name": "Edwards County (TX)"
     },
     {
      "code": "48139",
      "name": "Ellis County (TX)"
     },
     {
      "code": "48141",
      "name": "El Paso County (TX)"
     },
     {
      "code": "48143",
      "name": "Erath County (TX)"
     },
     {
      "code": "48145",
      "name": "Falls County (TX)"
     },
     {
      "code": "48147",
      "name": "Fannin County (TX)"
     },
     {
      "code": "48149",
      "name": "Fayette County (TX)"
     },
     {
      "code": "48151",
      "name": "Fisher County (TX)"
     },
     {
      "code": "48153",
      "name": "Floyd County (TX)"
     },
     {
      "code": "48155",
      "name": "Foard County (TX)"
     },
     {
      "code": "48157",
      "name": "Fort Bend County (TX)"
     },
     {
      "code": "48159",
      "name": "Franklin County (TX)"
     },
     {
      "code": "48161",
      "name": "Freestone County (TX)"
     },
     {
      "code": "48163",
      "name": "Frio County (TX)"
     },
     {
      "code": "48165",
      "name": "Gaines County (TX)"
     },
     {
      "code": "48167",
      "name": "Galveston County (TX)"
     },
     {
      "code": "48169",
      "name": "Garza County (TX)"
     },
     {
      "code": "48171",
      "name": "Gillespie County (TX)"
     },
     {
      "code": "48173",
      "name": "Glasscock County (TX)"
     },
     {
      "code": "48175",
      "name": "Goliad County (TX)"
     },
     {
      "code": "48177",
      "name": "Gonzales County (TX)"
     },
     {
      "code": "48179",
      "name": "Gray County (TX)"
     },
     {
      "code": "48181",
      "name": "Grayson County (TX)"
     },
     {
      "code": "48183",
      "name": "Gregg County (TX)"
     },
     {
      "code": "48185",
      "name": "Grimes County (TX)"
     },
     {
      "code": "48187",
      "name": "Guadalupe County (TX)"
     },
     {
      "code": "48189",
      "name": "Hale County (TX)"
     },
     {
      "code": "48191",
      "name": "Hall County (TX)"
     },
     {
      "code": "48193",
      "name": "Hamilton County (TX)"
     },
     {
      "code": "48195",
      "name": "Hansford County (TX)"
     },
     {
      "code": "48197",
      "name": "Hardeman County (TX)"
     },
     {
      "code": "48199",
      "name": "Hardin County (TX)"
     },
     {
      "code": "48201",
      "name": "Harris County (TX)"
     },
     {
      "code": "48203",
      "name": "Harrison County (TX)"
     },
     {
      "code": "48205",
      "name": "Hartley County (TX)"
     },
     {
      "code": "48207",
      "name": "Haskell County (TX)"
     },
     {
      "code": "48209",
      "name": "Hays County (TX)"
     },
     {
      "code": "48211",
      "name": "Hemphill County (TX)"
     },
     {
      "code": "48213",
      "name": "Henderson County (TX)"
     },
     {
      "code": "48215",
      "name": "Hidalgo County (TX)"
     },
     {
      "code": "48217",
      "name": "Hill County (TX)"
     },
     {
      "code": "48219",
      "name": "Hockley County (TX)"
     },
     {
      "code": "48221",
      "name": "Hood County (TX)"
     },
     {
      "code": "48223",
      "name": "Hopkins County (TX)"
     },
     {
      "code": "48225",
      "name": "Houston County (TX)"
     },
     {
      "code": "48227",
      "name": "Howard County (TX)"
     },
     {
      "code": "48229",
      "name": "Hudspeth County (TX)"
     },
     {
      "code": "48231",
      "name": "Hunt County (TX)"
     },
     {
      "code": "48233",
      "name": "Hutchinson County (TX)"
     },
     {
      "code": "48235",
      "name": "Irion County (TX)"
     },
     {
      "code": "48237",
      "name": "Jack County (TX)"
     },
     {
      "code": "48239",
      "name": "Jackson County (TX)"
     },
     {
      "code": "48241",
      "name": "Jasper County (TX)"
     },
     {
      "code": "48243",
      "name": "Jeff Davis County (TX)"
     },
     {
      "code": "48245",
      "name": "Jefferson County (TX)"
     },
     {
      "code": "48247",
      "name": "Jim Hogg County (TX)"
     },
     {
      "code": "48249",
      "name": "Jim Wells County (TX)"
     },
     {
      "code": "48251",
      "name": "Johnson County (TX)"
     },
     {
      "code": "48253",
      "name": "Jones County (TX)"
     },
     {
      "code": "48255",
      "name": "Karnes County (TX)"
     },
     {
      "code": "48257",
      "name": "Kaufman County (TX)"
     },
     {
      "code": "48259",
      "name": "Kendall County (TX)"
     },
     {
      "code": "48261",
      "name": "Kenedy County (TX)"
     },
     {
      "code": "48263",
      "name": "Kent County (TX)"
     },
     {
      "code": "48265",
      "name": "Kerr County (TX)"
     },
     {
      "code": "48267",
      "name": "Kimble County (TX)"
     },
     {
      "code": "48269",
      "name": "King County (TX)"
     },
     {
      "code": "48271",
      "name": "Kinney County (TX)"
     },
     {
      "code": "48273",
      "name": "Kleberg County (TX)"
     },
     {
      "code": "48275",
      "name": "Knox County (TX)"
     },
     {
      "code": "48277",
      "name": "Lamar County (TX)"
     },
     {
      "code": "48279",
      "name": "Lamb County (TX)"
     },
     {
      "code": "48281",
      "name": "Lampasas County (TX)"
     },
     {
      "code": "48283",
      "name": "La Salle County (TX)"
     },
     {
      "code": "48285",
      "name": "Lavaca County (TX)"
     },
     {
      "code": "48287",
      "name": "Lee County (TX)"
     },
     {
      "code": "48289",
      "name": "Leon County (TX)"
     },
     {
      "code": "48291",
      "name": "Liberty County (TX)"
     },
     {
      "code": "48293",
      "name": "Limestone County (TX)"
     },
     {
      "code": "48295",
      "name": "Lipscomb County (TX)"
     },
     {
      "code": "48297",
      "name": "Live Oak County (TX)"
     },
     {
      "code": "48299",
      "name": "Llano County (TX)"
     },
     {
      "code": "48301",
      "name": "Loving County (TX)"
     },
     {
      "code": "48303",
      "name": "Lubbock County (TX)"
     },
     {
      "code": "48305",
      "name": "Lynn County (TX)"
     },
     {
      "code": "48307",
      "name": "McCulloch County (TX)"
     },
     {
      "code": "48309",
      "name": "McLennan County (TX)"
     },
     {
      "code": "48311",
      "name": "McMullen County (TX)"
     },
     {
      "code": "48313",
      "name": "Madison County (TX)"
     },
     {
      "code": "48315",
      "name": "Marion County (TX)"
     },
     {
      "code": "48317",
      "name": "Martin County (TX)"
     },
     {
      "code": "48319",
      "name": "Mason County (TX)"
     },
     {
      "code": "48321",
      "name": "Matagorda County (TX)"
     },
     {
      "code": "48323",
      "name": "Maverick County (TX)"
     },
     {
      "code": "48325",
      "name": "Medina County (TX)"
     },
     {
      "code": "48327",
      "name": "Menard County (TX)"
     },
     {
      "code": "48329",
      "name": "Midland County (TX)"
     },
     {
      "code": "48331",
      "name": "Milam County (TX)"
     },
     {
      "code": "48333",
      "name": "Mills County (TX)"
     },
     {
      "code": "48335",
      "name": "Mitchell County (TX)"
     },
     {
      "code": "48337",
      "name": "Montague County (TX)"
     },
     {
      "code": "48339",
      "name": "Montgomery County (TX)"
     },
     {
      "code": "48341",
      "name": "Moore County (TX)"
     },
     {
      "code": "48343",
      "name": "Morris County (TX)"
     },
     {
      "code": "48345",
      "name": "Motley County (TX)"
     },
     {
      "code": "48347",
      "name": "Nacogdoches County (TX)"
     },
     {
      "code": "48349",
      "name": "Navarro County (TX)"
     },
     {
      "code": "48351",
      "name": "Newton County (TX)"
     },
     {
      "code": "48353",
      "name": "Nolan County (TX)"
     },
     {
      "code": "48355",
      "name": "Nueces County (TX)"
     },
     {
      "code": "48357",
      "name": "Ochiltree County (TX)"
     },
     {
      "code": "48359",
      "name": "Oldham County (TX)"
     },
     {
      "code": "48361",
      "name": "Orange County (TX)"
     },
     {
      "code": "48363",
      "name": "Palo Pinto County (TX)"
     },
     {
      "code": "48365",
      "name": "Panola County (TX)"
     },
     {
      "code": "48367",
      "name": "Parker County (TX)"
     },
     {
      "code": "48369",
      "name": "Parmer County (TX)"
     },
     {
      "code": "48371",
      "name": "Pecos County (TX)"
     },
     {
      "code": "48373",
      "name": "Polk County (TX)"
     },
     {
      "code": "48375",
      "name": "Potter County (TX)"
     },
     {
      "code": "48377",
      "name": "Presidio County (TX)"
     },
     {
      "code": "48379",
      "name": "Rains County (TX)"
     },
     {
      "code": "48381",
      "name": "Randall County (TX)"
     },
     {
      "code": "48383",
      "name": "Reagan County (TX)"
     },
     {
      "code": "48385",
      "name": "Real County (TX)"
     },
     {
      "code": "48387",
      "name": "Red River County (TX)"
     },
     {
      "code": "48389",
      "name": "Reeves County (TX)"
     },
     {
      "code": "48391",
      "name": "Refugio County (TX)"
     },
     {
      "code": "48393",
      "name": "Roberts County (TX)"
     },
     {
      "code": "48395",
      "name": "Robertson County (TX)"
     },
     {
      "code": "48397",
      "name": "Rockwall County (TX)"
     },
     {
      "code": "48399",
      "name": "Runnels County (TX)"
     },
     {
      "code": "48401",
      "name": "Rusk County (TX)"
     },
     {
      "code": "48403",
      "name": "Sabine County (TX)"
     },
     {
      "code": "48405",
      "name": "San Augustine County (TX)"
     },
     {
      "code": "48407",
      "name": "San Jacinto County (TX)"
     },
     {
      "code": "48409",
      "name": "San Patricio County (TX)"
     },
     {
      "code": "48411",
      "name": "San Saba County (TX)"
     },
     {
      "code": "48413",
      "name": "Schleicher County (TX)"
     },
     {
      "code": "48415",
      "name": "Scurry County (TX)"
     },
     {
      "code": "48417",
      "name": "Shackelford County (TX)"
     },
     {
      "code": "48419",
      "name": "Shelby County (TX)"
     },
     {
      "code": "48421",
      "name": "Sherman County (TX)"
     },
     {
      "code": "48423",
      "name": "Smith County (TX)"
     },
     {
      "code": "48425",
      "name": "Somervell County (TX)"
     },
     {
      "code": "48427",
      "name": "Starr County (TX)"
     },
     {
      "code": "48429",
      "name": "Stephens County (TX)"
     },
     {
      "code": "48431",
      "name": "Sterling County (TX)"
     },
     {
      "code": "48433",
      "name": "Stonewall County (TX)"
     },
     {
      "code": "48435",
      "name": "Sutton County (TX)"
     },
     {
      "code": "48437",
      "name": "Swisher County (TX)"
     },
     {
      "code": "48439",
      "name": "Tarrant County (TX)"
     },
     {
      "code": "48441",
      "name": "Taylor County (TX)"
     },
     {
      "code": "48443",
      "name": "Terrell County (TX)"
     },
     {
      "code": "48445",
      "name": "Terry County (TX)"
     },
     {
      "code": "48447",
      "name": "Throckmorton County (TX)"
     },
     {
      "code": "48449",
      "name": "Titus County (TX)"
     },
     {
      "code": "48451",
      "name": "Tom Green County (TX)"
     },
     {
      "code": "48453",
      "name": "Travis County (TX)"
     },
     {
      "code": "48455",
      "name": "Trinity County (TX)"
     },
     {
      "code": "48457",
      "name": "Tyler County (TX)"
     },
     {
      "code": "48459",
      "name": "Upshur County (TX)"
     },
     {
      "code": "48461",
      "name": "Upton County (TX)"
     },
     {
      "code": "48463",
      "name": "Uvalde County (TX)"
     },
     {
      "code": "48465",
      "name": "Val Verde County (TX)"
     },
     {
      "code": "48467",
      "name": "Van Zandt County (TX)"
     },
     {
      "code": "48469",
      "name": "Victoria County (TX)"
     },
     {
      "code": "48471",
      "name": "Walker County (TX)"
     },
     {
      "code": "48473",
      "name": "Waller County (TX)"
     },
     {
      "code": "48475",
      "name": "Ward County (TX)"
     },
     {
      "code": "48477",
      "name": "Washington County (TX)"
     },
     {
      "code": "48479",
      "name": "Webb County (TX)"
     },
     {
      "code": "48481",
      "name": "Wharton County (TX)"
     },
     {
      "code": "48483",
      "name": "Wheeler County (TX)"
     },
     {
      "code": "48485",
      "name": "Wichita County (TX)"
     },
     {
      "code": "48487",
      "name": "Wilbarger County (TX)"
     },
     {
      "code": "48489",
      "name": "Willacy County (TX)"
     },
     {
      "code": "48491",
      "name": "Williamson County (TX)"
     },
     {
      "code": "48493",
      "name": "Wilson County (TX)"
     },
     {
      "code": "48495",
      "name": "Winkler County (TX)"
     },
     {
      "code": "48497",
      "name": "Wise County (TX)"
     },
     {
      "code": "48499",
      "name": "Wood County (TX)"
     },
     {
      "code": "48501",
      "name": "Yoakum County (TX)"
     },
     {
      "code": "48503",
      "name": "Young County (TX)"
     },
     {
      "code": "48505",
      "name": "Zapata County (TX)"
     },
     {
      "code": "48507",
      "name": "Zavala County (TX)"
     },
     {
      "code": "49001",
      "name": "Beaver County (UT)"
     },
     {
      "code": "49003",
      "name": "Box Elder County (UT)"
     },
     {
      "code": "49005",
      "name": "Cache County (UT)"
     },
     {
      "code": "49007",
      "name": "Carbon County (UT)"
     },
     {
      "code": "49009",
      "name": "Daggett County (UT)"
     },
     {
      "code": "49011",
      "name": "Davis County (UT)"
     },
     {
      "code": "49013",
      "name": "Duchesne County (UT)"
     },
     {
      "code": "49015",
      "name": "Emery County (UT)"
     },
     {
      "code": "49017",
      "name": "Garfield County (UT)"
     },
     {
      "code": "49019",
      "name": "Grand County (UT)"
     },
     {
      "code": "49021",
      "name": "Iron County (UT)"
     },
     {
      "code": "49023",
      "name": "Juab County (UT)"
     },
     {
      "code": "49025",
      "name": "Kane County (UT)"
     },
     {
      "code": "49027",
      "name": "Millard County (UT)"
     },
     {
      "code": "49029",
      "name": "Morgan County (UT)"
     },
     {
      "code": "49031",
      "name": "Piute County (UT)"
     },
     {
      "code": "49033",
      "name": "Rich County (UT)"
     },
     {
      "code": "49035",
      "name": "Salt Lake County (UT)"
     },
     {
      "code": "49037",
      "name": "San Juan County (UT)"
     },
     {
      "code": "49039",
      "name": "Sanpete County (UT)"
     },
     {
      "code": "49041",
      "name": "Sevier County (UT)"
     },
     {
      "code": "49043",
      "name": "Summit County (UT)"
     },
     {
      "code": "49045",
      "name": "Tooele County (UT)"
     },
     {
      "code": "49047",
      "name": "Uintah County (UT)"
     },
     {
      "code": "49049",
      "name": "Utah County (UT)"
     },
     {
      "code": "49051",
      "name": "Wasatch County (UT)"
     },
     {
      "code": "49053",
      "name": "Washington County (UT)"
     },
     {
      "code": "49055",
      "name": "Wayne County (UT)"
     },
     {
      "code": "49057",
      "name": "Weber County (UT)"
     },
     {
      "code": "50001",
      "name": "Addison County (VT)"
     },
     {
      "code": "50003",
      "name": "Bennington County (VT)"
     },
     {
      "code": "50005",
      "name": "Caledonia County (VT)"
     },
     {
      "code": "50007",
      "name": "Chittenden County (VT)"
     },
     {
      "code": "50009",
      "name": "Essex County (VT)"
     },
     {
      "code": "50011",
      "name": "Franklin County (VT)"
     },
     {
      "code": "50013",
      "name": "Grand Isle County (VT)"
     },
     {
      "code": "50015",
      "name": "Lamoille County (VT)"
     },
     {
      "code": "50017",
      "name": "Orange County (VT)"
     },
     {
      "code": "50019",
      "name": "Orleans County (VT)"
     },
     {
      "code": "50021",
      "name": "Rutland County (VT)"
     },
     {
      "code": "50023",
      "name": "Washington County (VT)"
     },
     {
      "code": "50025",
      "name": "Windham County (VT)"
     },
     {
      "code": "50027",
      "name": "Windsor County (VT)"
     },
     {
      "code": "51001",
      "name": "Accomack County (VA)"
     },
     {
      "code": "51003",
      "name": "Albemarle County (VA)"
     },
     {
      "code": "51005",
      "name": "Alleghany County (VA)"
     },
     {
      "code": "51007",
      "name": "Amelia County (VA)"
     },
     {
      "code": "51009",
      "name": "Amherst County (VA)"
     },
     {
      "code": "51011",
      "name": "Appomattox County (VA)"
     },
     {
      "code": "51013",
      "name": "Arlington County (VA)"
     },
     {
      "code": "51015",
      "name": "Augusta County (VA)"
     },
     {
      "code": "51017",
      "name": "Bath County (VA)"
     },
     {
      "code": "51019",
      "name": "Bedford County (VA)"
     },
     {
      "code": "51021",
      "name": "Bland County (VA)"
     },
     {
      "code": "51023",
      "name": "Botetourt County (VA)"
     },
     {
      "code": "51025",
      "name": "Brunswick County (VA)"
     },
     {
      "code": "51027",
      "name": "Buchanan County (VA)"
     },
     {
      "code": "51029",
      "name": "Buckingham County (VA)"
     },
     {
      "code": "51031",
      "name": "Campbell County (VA)"
     },
     {
      "code": "51033",
      "name": "Caroline County (VA)"
     },
     {
      "code": "51035",
      "name": "Carroll County (VA)"
     },
     {
      "code": "51036",
      "name": "Charles City County (VA)"
     },
     {
      "code": "51037",
      "name": "Charlotte County (VA)"
     },
     {
      "code": "51041",
      "name": "Chesterfield County (VA)"
     },
     {
      "code": "51043",
      "name": "Clarke County (VA)"
     },
     {
      "code": "51045",
      "name": "Craig County (VA)"
     },
     {
      "code": "51047",
      "name": "Culpeper County (VA)"
     },
     {
      "code": "51049",
      "name": "Cumberland County (VA)"
     },
     {
      "code": "51051",
      "name": "Dickenson County (VA)"
     },
     {
      "code": "51053",
      "name": "Dinwiddie County (VA)"
     },
     {
      "code": "51057",
      "name": "Essex County (VA)"
     },
     {
      "code": "51059",
      "name": "Fairfax County (VA)"
     },
     {
      "code": "51061",
      "name": "Fauquier County (VA)"
     },
     {
      "code": "51063",
      "name": "Floyd County (VA)"
     },
     {
      "code": "51065",
      "name": "Fluvanna County (VA)"
     },
     {
      "code": "51067",
      "name": "Franklin County (VA)"
     },
     {
      "code": "51069",
      "name": "Frederick County (VA)"
     },
     {
      "code": "51071",
      "name": "Giles County (VA)"
     },
     {
      "code": "51073",
      "name": "Gloucester County (VA)"
     },
     {
      "code": "51075",
      "name": "Goochland County (VA)"
     },
     {
      "code": "51077",
      "name": "Grayson County (VA)"
     },
     {
      "code": "51079",
      "name": "Greene County (VA)"
     },
     {
      "code": "51081",
      "name": "Greensville County (VA)"
     },
     {
      "code": "51083",
      "name": "Halifax County (VA)"
     },
     {
      "code": "51085",
      "name": "Hanover County (VA)"
     },
     {
      "code": "51087",
      "name": "Henrico County (VA)"
     },
     {
      "code": "51089",
      "name": "Henry County (VA)"
     },
     {
      "code": "51091",
      "name": "Highland County (VA)"
     },
     {
      "code": "51093",
      "name": "Isle of Wight County (VA)"
     },
     {
      "code": "51095",
      "name": "James City County (VA)"
     },
     {
      "code": "51097",
      "name": "King and Queen County (VA)"
     },
     {
      "code": "51099",
      "name": "King George County (VA)"
     },
     {
      "code": "51101",
      "name": "King William County (VA)"
     },
     {
      "code": "51103",
      "name": "Lancaster County (VA)"
     },
     {
      "code": "51105",
      "name": "Lee County (VA)"
     },
     {
      "code": "51107",
      "name": "Loudoun County (VA)"
     },
     {
      "code": "51109",
      "name": "Louisa County (VA)"
     },
     {
      "code": "51111",
      "name": "Lunenburg County (VA)"
     },
     {
      "code": "51113",
      "name": "Madison County (VA)"
     },
     {
      "code": "51115",
      "name": "Mathews County (VA)"
     },
     {
      "code": "51117",
      "name": "Mecklenburg County (VA)"
     },
     {
      "code": "51119",
      "name": "Middlesex County (VA)"
     },
     {
      "code": "51121",
      "name": "Montgomery County (VA)"
     },
     {
      "code": "51125",
      "name": "Nelson County (VA)"
     },
     {
      "code": "51127",
      "name": "New Kent County (VA)"
     },
     {
      "code": "51131",
      "name": "Northampton County (VA)"
     },
     {
      "code": "51133",
      "name": "Northumberland County (VA)"
     },
     {
      "code": "51135",
      "name": "Nottoway County (VA)"
     },
     {
      "code": "51137",
      "name": "Orange County (VA)"
     },
     {
      "code": "51139",
      "name": "Page County (VA)"
     },
     {
      "code": "51141",
      "name": "Patrick County (VA)"
     },
     {
      "code": "51143",
      "name": "Pittsylvania County (VA)"
     },
     {
      "code": "51145",
      "name": "Powhatan County (VA)"
     },
     {
      "code": "51147",
      "name": "Prince Edward County (VA)"
     },
     {
      "code": "51149",
      "name": "Prince George County (VA)"
     },
     {
      "code": "51153",
      "name": "Prince William County (VA)"
     },
     {
      "code": "51155",
      "name": "Pulaski County (VA)"
     },
     {
      "code": "51157",
      "name": "Rappahannock County (VA)"
     },
     {
      "code": "51159",
      "name": "Richmond County (VA)"
     },
     {
      "code": "51161",
      "name": "Roanoke County (VA)"
     },
     {
      "code": "51163",
      "name": "Rockbridge County (VA)"
     },
     {
      "code": "51165",
      "name": "Rockingham County (VA)"
     },
     {
      "code": "51167",
      "name": "Russell County (VA)"
     },
     {
      "code": "51169",
      "name": "Scott County (VA)"
     },
     {
      "code": "51171",
      "name": "Shenandoah County (VA)"
     },
     {
      "code": "51173",
      "name": "Smyth County (VA)"
     },
     {
      "code": "51175",
      "name": "Southampton County (VA)"
     },
     {
      "code": "51177",
      "name": "Spotsylvania County (VA)"
     },
     {
      "code": "51179",
      "name": "Stafford County (VA)"
     },
     {
      "code": "51181",
      "name": "Surry County (VA)"
     },
     {
      "code": "51183",
      "name": "Sussex County (VA)"
     },
     {
      "code": "51185",
      "name": "Tazewell County (VA)"
     },
     {
      "code": "51187",
      "name": "Warren County (VA)"
     },
     {
      "code": "51191",
      "name": "Washington County (VA)"
     },
     {
      "code": "51193",
      "name": "Westmoreland County (VA)"
     },
     {
      "code": "51195",
      "name": "Wise County (VA)"
     },
     {
      "code": "51197",
      "name": "Wythe County (VA)"
     },
     {
      "code": "51199",
      "name": "York County (VA)"
     },
     {
      "code": "51510",
      "name": "Alexandria city (VA)"
     },
     {
      "code": "51515",
      "name": "Bedford city (VA)"
     },
     {
      "code": "51520",
      "name": "Bristol city (VA)"
     },
     {
      "code": "51530",
      "name": "Buena Vista city (VA)"
     },
     {
      "code": "51540",
      "name": "Charlottesville city (VA)"
     },
     {
      "code": "51550",
      "name": "Chesapeake city (VA)"
     },
     {
      "code": "51560",
      "name": "Clifton Forg (IC) (VA)"
     },
     {
      "code": "51570",
      "name": "Colonial Heights city (VA)"
     },
     {
      "code": "51580",
      "name": "Covington city (VA)"
     },
     {
      "code": "51590",
      "name": "Danville city (VA)"
     },
     {
      "code": "51595",
      "name": "Emporia city (VA)"
     },
     {
      "code": "51600",
      "name": "Fairfax city (VA)"
     },
     {
      "code": "51610",
      "name": "Falls Church city (VA)"
     },
     {
      "code": "51620",
      "name": "Franklin city (VA)"
     },
     {
      "code": "51630",
      "name": "Fredericksburg city (VA)"
     },
     {
      "code": "51640",
      "name": "Galax city (VA)"
     },
     {
      "code": "51650",
      "name": "Hampton city (VA)"
     },
     {
      "code": "51660",
      "name": "Harrisonburg city (VA)"
     },
     {
      "code": "51670",
      "name": "Hopewell city (VA)"
     },
     {
      "code": "51678",
      "name": "Lexington city (VA)"
     },
     {
      "code": "51680",
      "name": "Lynchburg city (VA)"
     },
     {
      "code": "51683",
      "name": "Manassas city (VA)"
     },
     {
      "code": "51685",
      "name": "Manassas Park city (VA)"
     },
     {
      "code": "51690",
      "name": "Martinsville city (VA)"
     },
     {
      "code": "51700",
      "name": "Newport News city (VA)"
     },
     {
      "code": "51710",
      "name": "Norfolk city (VA)"
     },
     {
      "code": "51720",
      "name": "Norton city (VA)"
     },
     {
      "code": "51730",
      "name": "Petersburg city (VA)"
     },
     {
      "code": "51735",
      "name": "Poquoson city (VA)"
     },
     {
      "code": "51740",
      "name": "Portsmouth city (VA)"
     },
     {
      "code": "51750",
      "name": "Radford city (VA)"
     },
     {
      "code": "51760",
      "name": "Richmond city (VA)"
     },
     {
      "code": "51770",
      "name": "Roanoke city (VA)"
     },
     {
      "code": "51775",
      "name": "Salem city (VA)"
     },
     {
      "code": "51780",
      "name": "South Boston (IC) (VA)"
     },
     {
      "code": "51790",
      "name": "Staunton city (VA)"
     },
     {
      "code": "51800",
      "name": "Suffolk city (VA)"
     },
     {
      "code": "51810",
      "name": "Virginia Beach city (VA)"
     },
     {
      "code": "51820",
      "name": "Waynesboro city (VA)"
     },
     {
      "code": "51830",
      "name": "Williamsburg city (VA)"
     },
     {
      "code": "51840",
      "name": "Winchester city (VA)"
     },
     {
      "code": "53001",
      "name": "Adams County (WA)"
     },
     {
      "code": "53003",
      "name": "Asotin County (WA)"
     },
     {
      "code": "53005",
      "name": "Benton County (WA)"
     },
     {
      "code": "53007",
      "name": "Chelan County (WA)"
     },
     {
      "code": "53009",
      "name": "Clallam County (WA)"
     },
     {
      "code": "53011",
      "name": "Clark County (WA)"
     },
     {
      "code": "53013",
      "name": "Columbia County (WA)"
     },
     {
      "code": "53015",
      "name": "Cowlitz County (WA)"
     },
     {
      "code": "53017",
      "name": "Douglas County (WA)"
     },
     {
      "code": "53019",
      "name": "Ferry County (WA)"
     },
     {
      "code": "53021",
      "name": "Franklin County (WA)"
     },
     {
      "code": "53023",
      "name": "Garfield County (WA)"
     },
     {
      "code": "53025",
      "name": "Grant County (WA)"
     },
     {
      "code": "53027",
      "name": "Grays Harbor County (WA)"
     },
     {
      "code": "53029",
      "name": "Island County (WA)"
     },
     {
      "code": "53031",
      "name": "Jefferson County (WA)"
     },
     {
      "code": "53033",
      "name": "King County (WA)"
     },
     {
      "code": "53035",
      "name": "Kitsap County (WA)"
     },
     {
      "code": "53037",
      "name": "Kittitas County (WA)"
     },
     {
      "code": "53039",
      "name": "Klickitat County (WA)"
     },
     {
      "code": "53041",
      "name": "Lewis County (WA)"
     },
     {
      "code": "53043",
      "name": "Lincoln County (WA)"
     },
     {
      "code": "53045",
      "name": "Mason County (WA)"
     },
     {
      "code": "53047",
      "name": "Okanogan County (WA)"
     },
     {
      "code": "53049",
      "name": "Pacific County (WA)"
     },
     {
      "code": "53051",
      "name": "Pend Oreille County (WA)"
     },
     {
      "code": "53053",
      "name": "Pierce County (WA)"
     },
     {
      "code": "53055",
      "name": "San Juan County (WA)"
     },
     {
      "code": "53057",
      "name": "Skagit County (WA)"
     },
     {
      "code": "53059",
      "name": "Skamania County (WA)"
     },
     {
      "code": "53061",
      "name": "Snohomish County (WA)"
     },
     {
      "code": "53063",
      "name": "Spokane County (WA)"
     },
     {
      "code": "53065",
      "name": "Stevens County (WA)"
     },
     {
      "code": "53067",
      "name": "Thurston County (WA)"
     },
     {
      "code": "53069",
      "name": "Wahkiakum County (WA)"
     },
     {
      "code": "53071",
      "name": "Walla Walla County (WA)"
     },
     {
      "code": "53073",
      "name": "Whatcom County (WA)"
     },
     {
      "code": "53075",
      "name": "Whitman County (WA)"
     },
     {
      "code": "53077",
      "name": "Yakima County (WA)"
     },
     {
      "code": "54001",
      "name": "Barbour County (WV)"
     },
     {
      "code": "54003",
      "name": "Berkeley County (WV)"
     },
     {
      "code": "54005",
      "name": "Boone County (WV)"
     },
     {
      "code": "54007",
      "name": "Braxton County (WV)"
     },
     {
      "code": "54009",
      "name": "Brooke County (WV)"
     },
     {
      "code": "54011",
      "name": "Cabell County (WV)"
     },
     {
      "code": "54013",
      "name": "Calhoun County (WV)"
     },
     {
      "code": "54015",
      "name": "Clay County (WV)"
     },
     {
      "code": "54017",
      "name": "Doddridge County (WV)"
     },
     {
      "code": "54019",
      "name": "Fayette County (WV)"
     },
     {
      "code": "54021",
      "name": "Gilmer County (WV)"
     },
     {
      "code": "54023",
      "name": "Grant County (WV)"
     },
     {
      "code": "54025",
      "name": "Greenbrier County (WV)"
     },
     {
      "code": "54027",
      "name": "Hampshire County (WV)"
     },
     {
      "code": "54029",
      "name": "Hancock County (WV)"
     },
     {
      "code": "54031",
      "name": "Hardy County (WV)"
     },
     {
      "code": "54033",
      "name": "Harrison County (WV)"
     },
     {
      "code": "54035",
      "name": "Jackson County (WV)"
     },
     {
      "code": "54037",
      "name": "Jefferson County (WV)"
     },
     {
      "code": "54039",
      "name": "Kanawha County (WV)"
     },
     {
      "code": "54041",
      "name": "Lewis County (WV)"
     },
     {
      "code": "54043",
      "name": "Lincoln County (WV)"
     },
     {
      "code": "54045",
      "name": "Logan County (WV)"
     },
     {
      "code": "54047",
      "name": "McDowell County (WV)"
     },
     {
      "code": "54049",
      "name": "Marion County (WV)"
     },
     {
      "code": "54051",
      "name": "Marshall County (WV)"
     },
     {
      "code": "54053",
      "name": "Mason County (WV)"
     },
     {
      "code": "54055",
      "name": "Mercer County (WV)"
     },
     {
      "code": "54057",
      "name": "Mineral County (WV)"
     },
     {
      "code": "54059",
      "name": "Mingo County (WV)"
     },
     {
      "code": "54061",
      "name": "Monongalia County (WV)"
     },
     {
      "code": "54063",
      "name": "Monroe County (WV)"
     },
     {
      "code": "54065",
      "name": "Morgan County (WV)"
     },
     {
      "code": "54067",
      "name": "Nicholas County (WV)"
     },
     {
      "code": "54069",
      "name": "Ohio County (WV)"
     },
     {
      "code": "54071",
      "name": "Pendleton County (WV)"
     },
     {
      "code": "54073",
      "name": "Pleasants County (WV)"
     },
     {
      "code": "54075",
      "name": "Pocahontas County (WV)"
     },
     {
      "code": "54077",
      "name": "Preston County (WV)"
     },
     {
      "code": "54079",
      "name": "Putnam County (WV)"
     },
     {
      "code": "54081",
      "name": "Raleigh County (WV)"
     },
     {
      "code": "54083",
      "name": "Randolph County (WV)"
     },
     {
      "code": "54085",
      "name": "Ritchie County (WV)"
     },
     {
      "code": "54087",
      "name": "Roane County (WV)"
     },
     {
      "code": "54089",
      "name": "Summers County (WV)"
     },
     {
      "code": "54091",
      "name": "Taylor County (WV)"
     },
     {
      "code": "54093",
      "name": "Tucker County (WV)"
     },
     {
      "code": "54095",
      "name": "Tyler County (WV)"
     },
     {
      "code": "54097",
      "name": "Upshur County (WV)"
     },
     {
      "code": "54099",
      "name": "Wayne County (WV)"
     },
     {
      "code": "54101",
      "name": "Webster County (WV)"
     },
     {
      "code": "54103",
      "name": "Wetzel County (WV)"
     },
     {
      "code": "54105",
      "name": "Wirt County (WV)"
     },
     {
      "code": "54107",
      "name": "Wood County (WV)"
     },
     {
      "code": "54109",
      "name": "Wyoming County (WV)"
     },
     {
      "code": "55001",
      "name": "Adams County (WI)"
     },
     {
      "code": "55003",
      "name": "Ashland County (WI)"
     },
     {
      "code": "55005",
      "name": "Barron County (WI)"
     },
     {
      "code": "55007",
      "name": "Bayfield County (WI)"
     },
     {
      "code": "55009",
      "name": "Brown County (WI)"
     },
     {
      "code": "55011",
      "name": "Buffalo County (WI)"
     },
     {
      "code": "55013",
      "name": "Burnett County (WI)"
     },
     {
      "code": "55015",
      "name": "Calumet County (WI)"
     },
     {
      "code": "55017",
      "name": "Chippewa County (WI)"
     },
     {
      "code": "55019",
      "name": "Clark County (WI)"
     },
     {
      "code": "55021",
      "name": "Columbia County (WI)"
     },
     {
      "code": "55023",
      "name": "Crawford County (WI)"
     },
     {
      "code": "55025",
      "name": "Dane County (WI)"
     },
     {
      "code": "55027",
      "name": "Dodge County (WI)"
     },
     {
      "code": "55029",
      "name": "Door County (WI)"
     },
     {
      "code": "55031",
      "name": "Douglas County (WI)"
     },
     {
      "code": "55033",
      "name": "Dunn County (WI)"
     },
     {
      "code": "55035",
      "name": "Eau Claire County (WI)"
     },
     {
      "code": "55037",
      "name": "Florence County (WI)"
     },
     {
      "code": "55039",
      "name": "Fond du Lac County (WI)"
     },
     {
      "code": "55041",
      "name": "Forest County (WI)"
     },
     {
      "code": "55043",
      "name": "Grant County (WI)"
     },
     {
      "code": "55045",
      "name": "Green County (WI)"
     },
     {
      "code": "55047",
      "name": "Green Lake County (WI)"
     },
     {
      "code": "55049",
      "name": "Iowa County (WI)"
     },
     {
      "code": "55051",
      "name": "Iron County (WI)"
     },
     {
      "code": "55053",
      "name": "Jackson County (WI)"
     },
     {
      "code": "55055",
      "name": "Jefferson County (WI)"
     },
     {
      "code": "55057",
      "name": "Juneau County (WI)"
     },
     {
      "code": "55059",
      "name": "Kenosha County (WI)"
     },
     {
      "code": "55061",
      "name": "Kewaunee County (WI)"
     },
     {
      "code": "55063",
      "name": "La Crosse County (WI)"
     },
     {
      "code": "55065",
      "name": "Lafayette County (WI)"
     },
     {
      "code": "55067",
      "name": "Langlade County (WI)"
     },
     {
      "code": "55069",
      "name": "Lincoln County (WI)"
     },
     {
      "code": "55071",
      "name": "Manitowoc County (WI)"
     },
     {
      "code": "55073",
      "name": "Marathon County (WI)"
     },
     {
      "code": "55075",
      "name": "Marinette County (WI)"
     },
     {
      "code": "55077",
      "name": "Marquette County (WI)"
     },
     {
      "code": "55078",
      "name": "Menominee County (WI)"
     },
     {
      "code": "55079",
      "name": "Milwaukee County (WI)"
     },
     {
      "code": "55081",
      "name": "Monroe County (WI)"
     },
     {
      "code": "55083",
      "name": "Oconto County (WI)"
     },
     {
      "code": "55085",
      "name": "Oneida County (WI)"
     },
     {
      "code": "55087",
      "name": "Outagamie County (WI)"
     },
     {
      "code": "55089",
      "name": "Ozaukee County (WI)"
     },
     {
      "code": "55091",
      "name": "Pepin County (WI)"
     },
     {
      "code": "55093",
      "name": "Pierce County (WI)"
     },
     {
      "code": "55095",
      "name": "Polk County (WI)"
     },
     {
      "code": "55097",
      "name": "Portage County (WI)"
     },
     {
      "code": "55099",
      "name": "Price County (WI)"
     },
     {
      "code": "55101",
      "name": "Racine County (WI)"
     },
     {
      "code": "55103",
      "name": "Richland County (WI)"
     },
     {
      "code": "55105",
      "name": "Rock County (WI)"
     },
     {
      "code": "55107",
      "name": "Rusk County (WI)"
     },
     {
      "code": "55109",
      "name": "St. Croix County (WI)"
     },
     {
      "code": "55111",
      "name": "Sauk County (WI)"
     },
     {
      "code": "55113",
      "name": "Sawyer County (WI)"
     },
     {
      "code": "55115",
      "name": "Shawano County (WI)"
     },
     {
      "code": "55117",
      "name": "Sheboygan County (WI)"
     },
     {
      "code": "55119",
      "name": "Taylor County (WI)"
     },
     {
      "code": "55121",
      "name": "Trempealeau County (WI)"
     },
     {
      "code": "55123",
      "name": "Vernon County (WI)"
     },
     {
      "code": "55125",
      "name": "Vilas County (WI)"
     },
     {
      "code": "55127",
      "name": "Walworth County (WI)"
     },
     {
      "code": "55129",
      "name": "Washburn County (WI)"
     },
     {
      "code": "55131",
      "name": "Washington County (WI)"
     },
     {
      "code": "55133",
      "name": "Waukesha County (WI)"
     },
     {
      "code": "55135",
      "name": "Waupaca County (WI)"
     },
     {
      "code": "55137",
      "name": "Waushara County (WI)"
     },
     {
      "code": "55139",
      "name": "Winnebago County (WI)"
     },
     {
      "code": "55141",
      "name": "Wood County (WI)"
     },
     {
      "code": "56001",
      "name": "Albany County (WY)"
     },
     {
      "code": "56003",
      "name": "Big Horn County (WY)"
     },
     {
      "code": "56005",
      "name": "Campbell County (WY)"
     },
     {
      "code": "56007",
      "name": "Carbon County (WY)"
     },
     {
      "code": "56009",
      "name": "Converse County (WY)"
     },
     {
      "code": "56011",
      "name": "Crook County (WY)"
     },
     {
      "code": "56013",
      "name": "Fremont County (WY)"
     },
     {
      "code": "56015",
      "name": "Goshen County (WY)"
     },
     {
      "code": "56017",
      "name": "Hot Springs County (WY)"
     },
     {
      "code": "56019",
      "name": "Johnson County (WY)"
     },
     {
      "code": "56021",
      "name": "Laramie County (WY)"
     },
     {
      "code": "56023",
      "name": "Lincoln County (WY)"
     },
     {
      "code": "56025",
      "name": "Natrona County (WY)"
     },
     {
      "code": "56027",
      "name": "Niobrara County (WY)"
     },
     {
      "code": "56029",
      "name": "Park County (WY)"
     },
     {
      "code": "56031",
      "name": "Platte County (WY)"
     },
     {
      "code": "56033",
      "name": "Sheridan County (WY)"
     },
     {
      "code": "56035",
      "name": "Sublette County (WY)"
     },
     {
      "code": "56037",
      "name": "Sweetwater County (WY)"
     },
     {
      "code": "56039",
      "name": "Teton County (WY)"
     },
     {
      "code": "56041",
      "name": "Uinta County (WY)"
     },
     {
      "code": "56043",
      "name": "Washakie County (WY)"
     },
     {
      "code": "56045",
      "name": "Weston County (WY)"
     },
     {
      "code": "56895",
      "name": "Yellowstone Park (WY)"
     },
     {
      "code": "60010",
      "name": "Eastern District (AS)"
     },
     {
      "code": "60020",
      "name": "Manu'a District (AS)"
     },
     {
      "code": "60030",
      "name": "Rose Island (AS)"
     },
     {
      "code": "60040",
      "name": "Swains Island (AS)"
     },
     {
      "code": "60050",
      "name": "Western District (AS)"
     },
     {
      "code": "66010",
      "name": "Guam (GU)"
     },
     {
      "code": "69085",
      "name": "Northern Islands Municipality (MP)"
     },
     {
      "code": "69100",
      "name": "Rota Municipality (MP)"
     },
     {
      "code": "69110",
      "name": "Saipan Municipality (MP)"
     },
     {
      "code": "69120",
      "name": "Tinian Municipality (MP)"
     },
     {
      "code": "70002",
      "name": "Aimeliik (PW)"
     },
     {
      "code": "70004",
      "name": "Airai (PW)"
     },
     {
      "code": "70010",
      "name": "Angaur (PW)"
     },
     {
      "code": "70050",
      "name": "Hatobohei (PW)"
     },
     {
      "code": "70100",
      "name": "Kayangei (PW)"
     },
     {
      "code": "70150",
      "name": "Koror (PW)"
     },
     {
      "code": "70212",
      "name": "Melekeok (PW)"
     },
     {
      "code": "70214",
      "name": "Ngaraard (PW)"
     },
     {
      "code": "70218",
      "name": "Ngarchelong (PW)"
     },
     {
      "code": "70222",
      "name": "Ngardmau (PW)"
     },
     {
      "code": "70224",
      "name": "Ngatpang (PW)"
     },
     {
      "code": "70226",
      "name": "Ngchesar (PW)"
     },
     {
      "code": "70227",
      "name": "Ngernmlengui (PW)"
     },
     {
      "code": "70228",
      "name": "Ngiwai (PW)"
     },
     {
      "code": "70350",
      "name": "Peleliu (PW)"
     },
     {
      "code": "70370",
      "name": "Sonsorol (PW)"
     },
     {
      "code": "72001",
      "name": "Adjuntas Municipio (PR)"
     },
     {
      "code": "72003",
      "name": "Aguada Municipio (PR)"
     },
     {
      "code": "72005",
      "name": "Aguadilla Municipio (PR)"
     },
     {
      "code": "72007",
      "name": "Aguas Buenas Municipio (PR)"
     },
     {
      "code": "72009",
      "name": "Aibonito Municipio (PR)"
     },
     {
      "code": "72011",
      "name": "Anasco Municipio (PR)"
     },
     {
      "code": "72013",
      "name": "Arecibo Municipio (PR)"
     },
     {
      "code": "72015",
      "name": "Arroyo Municipio (PR)"
     },
     {
      "code": "72017",
      "name": "Barceloneta Municipio (PR)"
     },
     {
      "code": "72019",
      "name": "Barranquitas Municipio (PR)"
     },
     {
      "code": "72021",
      "name": "Bayamon Municipio (PR)"
     },
     {
      "code": "72023",
      "name": "Cabo Rojo Municipio (PR)"
     },
     {
      "code": "72025",
      "name": "Caguas Municipio (PR)"
     },
     {
      "code": "72027",
      "name": "Camuy Municipio (PR)"
     },
     {
      "code": "72029",
      "name": "Canovanas Municipio (PR)"
     },
     {
      "code": "72031",
      "name": "Carolina Municipio (PR)"
     },
     {
      "code": "72033",
      "name": "Catano Municipio (PR)"
     },
     {
      "code": "72035",
      "name": "Cayey Municipio (PR)"
     },
     {
      "code": "72037",
      "name": "Ceiba Municipio (PR)"
     },
     {
      "code": "72039",
      "name": "Ciales Municipio (PR)"
     },
     {
      "code": "72041",
      "name": "Cidra Municipio (PR)"
     },
     {
      "code": "72043",
      "name": "Coamo Municipio (PR)"
     },
     {
      "code": "72045",
      "name": "Comerio Municipio (PR)"
     },
     {
      "code": "72047",
      "name": "Corozal Municipio (PR)"
     },
     {
      "code": "72049",
      "name": "Culebra Municipio (PR)"
     },
     {
      "code": "72051",
      "name": "Dorado Municipio (PR)"
     },
     {
      "code": "72053",
      "name": "Fajardo Municipio (PR)"
     },
     {
      "code": "72054",
      "name": "Florida Municipio (PR)"
     },
     {
      "code": "72055",
      "name": "Guanica Municipio (PR)"
     },
     {
      "code": "72057",
      "name": "Guayama Municipio (PR)"
     },
     {
      "code": "72059",
      "name": "Guayanilla Municipio (PR)"
     },
     {
      "code": "72061",
      "name": "Guaynabo Municipio (PR)"
     },
     {
      "code": "72063",
      "name": "Gurabo Municipio (PR)"
     },
     {
      "code": "72065",
      "name": "Hatillo Municipio (PR)"
     },
     {
      "code": "72067",
      "name": "Hormigueros Municipio (PR)"
     },
     {
      "code": "72069",
      "name": "Humacao Municipio (PR)"
     },
     {
      "code": "72071",
      "name": "Isabela Municipio (PR)"
     },
     {
      "code": "72073",
      "name": "Jayuya Municipio (PR)"
     },
     {
      "code": "72075",
      "name": "Juana Diaz Municipio (PR)"
     },
     {
      "code": "72077",
      "name": "Juncos Municipio (PR)"
     },
     {
      "code": "72079",
      "name": "Lajas Municipio (PR)"
     },
     {
      "code": "72081",
      "name": "Lares Municipio (PR)"
     },
     {
      "code": "72083",
      "name": "Las Marias Municipio (PR)"
     },
     {
      "code": "72085",
      "name": "Las Piedras Municipio (PR)"
     },
     {
      "code": "72087",
      "name": "Loiza Municipio (PR)"
     },
     {
      "code": "72089",
      "name": "Luquillo Municipio (PR)"
     },
     {
      "code": "72091",
      "name": "Manati Municipio (PR)"
     },
     {
      "code": "72093",
      "name": "Maricao Municipio (PR)"
     },
     {
      "code": "72095",
      "name": "Maunabo Municipio (PR)"
     },
     {
      "code": "72097",
      "name": "Mayaguez Municipio (PR)"
     },
     {
      "code": "72099",
      "name": "Moca Municipio (PR)"
     },
     {
      "code": "72101",
      "name": "Morovis Municipio (PR)"
     },
     {
      "code": "72103",
      "name": "Naguabo Municipio (PR)"
     },
     {
      "code": "72105",
      "name": "Naranjito Municipio (PR)"
     },
     {
      "code": "72107",
      "name": "Orocovis Municipio (PR)"
     },
     {
      "code": "72109",
      "name": "Patillas Municipio (PR)"
     },
     {
      "code": "72111",
      "name": "Penuelas Municipio (PR)"
     },
     {
      "code": "72113",
      "name": "Ponce Municipio (PR)"
     },
     {
      "code": "72115",
      "name": "Quebradillas Municipio (PR)"
     },
     {
      "code": "72117",
      "name": "Rincon Municipio (PR)"
     },
     {
      "code": "72119",
      "name": "Rio Grande Municipio (PR)"
     },
     {
      "code": "72121",
      "name": "Sabana Grande Municipio (PR)"
     },
     {
      "code": "72123",
      "name": "Salinas Municipio (PR)"
     },
     {
      "code": "72125",
      "name": "San German Municipio (PR)"
     },
     {
      "code": "72127",
      "name": "San Juan Municipio (PR)"
     },
     {
      "code": "72129",
      "name": "San Lorenzo Municipio (PR)"
     },
     {
      "code": "72131",
      "name": "San Sebastian Municipio (PR)"
     },
     {
      "code": "72133",
      "name": "Santa Isabel Municipio (PR)"
     },
     {
      "code": "72135",
      "name": "Toa Alta Municipio (PR)"
     },
     {
      "code": "72137",
      "name": "Toa Baja Municipio (PR)"
     },
     {
      "code": "72139",
      "name": "Trujillo Alto Municipio (PR)"
     },
     {
      "code": "72141",
      "name": "Utuado Municipio (PR)"
     },
     {
      "code": "72143",
      "name": "Vega Alta Municipio (PR)"
     },
     {
      "code": "72145",
      "name": "Vega Baja Municipio (PR)"
     },
     {
      "code": "72147",
      "name": "Vieques Municipio (PR)"
     },
     {
      "code": "72149",
      "name": "Villalba Municipio (PR)"
     },
     {
      "code": "72151",
      "name": "Yabucoa Municipio (PR)"
     },
     {
      "code": "72153",
      "name": "Yauco Municipio (PR)"
     },
     {
      "code": "78010",
      "name": "St. Croix Island (VI)"
     },
     {
      "code": "78020",
      "name": "St. John Island (VI)"
     },
     {
      "code": "78030",
      "name": "St. Thomas Island (VI)"
     }
    ]
   },
   "name": "county",
   "length": 255,
   "alias": "County",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "latitude",
   "alias": "Latitude",
   "type": "esriFieldTypeDouble"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "longitude",
   "alias": "Longitude",
   "type": "esriFieldTypeDouble"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "host",
   "length": 255,
   "alias": "Host / PI",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_TargetSpecies",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "FGBLCXK",
      "name": " 'Candidatus Phytoplasma australiense' 16SrXII-B (Australian grapevine yellows)"
     },
     {
      "code": "FEARMGA",
      "name": " 'Candidatus Phytoplasma mali' 16SrX-A (Apple proliferation)"
     },
     {
      "code": "FGAMMDE",
      "name": " 'Candidatus Phytoplasma palmae' 16Sr-IV  (Palm lethal yellowing)"
     },
     {
      "code": "FEALMPN",
      "name": " 'Candidatus Phytoplasma phoenicium' 16SrIX-B (Almond witches' broom)"
     },
     {
      "code": "FEARMIY",
      "name": " 'Candidatus Phytoplasma prunorum' 16SrX-F (European stone fruit yellows)"
     },
     {
      "code": "FGDCMDM",
      "name": " 'Candidatus Phytoplasma solani' 16SrXII-A (Bois noir; Stolbur)"
     },
     {
      "code": "FGBLMDR",
      "name": " 'Candidatus Phytoplasma vitis' 16SrV-C  (Flavescence dorée)"
     },
     {
      "code": "ITBUETA",
      "name": "Adoxophyes orana (Summer fruit tortrix moth)"
     },
     {
      "code": "INAHBSA",
      "name": "Agrilus auroguttatus (Goldspotted oak borer)"
     },
     {
      "code": "INAHRPA",
      "name": "Agrilus biguttatus (Oak splendour beetle)"
     },
     {
      "code": "INAHQJA",
      "name": "Agrilus planipennis (Emerald ash borer)"
     },
     {
      "code": "PEUAZBA",
      "name": "Alectra vogelii (Yellow witchweed)"
     },
     {
      "code": "NEEBABA",
      "name": "Anguina tritici (Wheat seed gall nematode)"
     },
     {
      "code": "INALRBA",
      "name": "Anoplophora chinensis (Citrus longhorned beetle)"
     },
     {
      "code": "INALQCA",
      "name": "Anoplophora glabripennis (Asian longhorned beetle)"
     },
     {
      "code": "INASAHA",
      "name": "Anthonomus grandis (Boll weevil)"
     },
     {
      "code": "ITBUITA",
      "name": "Archips xylosteanus (Variegated golden tortrix)"
     },
     {
      "code": "ITCJAJA",
      "name": "Argyresthia pruniella  (Cherry blossom moth)"
     },
     {
      "code": "IRAKJGA",
      "name": "Aspidiotus rigidus (False coconut scale)"
     },
     {
      "code": "ITBCFCA",
      "name": "Autographa gamma (Silver Y moth)"
     },
     {
      "code": "IOBMCAA",
      "name": "Bactrocera zonata (Peach fruit fly)"
     },
     {
      "code": "IGDQBBA",
      "name": "Belocaulus spp. (leatherleaf slugs)"
     },
     {
      "code": "NEABBBA",
      "name": "Bursaphelenchus cocophilus (Red ring nematode)"
     },
     {
      "code": "INALTSA",
      "name": "Callidiellum villosulum (Brown fir longhorned beetle)"
     },
     {
      "code": "FGANCYJ",
      "name": "Ceratocystis manginecans (Mango sudden decline)"
     },
     {
      "code": "IGDGQEA",
      "name": "Cernuella spp. (hygromiid snails)"
     },
     {
      "code": "IGDGAMA",
      "name": "Cernuella virgata (Maritime garden snail)"
     },
     {
      "code": "IRAHCIA",
      "name": "Ceroplastes japonicus (Japanese wax scale)"
     },
     {
      "code": "ITBMEVA",
      "name": "Chilo partellus (Spotted stem borer)"
     },
     {
      "code": "ITBMAOA",
      "name": "Chilo suppressalis (Asiatic rice borer)"
     },
     {
      "code": "INALCEA",
      "name": "Chlorophorus annularis (Bamboo borer)"
     },
     {
      "code": "INALSPA",
      "name": "Chlorophorus strobilicola (Slender-banded pine cone longhorn beetle)"
     },
     {
      "code": "ITBCQGA",
      "name": "Chrysodeixis chalcites (Golden twin spot moth)"
     },
     {
      "code": "FVCCCCV",
      "name": "Cocadviroid Coconut cadang-cadang viroid (Coconut cadang-cadang (CCCVd))"
     },
     {
      "code": "IGDGDEA",
      "name": "Cochlicella spp. (cochlicellid snails)"
     },
     {
      "code": "IGDQBCA",
      "name": "Colosius spp. (leatherleaf slugs)"
     },
     {
      "code": "ITBMHNA",
      "name": "Conogethes punctiferalis (Castor capsule borer, Yellow peach moth)"
     },
     {
      "code": "ITBUGUA",
      "name": "Crocidosema aporema (Bud borer)"
     },
     {
      "code": "FDAYCKX",
      "name": "Cronartium flaccidum (Scots pine blister rust)"
     },
     {
      "code": "ITBMDPA",
      "name": "Cryptoblabes gnidiella  (Christmas berry webworm)"
     },
     {
      "code": "ITAVQBA",
      "name": "Darna pallivitta  (Nettle caterpillar)"
     },
     {
      "code": "INBQAQA",
      "name": "Dendroctonus micans (European spruce beetle)"
     },
     {
      "code": "ITAUAOA",
      "name": "Dendrolimus pini (Pine-tree lappet)"
     },
     {
      "code": "ITAUAVA",
      "name": "Dendrolimus punctatus (Masson pine moth)"
     },
     {
      "code": "ITAUAWA",
      "name": "Dendrolimus sibiricus (Siberian silk moth)"
     },
     {
      "code": "INAMFQA",
      "name": "Diabrotica speciosa (Cucurbit beetle)"
     },
     {
      "code": "ISAOAUA",
      "name": "Diprion pini (Pine sawfly)"
     },
     {
      "code": "NEKBBBC",
      "name": "Ditylenchus angustus (Rice stem nematode)"
     },
     {
      "code": "ITBUGSA",
      "name": "Enarmonia formosana (Cherry bark tortrix)"
     },
     {
      "code": "ITBUBPA",
      "name": "Epiphyas postvittana (Light brown apple moth)"
     },
     {
      "code": "FBAAEFX",
      "name": "Erwinia pyrifolia (Asian pear blight)"
     },
     {
      "code": "ITBIAEA",
      "name": "Eupoecilia ambiguella (European grape berry moth)"
     },
     {
      "code": "IQAZAMA",
      "name": "Eurygaster integriceps (Sunn pest)"
     },
     {
      "code": "ILAVCEA",
      "name": "Eutetranychus orientalis (Citrus brown mite)"
     },
     {
      "code": "FKAQFEH",
      "name": "Fusarium oxysporum f. sp. cubense Tropical Race 4 (Panama disease TR 4)"
     },
     {
      "code": "NEFBBBC",
      "name": "Globodera pallida (Pale cyst nematode)"
     },
     {
      "code": "NEFBBBA",
      "name": "Globodera rostochiensis (Golden nematode)"
     },
     {
      "code": "ITBUESA",
      "name": "Grapholita funebrana (Plum fruit moth)"
     },
     {
      "code": "ITBUFKA",
      "name": "Gymnandrosoma auratianum (Citrus fruit borer)"
     },
     {
      "code": "IRBAABA",
      "name": "Haplaxius crudus (American palm cixiid)"
     },
     {
      "code": "FGDNCGZ",
      "name": "Harpophora maydis (Late wilt of corn)"
     },
     {
      "code": "ITBCFBA",
      "name": "Helicoverpa armigera (Old world bollworm)"
     },
     {
      "code": "FJAAHCM",
      "name": "Hemileia vastatrix (Coffee leaf rust)"
     },
     {
      "code": "NEFBCBL",
      "name": "Heterodera cajani (Pigeonpea cyst nematode)"
     },
     {
      "code": "NEFBCCB",
      "name": "Heterodera ciceri (Chickpea cyst nematode)"
     },
     {
      "code": "NEFBCBH",
      "name": "Heterodera latipons (Mediterranean cereal cyst nematode)"
     },
     {
      "code": "NEFBCBZ",
      "name": "Heterodera sacchari (Sugar cane cyst nematode)"
     },
     {
      "code": "INBPQYA",
      "name": "Heteronychus arator (Black maize beetle)"
     },
     {
      "code": "INASHZA",
      "name": "Hylobius abeitus (Large pine weevil)"
     },
     {
      "code": "FDACCOZ",
      "name": "Hymenoscyphus fraxineus (Ash dieback)"
     },
     {
      "code": "INBQQCA",
      "name": "Ips sexdentatus (Six-toothed bark beetle)"
     },
     {
      "code": "INBQDEA",
      "name": "Ips typographus (European spruce bark beetle)"
     },
     {
      "code": "IGDQBDA",
      "name": "Laevicaulis spp. (leatherleaf slugs)"
     },
     {
      "code": "IRAJASA",
      "name": "Laodelphax striatellus (Small brown planthopper)"
     },
     {
      "code": "ITAYAKA",
      "name": "Leucoptera malifoliella  (Pear leaf blister moth)"
     },
     {
      "code": "IGDBABA",
      "name": "Lissachatina fulica (Giant African snail)"
     },
     {
      "code": "ITBUDUA",
      "name": "Lobesia botrana (European grapevine moth)"
     },
     {
      "code": "IRANADA",
      "name": "Lycorma delicatula (Spotted lanternfly)"
     },
     {
      "code": "ITAXQKA",
      "name": "Lymantria albescens (Okinawa gypsy moth)"
     },
     {
      "code": "ITAXQBA",
      "name": "Lymantria dispar asiatica (Asian gypsy moth)"
     },
     {
      "code": "ITAXQJA",
      "name": "Lymantria dispar japonica (Japanese gypsy moth )"
     },
     {
      "code": "ITAXQIA",
      "name": "Lymantria mathura (Rosy moth)"
     },
     {
      "code": "ITAXAKA",
      "name": "Lymantria monacha (Nun moth )"
     },
     {
      "code": "ITAXQLA",
      "name": "Lymantria postalba (White-winged gypsy moth)"
     },
     {
      "code": "ITAXQMA",
      "name": "Lymantria umbrosa (Hokkaido gypsy moth)"
     },
     {
      "code": "ITAXAQA",
      "name": "Lymantria xylina  (Casuarina tussock moth)"
     },
     {
      "code": "ITBCDMA",
      "name": "Mamestra brassicae (Cabbage moth)"
     },
     {
      "code": "INBNADA",
      "name": "Megaplatypus mutatus (Ambrosia beetle)"
     },
     {
      "code": "IGDKALA",
      "name": "Meghimatium pictum (Chinese slug)"
     },
     {
      "code": "NEOBCBK",
      "name": "Meloidogyne artiellia (British root-knot nematode)"
     },
     {
      "code": "NEOBQEA",
      "name": "Meloidogyne fallax (False Columbia root-knot nematode )"
     },
     {
      "code": "NEOBCBU",
      "name": "Meloidogyne minor (Root-knot nematode )"
     },
     {
      "code": "IGDGCLA",
      "name": "Monacha spp. (hygromiid snails)"
     },
     {
      "code": "FBADMJS",
      "name": "Monilia polystroma  (Asiatic brown rot)"
     },
     {
      "code": "FIEXMEC",
      "name": "Monilinia fructigena  (Brown rot, Apple brown rot)"
     },
     {
      "code": "INALQQA",
      "name": "Monochamus alternatus (Japanese pine sawyer)"
     },
     {
      "code": "INALTCA",
      "name": "Monochamus urussovii (Black fir sawyer)"
     },
     {
      "code": "FIBFHCN",
      "name": "Neofusicoccum mangiferae (Mango fruit rot)"
     },
     {
      "code": "ITBMEQA",
      "name": "Neoleucinodes elegantalis (Tomato fruit borer)"
     },
     {
      "code": "FVTBRVA",
      "name": "Nepovirus Tomato black ring virus (Tomato black ring (TBRV))"
     },
     {
      "code": "PBFCNDA",
      "name": "Onopordum acaulon  (Horse thistle)"
     },
     {
      "code": "INBQQEA",
      "name": "Orthotomicus erosus (Mediterranean pine engraver)"
     },
     {
      "code": "INBPCSA",
      "name": "Oryctes rhinoceros  (Coconut rhinoceros beetle)"
     },
     {
      "code": "IQALAWA",
      "name": "Oxycarenus hyalinipennis (Cotton seed bug)"
     },
     {
      "code": "ITBCFGA",
      "name": "Panolis flammea (Pine beauty moth)"
     },
     {
      "code": "IRAKQMB",
      "name": "Paratachardina pseudolobata (Lobate lac scale)"
     },
     {
      "code": "ITAFABA",
      "name": "Paysandisia archon  (South American palm borer)"
     },
     {
      "code": "ITAMAOA",
      "name": "Pectinophora gossypiella (Pink bollworm)"
     },
     {
      "code": "FFABPMD",
      "name": "Peronosclerospora maydis (Java downy mildew)"
     },
     {
      "code": "FFABPMF",
      "name": "Peronosclerospora philippinensis (Philippine downy mildew)"
     },
     {
      "code": "IOABBPA",
      "name": "Phytomyza gymnostoma  (Onion leafminer)"
     },
     {
      "code": "FICBPUT",
      "name": "Phytophthora alni  (Alder root and collar rot)"
     },
     {
      "code": "FGANQQC",
      "name": "Phytophthora austrocedrae  (Mal del ciprés (Cypress mortality))"
     },
     {
      "code": "FDARPUJ",
      "name": "Phytophthora kernoviae (Beech bleeding canker)"
     },
     {
      "code": "FGANQAD",
      "name": "Phytophthora quercina (Oak decline)"
     },
     {
      "code": "FGANPYC",
      "name": "Phytophthora quercina (Oak decline)"
     },
     {
      "code": "ITBJAKA",
      "name": "Pieris brassicae  (Large white butterfly)"
     },
     {
      "code": "INBQQFA",
      "name": "Pityogenes chalcographus (Six-toothed spruce bark beetle)"
     },
     {
      "code": "INBNQEA",
      "name": "Platypus quercivorus (Oak ambrosia beetle)"
     },
     {
      "code": "FVPPVBE",
      "name": "Potyvirus Plum pox virus (Plum pox (PPV))"
     },
     {
      "code": "FBDAPLF",
      "name": "Pseudopezicula tracheiphila (Rotbrenner)"
     },
     {
      "code": "NEFBDBB",
      "name": "Punctodera chalcoensis (Mexican corn cyst nematode)"
     },
     {
      "code": "FGATRQE",
      "name": "Raffaelea quercivora (Japanese oak wilt)"
     },
     {
      "code": "FGAYPFW",
      "name": "Ralstonia solanacearum race 3 biovar 2  (Bacterial wilt)"
     },
     {
      "code": "ILAUAPA",
      "name": "Raoiella indica  (Red palm mite)"
     },
     {
      "code": "FGAJCXM",
      "name": "Rathayibacter toxicus (Annual ryegrass toxicity)"
     },
     {
      "code": "INASDHA",
      "name": "Rhabdoscelus obscurus  (New Guinea sugarcane weevil)"
     },
     {
      "code": "IOBMCDA",
      "name": "Rhagoletis cerasi (European cherry fruit fly)"
     },
     {
      "code": "INASMKA",
      "name": "Rhynchophorus ferrugineus (Red palm weevil)"
     },
     {
      "code": "INASHTA",
      "name": "Rhynchophorus palmarum  (South American palm weevil)"
     },
     {
      "code": "IGDQBEA",
      "name": "Sarasinula spp. (leatherleaf slugs)"
     },
     {
      "code": "FFABSET",
      "name": "Sclerophthora rayssiae var. zeae (Brown stripe downy mildew)"
     },
     {
      "code": "IGDQBFA",
      "name": "Semperula spp. (leatherleaf slugs)"
     },
     {
      "code": "ITBCFPA",
      "name": "Spodoptera littoralis (Egyptian cottonworm)"
     },
     {
      "code": "ITBCFMA",
      "name": "Spodoptera litura (Cotton cutworm)"
     },
     {
      "code": "ITBFAGA",
      "name": "Stenoma catenifer (Avocado seed moth)"
     },
     {
      "code": "FEANSHM",
      "name": "Synchytrium endobioticum  (Potato wart)"
     },
     {
      "code": "ITAMCWA",
      "name": "Tecia solanivora (Guatemalan potato moth)"
     },
     {
      "code": "INALQSA",
      "name": "Tetropium castaneum (Black spruce beetle)"
     },
     {
      "code": "INALQRA",
      "name": "Tetropium fuscum (Brown spruce longhorned beetle)"
     },
     {
      "code": "ITBUEUA",
      "name": "Thaumatotibia leucotreta (False codling moth)"
     },
     {
      "code": "ITBDANA",
      "name": "Thaumetopoea pityocampa (Pine processionary moth)"
     },
     {
      "code": "ITBDBDA",
      "name": "Thaumetopoea processionea (Oak processionary moth)"
     },
     {
      "code": "FVCGMMV",
      "name": "Tobamovirus Cucumber green mottle mosaic virus (Cucumber green mottle mosaic (CGMMV))"
     },
     {
      "code": "INBQFHA",
      "name": "Tomicus destruens (Mediterranean pine shoot beetle)"
     },
     {
      "code": "ITBUEWA",
      "name": "Tortrix viridana (Green oak tortrix)"
     },
     {
      "code": "FVGBNVA",
      "name": "Tospovirus Groundnut bud necrosis virus (Groundnut bud necrosis (GBNV))"
     },
     {
      "code": "INALQPA",
      "name": "Trichoferus campestris (Velvet longhorned beetle)"
     },
     {
      "code": "INATANA",
      "name": "Trogoderma granarium (Khapra beetle)"
     },
     {
      "code": "INBQRCA",
      "name": "Trypodendron domesticum (European hardwood ambrosia beetle)"
     },
     {
      "code": "ITAMCLA",
      "name": "Tuta absoluta (Tomato leafminer)"
     },
     {
      "code": "IRAKCVA",
      "name": "Unaspis yanonensis (Arrowhead scale)"
     },
     {
      "code": "IGDQAWA",
      "name": "Veronicella spp. (leatherleaf slugs)"
     },
     {
      "code": "FBZAECO",
      "name": "Xanthomonas  oryzaepv. oryzae (Bacterial blight)"
     },
     {
      "code": "FMBVXBN",
      "name": "Xanthomonas oryzae pv. oryzicola (Bacterial leaf streak)"
     }
    ]
   },
   "name": "targetsci",
   "length": 255,
   "alias": "Species Target",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "targetcom",
   "length": 255,
   "alias": "Species Target - Common Name",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_inspectiontype",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "trap",
      "name": "Trap"
     },
     {
      "code": "visual",
      "name": "Visual"
     },
     {
      "code": "both",
      "name": "Visual and Trapping"
     },
     {
      "code": "marker",
      "name": "Marker"
     }
    ]
   },
   "name": "surveytype",
   "length": 6,
   "alias": "Inspection Type",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "trapid",
   "length": 255,
   "alias": "Trap Number",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "trapidalt",
   "length": 255,
   "alias": "Alternate Trap Number",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": null,
   "name": "numtraps",
   "alias": "Number of Traps",
   "type": "esriFieldTypeInteger"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_traptype",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "40",
      "name": "Bait station"
     },
     {
      "code": "1",
      "name": "Black Light Trap"
     },
     {
      "code": "28",
      "name": "Boll Weevil Trap"
     },
     {
      "code": "2",
      "name": "Cross Vane Panel Trap, Black"
     },
     {
      "code": "34",
      "name": "Cross Vane Panel Trap, Translucent"
     },
     {
      "code": "3",
      "name": "Diamond Trap"
     },
     {
      "code": "41",
      "name": "Fruit fly, McPhail trap, Glass"
     },
     {
      "code": "37",
      "name": "Fruit fly, McPhail trap, Plastic"
     },
     {
      "code": "42",
      "name": "Fruit fly, Multi-Lure"
     },
     {
      "code": "36",
      "name": "Green Multi-funnel Trap, 12 Funnel, Wet"
     },
     {
      "code": "4",
      "name": "Heliothis Trap"
     },
     {
      "code": "301",
      "name": "Homemade 16-32 oz plastic cup"
     },
     {
      "code": "302",
      "name": "Homemade 33-64 oz plastic jug"
     },
     {
      "code": "23",
      "name": "Homemade 5-Gallon Bucket Trap"
     },
     {
      "code": "303",
      "name": "Homemade gallon jug"
     },
     {
      "code": "5",
      "name": "Jackson Trap Body"
     },
     {
      "code": "38",
      "name": "Japanese Beetle Trap"
     },
     {
      "code": "205",
      "name": "Juglans branch cutting"
     },
     {
      "code": "31",
      "name": "Khapra Beetle Wall Mount Trap Kit"
     },
     {
      "code": "101",
      "name": "Large Plastic Delta Trap Kits, Orange"
     },
     {
      "code": "102",
      "name": "Large Plastic Delta Trap Kits, Red"
     },
     {
      "code": "103",
      "name": "Large Plastic Delta Trap Kits, White"
     },
     {
      "code": "9",
      "name": "Milk Carton Trap"
     },
     {
      "code": "106",
      "name": "Multi-funnel Trap, 12 Funnel, Dry"
     },
     {
      "code": "107",
      "name": "Multi-funnel Trap, 12 Funnel, Wet"
     },
     {
      "code": "111",
      "name": "Multi-funnel Trap, 4 Funnel, Wet"
     },
     {
      "code": "104",
      "name": "Multi-funnel Trap, 8 Funnel, Dry"
     },
     {
      "code": "105",
      "name": "Multi-funnel Trap, 8 Funnel, Wet"
     },
     {
      "code": "26",
      "name": "Palm Weevil Bucket Trap"
     },
     {
      "code": "29",
      "name": "Pan Trap"
     },
     {
      "code": "108",
      "name": "Paper Delta Trap, 2 sticky sides, Brown"
     },
     {
      "code": "110",
      "name": "Paper Delta Trap, 2 sticky sides, Green"
     },
     {
      "code": "109",
      "name": "Paper Delta Trap, 2 sticky sides, Orange"
     },
     {
      "code": "17",
      "name": "Paper Delta Trap, 3 sticky sides, Orange"
     },
     {
      "code": "30",
      "name": "Pitfall Trap"
     },
     {
      "code": "18",
      "name": "Plastic Bucket Trap"
     },
     {
      "code": "45",
      "name": "Prism Trap - Green"
     },
     {
      "code": "19",
      "name": "Prism Trap - Purple"
     },
     {
      "code": "201",
      "name": "Pyramid Trap, 2 ft height, AgBio Dead-Inn"
     },
     {
      "code": "202",
      "name": "Pyramid Trap, 4 ft height, AgBio Dead-Inn"
     },
     {
      "code": "112",
      "name": "Rothamsted Incandescent Light Trap"
     },
     {
      "code": "32",
      "name": "Sticky Card, Blue"
     },
     {
      "code": "25",
      "name": "Sticky Card, Clear"
     },
     {
      "code": "113",
      "name": "Sticky Card, White"
     },
     {
      "code": "43",
      "name": "Sticky Card, Yellow"
     },
     {
      "code": "20",
      "name": "Sticky Card, Yellow, Baited Trap"
     },
     {
      "code": "203",
      "name": "Stink Bug Trap, Great Lakes, IPM-SBTL"
     },
     {
      "code": "21",
      "name": "Texas (Hartstack) Trap"
     },
     {
      "code": "44",
      "name": "Vacuum Trap"
     },
     {
      "code": "33",
      "name": "Vaned Bucket Trap"
     },
     {
      "code": "35",
      "name": "Vaned Bucket Trap, with UV Light"
     },
     {
      "code": "39",
      "name": "Vernon Wireworm Trap"
     },
     {
      "code": "204",
      "name": "Whalon Modified Tedder\u2019s Trap, 2 ft height"
     },
     {
      "code": "22",
      "name": "Wing Trap Kit, Paper"
     },
     {
      "code": "27",
      "name": "Wing Trap Kit, Plastic"
     }
    ]
   },
   "name": "traptype",
   "length": 3,
   "alias": "Trap Type",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": true,
   "defaultValue": null,
   "domain": {
    "name": "Ailanthus_Altissima_cvd_luretype",
    "type": "codedValue",
    "codedValues": [
     {
      "code": "111",
      "name": "3Z-Lactone Lure"
     },
     {
      "code": "151",
      "name": "3Z-Lactone Lure; Z-3-hexenol Lure"
     },
     {
      "code": "141",
      "name": "Acrobasis nuxvorella Lure, Scentry Biologicals"
     },
     {
      "code": "53",
      "name": "Acrolepiopsis assectella Lure"
     },
     {
      "code": "1",
      "name": "Adoxophyes orana Lure"
     },
     {
      "code": "80",
      "name": "Agriotes lineatus Lure"
     },
     {
      "code": "81",
      "name": "Agriotes obscurus Lure"
     },
     {
      "code": "2",
      "name": "Alpha Pinene Lure"
     },
     {
      "code": "3",
      "name": "Alpha Pinene UHR Lure"
     },
     {
      "code": "103",
      "name": "Alpha Pinene UHR Lure; Ethanol Lure"
     },
     {
      "code": "105",
      "name": "Alpha Pinene UHR Lure; Ethanol Lure; Monochamol Lure"
     },
     {
      "code": "112",
      "name": "Ammonium Acetate Lure, Bait Enhancer"
     },
     {
      "code": "146",
      "name": "Ammonium Carbonate Lure"
     },
     {
      "code": "4",
      "name": "Archips xylosteanus Lure"
     },
     {
      "code": "72",
      "name": "Argyresthia pruniella Lure"
     },
     {
      "code": "126",
      "name": "Argyrotaenia Ijungiana Lure"
     },
     {
      "code": "142",
      "name": "Arizona 2017 Lure"
     },
     {
      "code": "5",
      "name": "Autographa gamma Lure"
     },
     {
      "code": "6",
      "name": "Beta Pinene UHR"
     },
     {
      "code": "50",
      "name": "Boll Weevil Lure - 2 Week"
     },
     {
      "code": "51",
      "name": "Boll Weevil Lure - 4 Week"
     },
     {
      "code": "79",
      "name": "Cactoblastis cactorum Lure"
     },
     {
      "code": "124",
      "name": "Callidiellum rufipenne Lure"
     },
     {
      "code": "127",
      "name": "Carposina niponensis Lure"
     },
     {
      "code": "113",
      "name": "Chilo partellus Lure"
     },
     {
      "code": "7",
      "name": "Chilo suppressalis Lure"
     },
     {
      "code": "120",
      "name": "Connartia nasturcium Lure, AlphaScents"
     },
     {
      "code": "74",
      "name": "Conogethes punctiferalis Lure"
     },
     {
      "code": "61",
      "name": "Cryptoblabes gnidiella Lure"
     },
     {
      "code": "8",
      "name": "Crysodeixis chalcites Lure"
     },
     {
      "code": "140",
      "name": "Cydia caryana Lure, Scentry Biologicals"
     },
     {
      "code": "136",
      "name": "Cydia splendana Lure, ISCA Technologies"
     },
     {
      "code": "150",
      "name": "Dark brown sugar"
     },
     {
      "code": "67",
      "name": "Darna pallivitta Lure"
     },
     {
      "code": "153",
      "name": "Dendroctonus frontalis Pheromone Lure"
     },
     {
      "code": "11",
      "name": "Dendrolimus pini - Dendrolimus sibiricus Lure"
     },
     {
      "code": "12",
      "name": "Dendrolimus punctatus Lure"
     },
     {
      "code": "60",
      "name": "Diprion pini Lure"
     },
     {
      "code": "118",
      "name": "Drosophila suzukii Lure, Trece Inc."
     },
     {
      "code": "119",
      "name": "Drosophila suzukii Lure, Trece Inc.; Food bait - Apple cider vinegar"
     },
     {
      "code": "14",
      "name": "Enarmonia formosana Lure"
     },
     {
      "code": "15",
      "name": "Epiphyas postvittana Lure"
     },
     {
      "code": "16",
      "name": "Ethanol Lure"
     },
     {
      "code": "109",
      "name": "Ethanol Lure; Geranyl Acetol Lure; Spruce Blend Lure"
     },
     {
      "code": "17",
      "name": "Eupoecilia ambiguella Lure"
     },
     {
      "code": "82",
      "name": "Food bait (general ant bait)"
     },
     {
      "code": "68",
      "name": "Food bait (Metamasius hemipterus)"
     },
     {
      "code": "69",
      "name": "Food bait (Oryctes rhinoceros)"
     },
     {
      "code": "70",
      "name": "Food bait (Rhabdoscelus obscurus)"
     },
     {
      "code": "22",
      "name": "Food bait (Rhynchophorus spp.)"
     },
     {
      "code": "117",
      "name": "Food bait - Apple cider vinegar"
     },
     {
      "code": "116",
      "name": "Food bait - Sugar solution"
     },
     {
      "code": "85",
      "name": "Fruit Fly, Cue Lure"
     },
     {
      "code": "86",
      "name": "Fruit Fly, Cue Solid Lure, Plug"
     },
     {
      "code": "46",
      "name": "Fruit Fly, Methyl Eugenol Lure"
     },
     {
      "code": "87",
      "name": "Fruit Fly, Methyl Eugenol Solid Lure, Wafer"
     },
     {
      "code": "84",
      "name": "Fruit Fly, Solid Lure, 2 Component"
     },
     {
      "code": "89",
      "name": "Fruit Fly, Solid Lure, 3 Component"
     },
     {
      "code": "88",
      "name": "Fruit Fly, Tri Med Lure"
     },
     {
      "code": "18",
      "name": "Geranyl Acetol Lure"
     },
     {
      "code": "10",
      "name": "Grapholita funebrana Lure"
     },
     {
      "code": "143",
      "name": "Grapholita molesta Lure, Scentry Biologicals"
     },
     {
      "code": "75",
      "name": "Gymnandrosoma aurantianum Lure"
     },
     {
      "code": "19",
      "name": "Gypsy Moth Laminate Lure"
     },
     {
      "code": "20",
      "name": "Gypsy Moth String Lure"
     },
     {
      "code": "121",
      "name": "Halyomorpha halys Lure, AlphaScents"
     },
     {
      "code": "152",
      "name": "Halyomorpha halys Lure, Trece Inc."
     },
     {
      "code": "21",
      "name": "Helicoverpa armigera Lure"
     },
     {
      "code": "26",
      "name": "Ips sp. Lure, 3 Dispenser"
     },
     {
      "code": "59",
      "name": "Khapra Beetle Wall Mount Trap Kit (included lure)"
     },
     {
      "code": "25",
      "name": "Leucoptera malifoliella Lure"
     },
     {
      "code": "149",
      "name": "Light brown sugar"
     },
     {
      "code": "24",
      "name": "Lineatin Lure"
     },
     {
      "code": "23",
      "name": "Lobesia botrana Lure"
     },
     {
      "code": "34",
      "name": "Lymantria mathura Lure"
     },
     {
      "code": "33",
      "name": "Lymantria monacha Lure, 1 Compound"
     },
     {
      "code": "32",
      "name": "Lymantria monacha Lure, 3 Compound"
     },
     {
      "code": "62",
      "name": "Lymantria xylina Lure"
     },
     {
      "code": "115",
      "name": "Mamestra brasicae Lure"
     },
     {
      "code": "83",
      "name": "Mamestra brassicae Lure"
     },
     {
      "code": "102",
      "name": "Manuka Oil and Pheobe Oil Lure; Z-3-hexenol Lure"
     },
     {
      "code": "31",
      "name": "Manuka Oil and Phoebe Oil Lure"
     },
     {
      "code": "30",
      "name": "Manuka Oil Lure"
     },
     {
      "code": "101",
      "name": "Manuka Oil Lure; Z-3-hexenol Lure"
     },
     {
      "code": "71",
      "name": "Megaplatypus mutatus Lure"
     },
     {
      "code": "63",
      "name": "Metamasius hemipterus Aggregation Lure"
     },
     {
      "code": "104",
      "name": "Metamasius hemipterus Aggregation Lure; Palm Weevil Lure, Ethyl Acetate; Food bait (Metamasius hemipterus)"
     },
     {
      "code": "64",
      "name": "Monochamol Lure"
     },
     {
      "code": "57",
      "name": "Neoleucinodes elegantalis Lure"
     },
     {
      "code": "0",
      "name": "No Lure"
     },
     {
      "code": "148",
      "name": "Olive branches and UHR ethanol"
     },
     {
      "code": "65",
      "name": "Oryctes rhinoceros Aggregation Lure"
     },
     {
      "code": "106",
      "name": "Oryctes rhinoceros Aggregation Lure; Food bait (Oryctes rhinoceros)"
     },
     {
      "code": "29",
      "name": "Ostrinia furnacalis Lure"
     },
     {
      "code": "125",
      "name": "Ostrinia nubilalis Lure"
     },
     {
      "code": "28",
      "name": "Palm Weevil Lure, Ethyl Acetate"
     },
     {
      "code": "41",
      "name": "Panolis flammea Lure"
     },
     {
      "code": "128",
      "name": "Paralobesia viteana Lure"
     },
     {
      "code": "52",
      "name": "Pink Bollworm Lure"
     },
     {
      "code": "27",
      "name": "Pityogenes chalcographus Lure"
     },
     {
      "code": "40",
      "name": "Pityogenes chalcographus Lure, 2 Dispenser"
     },
     {
      "code": "55",
      "name": "Pityophthorous juglandis Lure"
     },
     {
      "code": "147",
      "name": "Platynota stultana Lure"
     },
     {
      "code": "42",
      "name": "Platypus quercivorus Lure"
     },
     {
      "code": "77",
      "name": "Popillia japonica Lure"
     },
     {
      "code": "129",
      "name": "Prouella apospasta Lure"
     },
     {
      "code": "130",
      "name": "Prouella auraria Lure"
     },
     {
      "code": "131",
      "name": "Prouella chrysopteris Lure"
     },
     {
      "code": "132",
      "name": "Prouella triquetra Lure"
     },
     {
      "code": "66",
      "name": "Rhabdoscelus obscurus Aggregation Lure"
     },
     {
      "code": "107",
      "name": "Rhabdoscelus obscurus Aggregation Lure; Palm Weevil Lure, Ethyl Acetate; Food bait (Rhabdoscelus obscurus)"
     },
     {
      "code": "145",
      "name": "Rhyacionia buoliana Lure, Great Lakes IPM"
     },
     {
      "code": "39",
      "name": "Rhynchophorus ferrugineus Aggregation Lure"
     },
     {
      "code": "108",
      "name": "Rhynchophorus ferrugineus Aggregation Lure; Palm Weevil Lure, Ethyl Acetate; Food bait (Rhynchophorus spp.)"
     },
     {
      "code": "48",
      "name": "Rhynchophorus palmarum Aggregation Lure"
     },
     {
      "code": "110",
      "name": "Rhynchophorus palmarum Aggregation Lure; Palm Weevil Lure, Ethyl Acetate; Food bait (Rhynchophorus spp.)"
     },
     {
      "code": "133",
      "name": "Sesia rhynchiodes Lure"
     },
     {
      "code": "49",
      "name": "Sirex noctilio Lure"
     },
     {
      "code": "134",
      "name": "Sparganothis pilleriana Lure"
     },
     {
      "code": "43",
      "name": "Spodoptera littoralis Lure"
     },
     {
      "code": "44",
      "name": "Spodoptera litura Lure"
     },
     {
      "code": "38",
      "name": "Spruce Blend Lure"
     },
     {
      "code": "76",
      "name": "Stenoma catenifer Lure"
     },
     {
      "code": "56",
      "name": "Sticky Card, Yellow, Baited Lure"
     },
     {
      "code": "122",
      "name": "Stink bug Lure, AgBio"
     },
     {
      "code": "123",
      "name": "Synanthedon myopaeformis Lure, AlphaScents"
     },
     {
      "code": "135",
      "name": "Synanthedon quercus Lure"
     },
     {
      "code": "137",
      "name": "Synanthedon scitula Lure, Great Lakes IPM"
     },
     {
      "code": "138",
      "name": "Synanthedon vespiformis Lure, Great Lakes IPM"
     },
     {
      "code": "58",
      "name": "Tecia solanivora Lure"
     },
     {
      "code": "9",
      "name": "Thaumatotibia leucotreta Lure"
     },
     {
      "code": "114",
      "name": "Thaumetopoea pityocampa Lure"
     },
     {
      "code": "45",
      "name": "Thaumetopoea processionea Lure"
     },
     {
      "code": "37",
      "name": "Tortrix viridana Lure"
     },
     {
      "code": "78",
      "name": "Torula Yeast Pellet"
     },
     {
      "code": "139",
      "name": "Trichoferus Lure"
     },
     {
      "code": "36",
      "name": "Tuta absoluta Lure"
     },
     {
      "code": "73",
      "name": "UV Light, solar, small"
     },
     {
      "code": "54",
      "name": "Yponomeuta malinellus Lure"
     },
     {
      "code": "35",
      "name": "Z-3-hexenol Lure"
     }
    ]
   },
   "name": "luretype",
   "length": 3,
   "alias": "Lure Type",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": false,
   "defaultValue": null,
   "domain": null,
   "length": 255,
   "name": "created_user",
   "alias": "created_user",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": false,
   "defaultValue": null,
   "domain": null,
   "precision": 1,
   "length": 29,
   "name": "created_date",
   "alias": "created_date",
   "type": "esriFieldTypeDate"
  },
  {
   "nullable": true,
   "editable": false,
   "defaultValue": null,
   "domain": null,
   "length": 255,
   "name": "last_edited_user",
   "alias": "last_edited_user",
   "type": "esriFieldTypeString"
  },
  {
   "nullable": true,
   "editable": false,
   "defaultValue": null,
   "domain": null,
   "precision": 1,
   "length": 29,
   "name": "last_edited_date",
   "alias": "last_edited_date",
   "type": "esriFieldTypeDate"
  }
 ],
 "maxRecordCountFactor": 1,
 "dateFieldsTimeReference": {
  "respectsDaylightSaving": false,
  "timeZone": "UTC"
 },
 "supportsFieldDescriptionProperty": true,
 "hasM": false,
 "allowGeometryUpdates": true,
 "useStandardizedQueries": true,
 "globalIdField": "globalid",
 "description": "sitelocations",
 "syncCanReturnChanges": true,
 "supportsAsyncDelete": true,
 "supportedSpatialRelationships": [
  "esriSpatialRelIntersects",
  "esriSpatialRelContains",
  "esriSpatialRelCrosses",
  "esriSpatialRelEnvelopeIntersects",
  "esriSpatialRelOverlaps",
  "esriSpatialRelTouches",
  "esriSpatialRelWithin"
 ],
 "supportsRollbackOnFailureParameter": true,
 "isDataReplicaTracked": true,
 "standardMaxRecordCountNoGeometry": 16000,
 "supportsTruncate": true,
 "indexes": [
  {
   "name": "uuid_666",
   "isUnique": true,
   "description": "",
   "fields": "globalid",
   "isAscending": true
  },
  {
   "name": "a591_ix1",
   "isUnique": false,
   "description": "",
   "fields": "shape",
   "isAscending": true
  },
  {
   "name": "r666_sde_rowid_uk",
   "isUnique": false,
   "description": "",
   "fields": "objectid",
   "isAscending": true
  }
 ],
 "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
 "editFieldsInfo": {
  "editDateField": "last_edited_date",
  "editorField": "last_edited_user",
  "creationDateField": "created_date",
  "creatorField": "created_user"
 },
 "minScale": 0,
 "hasAttachments": false,
 "advancedQueryCapabilities": {
  "supportsSqlExpression": true,
  "supportsQueryWithResultType": true,
  "supportsQueryRelatedPagination": true,
  "supportsQueryWithCacheHint": false,
  "supportsQueryWithDatumTransformation": true,
  "supportsQueryNumericBins": false,
  "supportsCurrentUserQueries": true,
  "supportsQueryAttachmentsWithReturnUrl": true,
  "supportsQueryDateBins": false,
  "supportsQueryWithLodSR": true,
  "supportsPaginationOnAggregatedQueries": true,
  "supportsPagination": true,
  "supportsMaxRecordCountFactor": true,
  "supportsStatistics": true,
  "supportsOrderBy": true,
  "supportsQueryWithDistance": true,
  "supportsLod": true,
  "supportsCountDistinct": true,
  "supportsAdvancedQueryRelated": true,
  "supportsQueryAttachments": true,
  "supportsReturningQueryExtent": true,
  "supportsQueryAttachmentsCountOnly": true,
  "supportsOrderByOnlyOnLayerFields": false,
  "supportsOutFieldSqlExpression": true,
  "supportsTopFeaturesQuery": true,
  "supportsReturningGeometryEnvelope": false,
  "supportsDistinct": true,
  "supportsReturningGeometryCentroid": false,
  "supportsQueryAnalytic": true,
  "supportsPercentileStatistics": true,
  "supportsHavingClause": true
 },
 "supportsValidateSql": true,
 "serviceItemId": "324717ac1b2f447ea995b1a3330a5261",
 "supportsValidateSQL": true,
 "allowUpdateWithoutMValues": true,
 "supportsCoordinatesQuantization": true,
 "types": [
  {
   "templates": [
    {
     "name": "Negative",
     "description": "",
     "drawingTool": "esriFeatureEditToolPoint",
     "prototype": {
      "attributes": {
       "commodity": null,
       "stateprov": null,
       "city": null,
       "latitude": null,
       "county": null,
       "program": null,
       "targetsci": null,
       "sitetype": null,
       "area0": null,
       "estdate": null,
       "traptype": null,
       "totacres": null,
       "host": null,
       "sitename": null,
       "siteid": null,
       "longitude": null,
       "peststatus": "Negative",
       "address": null,
       "agency": null,
       "trapid": null,
       "activesite": null,
       "zipcode": null,
       "luretype": null,
       "numtraps": null,
       "targetcom": null,
       "surveytype": null,
       "trapidalt": null
      }
     }
    }
   ],
   "name": "Negative",
   "domains": {
    "luretype": {"type": "inherited"},
    "peststatus": {"type": "inherited"},
    "commodity": {"type": "inherited"},
    "traptype": {"type": "inherited"},
    "stateprov": {"type": "inherited"},
    "agency": {"type": "inherited"},
    "surveytype": {"type": "inherited"},
    "county": {"type": "inherited"},
    "program": {"type": "inherited"},
    "targetsci": {"type": "inherited"},
    "sitetype": {"type": "inherited"},
    "activesite": {"type": "inherited"}
   },
   "id": "Negative"
  },
  {
   "templates": [
    {
     "name": "Suspected",
     "description": "",
     "drawingTool": "esriFeatureEditToolPoint",
     "prototype": {
      "attributes": {
       "commodity": null,
       "stateprov": null,
       "city": null,
       "latitude": null,
       "county": null,
       "program": null,
       "targetsci": null,
       "sitetype": null,
       "area0": null,
       "estdate": null,
       "traptype": null,
       "totacres": null,
       "host": null,
       "sitename": null,
       "siteid": null,
       "longitude": null,
       "peststatus": "Suspect",
       "address": null,
       "agency": null,
       "trapid": null,
       "activesite": null,
       "zipcode": null,
       "luretype": null,
       "numtraps": null,
       "targetcom": null,
       "surveytype": null,
       "trapidalt": null
      }
     }
    }
   ],
   "name": "Suspect",
   "domains": {
    "luretype": {"type": "inherited"},
    "peststatus": {"type": "inherited"},
    "commodity": {"type": "inherited"},
    "traptype": {"type": "inherited"},
    "stateprov": {"type": "inherited"},
    "agency": {"type": "inherited"},
    "surveytype": {"type": "inherited"},
    "county": {"type": "inherited"},
    "program": {"type": "inherited"},
    "targetsci": {"type": "inherited"},
    "sitetype": {"type": "inherited"},
    "activesite": {"type": "inherited"}
   },
   "id": "Suspect"
  },
  {
   "templates": [
    {
     "name": "Highly Suspected",
     "description": "",
     "drawingTool": "esriFeatureEditToolPoint",
     "prototype": {
      "attributes": {
       "commodity": null,
       "stateprov": null,
       "city": null,
       "latitude": null,
       "county": null,
       "program": null,
       "targetsci": null,
       "sitetype": null,
       "area0": null,
       "estdate": null,
       "traptype": null,
       "totacres": null,
       "host": null,
       "sitename": null,
       "siteid": null,
       "longitude": null,
       "peststatus": "HighSuspect",
       "address": null,
       "agency": null,
       "trapid": null,
       "activesite": null,
       "zipcode": null,
       "luretype": null,
       "numtraps": null,
       "targetcom": null,
       "surveytype": null,
       "trapidalt": null
      }
     }
    }
   ],
   "name": "HighSuspect",
   "domains": {
    "luretype": {"type": "inherited"},
    "peststatus": {"type": "inherited"},
    "commodity": {"type": "inherited"},
    "traptype": {"type": "inherited"},
    "stateprov": {"type": "inherited"},
    "agency": {"type": "inherited"},
    "surveytype": {"type": "inherited"},
    "county": {"type": "inherited"},
    "program": {"type": "inherited"},
    "targetsci": {"type": "inherited"},
    "sitetype": {"type": "inherited"},
    "activesite": {"type": "inherited"}
   },
   "id": "HighSuspect"
  },
  {
   "templates": [
    {
     "name": "Positive",
     "description": "",
     "drawingTool": "esriFeatureEditToolPoint",
     "prototype": {
      "attributes": {
       "commodity": null,
       "stateprov": null,
       "city": null,
       "latitude": null,
       "county": null,
       "program": null,
       "targetsci": null,
       "sitetype": null,
       "area0": null,
       "estdate": null,
       "traptype": null,
       "totacres": null,
       "host": null,
       "sitename": null,
       "siteid": null,
       "longitude": null,
       "peststatus": "Positive",
       "address": null,
       "agency": null,
       "trapid": null,
       "activesite": null,
       "zipcode": null,
       "luretype": null,
       "numtraps": null,
       "targetcom": null,
       "surveytype": null,
       "trapidalt": null
      }
     }
    }
   ],
   "name": "Positive",
   "domains": {
    "luretype": {"type": "inherited"},
    "peststatus": {"type": "inherited"},
    "commodity": {"type": "inherited"},
    "traptype": {"type": "inherited"},
    "stateprov": {"type": "inherited"},
    "agency": {"type": "inherited"},
    "surveytype": {"type": "inherited"},
    "county": {"type": "inherited"},
    "program": {"type": "inherited"},
    "targetsci": {"type": "inherited"},
    "sitetype": {"type": "inherited"},
    "activesite": {"type": "inherited"}
   },
   "id": "Positive"
  }
 ],
 "capabilities": "Query,Create,Update,Delete,Editing,Sync,Uploads",
 "maxScale": 0,
 "supportsAppend": true,
 "supportsExceedsLimitStatistics": true,
 "defaultVisibility": true,
 "advancedQueryAnalyticCapabilities": {
  "supportsAsync": true,
  "supportsLinearRegression": true,
  "supportsPercentileAnalytic": false
 },
 "hasMetadata": true,
 "supportedAppendFormats": "shapefile,geojson,csv,featureCollection,excel,jsonl",
 "uniqueIdField": {
  "isSystemMaintained": true,
  "name": "objectid"
 },
 "tileMaxRecordCount": 4000,
 "typeIdField": "peststatus",
 "supportsASyncCalculate": true,
 "supportedQueryFormats": "JSON, geoJSON, PBF",
 "sqlParserVersion": "PG_11.2.0",
 "drawingInfo": {
  "renderer": {
   "field1": "peststatus",
   "uniqueValueInfos": [
    {
     "symbol": {
      "imageData": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA3xJREFUSIm1lktoG1cUhn/NU8qVZDnSiEZu6oJpNi2CNJuQhdeNyWxk/IBSEKKW2iaY0EV3haSYrrwookkqRQkOScBqEm8UkmzrRSoKbsBYUGzSOhH2gBtHSuSp5Hl2Yc9YT0sUenaac/g/nf+cuXcY/M/B9FDDRpPiKd5Nwg4TIU3RWMM0N/kjVP5a9N7SfwZEZkYGfUdd5yiGipN+V5hmKNAsDZqhoGsGapVdTKXHXvGEX/jx0zsXAKg9AxKZcVE3zBmvQMKk3wXOxbbUeAUCXTMCcqkan0qPRRRFH711YWGxK+DznyITHOHmvQKB08Mf1j3e7RsE+oAX7j8D2y/Lv0z//FkiOX473RGQyIyLHOHm/e/5QDPUoeIAcFI4Aw/Xh6ycRnDIj63n26loUlyem87lWwCRmZHBfVt6Enezffg4eAYAcIwchyQXERzyY6Og5QAILQDfUdc5r0DC3WyxYkd9AwCQ5CIkuQgAoBkKHoEEYldHz9/86sGVegC7vy0NIsfIcVuk/pn1+9F6tqUrPWig8rd8CcABIJoUT5F+V7h5W2yPVw/m9oHvI4y8P4Hs6nX8vvXUhg4PnIUkF7G48RhODx+IJsXTc9O5PAMAvJuEm31v53F9FxdPfofs6nUAwMSJqYZOWScD7zu+MIA9gMNEiGbprh4DwFp5BcMDnzRYaIU9C5bGP69rIdsiTdFYq4NuHgPAjcIsJk7EG4QfrWdRUd7uARgKmqKxNsAwzU1dM3ryeK/mQ2RWZuHhvHVdHcxA1wywhNm0AfwRKl+r7MIrkJ487pavVXYBQ8/bgGvRe0tfzE2+0jUj0DzM5rlYNnTKK1UV1crucia+d9LaL5ppmAtyqRpfY1baery48QRr5ZWOM7DycqkKmqFaj4pULJuYSo9FnG4uIKGIH559i+GBs9hR3+BGYbbhn0py+7xSVSGXakupWPbrFgAAqLWauP2y/GtwyG+fR9bmdAorr1RVlKUKYBiXAchtAXPTuXzi5mRi6/l2KjjkP1S4Pizx18Xy5N1vHubqcy33QSo2n44mxeWNgpb7TX4aCA2EOgoXpGdw7HDY+qu0BMO43CzeFmB1AkCIXR09v7r+xyWnhw+wTqblynxRkZahmw8zX97/HnW2dAVYsX/kXokmxdO8m4TVmspSDkfIuvStVTwsevmqsDrKdy1sE/8CObq0yFXpFqQAAAAASUVORK5CYII=",
      "yoffset": 0,
      "xoffset": 0,
      "width": 18,
      "angle": 0,
      "type": "esriPMS",
      "contentType": "image/png",
      "url": "81583d89-4ca6-4066-8d21-e92a1e7d0b23",
      "height": 18
     },
     "label": "Negative",
     "value": "Negative"
    },
    {
     "symbol": {
      "imageData": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAwBJREFUSIm1lr9LG2EYxz9iTgwxGuIlqXeCLYRCQbKktBlKoXSTpC0WrFDaqSaDnfoPNIJ0cnXQTBUC6uDQSFaxCIbCLSIUJEOwmkq0IaaNiV6MHS4/Ti+aUOgXjuPueXk+93zf933eM/GfZWpjjBCP4LX34em4QDo9Qzi/IG3uJuEbQ/lnQHSGIcmJX+gk6LDj6TKBIGiXqkIuDxtRjnp7WPE85z2gtg3YXCJwXmZaduJx9IPFbBwju0BVETNZghtRRk+LvHz6jq8tAeufeWU1syi7wNZ7Q+2AYPUiW8HWq4g7Kda/rxK652f+WsDmEgGrmcW7tzUrWsoWBJOEpRRg2A3bSebiEbZGJkgYANEZhs7LTMuuNpObJA0A0O1FQGHYDSdFYoDDAJCc+GUnnla21FVOa/eSol1oHyY7EdcWmHzyllk9QBA6CTr6ryTp9jaS6N/Vng9ChqpkV5r9DGHQAeIRvA47HsNqqXrMXqDxricAt+Zg7xnk5htQMQwlBaEcxmZFjEfwjUyQMAHY+7R1fvVr9B4bqnDvaxCAwS+XKrWY4c4AHqgCOi6QDBPbxGMA/sRA/NgA6aWbi0wWqW7R6RlCHdDCYwBS92EwdjnxQQjKP+uA0zOEOuD8grRa2+gtPNbG+DWIaUBXVTV+FEZVwWImXQeYu0nk8tr2rye8weNW8Vwe1Iq22UwAvjGUb8scqSqicHUy9Sqn6zZcFy8UIfebrUevtU7bWDsVVjJZgrIQa+7x0ZRmBdwYP/wFXZ1NWsWDcUIbUUZtvYgWFEhKmq/ltJZQr1LzeKEImSzKw3E+GAAA+RMCOyk2h926flRbOdepGi8UIbUHFZgCCk0BIxMkEsuEtpPMDbuhnZ6nT578wfiLSWL6mOE88I0xH4+wdVIkJh/HRFmWrgUVDmMcHktkdlEqMHU1eVNArRLAsbagTO7vKmGbFdFiNh6Zud/KVqWirD5+wyd0trQE1FRtubPxCD57H55iCaGzA6l26NeW4k1q56+iVlGi5cAm+guMZzhL8KcFYAAAAABJRU5ErkJggg==",
      "yoffset": 0,
      "xoffset": 0,
      "width": 18,
      "angle": 0,
      "type": "esriPMS",
      "contentType": "image/png",
      "url": "39689e99-8149-49ab-aaa5-01e968e983ed",
      "height": 18
     },
     "label": "Suspected",
     "value": "Suspect"
    },
    {
     "symbol": {
      "imageData": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAzJJREFUSIm1lr9rG2cYxz9Id7J1V1kqPmP51BDook1g5CEUAh0agsEyxRmqrUNAGtJJS4pNGhnHLRnqyRnsv+AmE3wlLaRLW9pqOQzeDG0wuFZrekqsqj5XOd1dB+lU/bREId/t3ufh+32f7/O873sCbxjCGDmiViAdlUnhodZtRBfKcojS7Q2M/y2wfZfrqsKSECCnREiJQRAFEILQcKBqgb6KGZlk7/3P+ASwxxZ4tkam4fJoLkZqOgLSRH9OPAa2g1KpkdNXWXld586dL/l+pMDTT/lInkSLxyAqXVE7IM2mkWZhKmwoL8747odN8jfX2B0q8GyNjDyJ9u4siMGryQHCyRwBScU2MyQTcHTKjlbgMLtFqU9g+y7XGy6P4rHxyAOSSjiZA0BU0mAaJBNweYwOzPQJqApLczFSo2zx4VplAGzTwDabwyQGIR5F2bvPvZXHPOkUEIUAuelIN4mopNsknWv+918/5vuqir9d5o8qRegQ0AqklQip3mnxPT5/nmmvTVzLEHlvh/Nvl7k82m2LyvNFGqaBe1BkKoyiFbiR3aIkAETl5pz37qbT494qZrKnnD9fBiB2ax+ARitHCkFimhS0BPBQxZ6BHeQxQP1ER55/2GWhj3YvBDBrqG2L6jaiEBzPY4CX+wvEPtC7iGs/5XGs34Hmaa/biG0BF8oNZzyPAULXlqjsLxCU5jqqasb/PijScECaoNwWkEOUqlbz+I/j8ah41QLPax42AeD2BsY3DzBtB6W3mZ1wrDJuy4ZhcasOVYvD5S+aN227tZ7LXqVGTjzRB3p8cbBO/UQf2gM/XqmBGBhwVSxuktdXWZkKo0imwZ+aylvzRRyrzMv9ha6d2kPiVh3MGsbiJoU+AYCLf8i8OOPnZOK/+yjYmpxh8ONWHU4q4HmsAxcDBbJblL5+QP7olJ1k4kreLvjkx2dkP95G74z1vQeLG+xqBQ4vj9HfCepKQh1ewatfdF45KqdlDM9jvZd8oIBfCTCzd9+499uvRnEqjCKF+p/MqmUcuq7x1YeP+ZwOW0YK+GhduU+0AjeiMqnL14gBUP1H3x/FqzDOX4VfUWlk4gD8CxhMcBgRNJ/hAAAAAElFTkSuQmCC",
      "yoffset": 0,
      "xoffset": 0,
      "width": 18,
      "angle": 0,
      "type": "esriPMS",
      "contentType": "image/png",
      "url": "993c1743-2fd9-4bc0-abc3-0d6d2e14f1ce",
      "height": 18
     },
     "label": "Highly Suspected",
     "value": "HighSuspect"
    },
    {
     "symbol": {
      "imageData": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAxVJREFUSIm1lj9oE2EYxn+X3LXRpGjLnegV/ENDrAoBSQcnV5fGoYIKdZAOCdpSioOTYArBWQIWE4o4FocOnovgoF3McgrBkBJbLEpTsMUKMW1ML3cO6cX8bYLgs933vrzP9zzv+33fifxniF3kSDEvAY+I3wK1ZCJZkDvsIHl7Gf2fCaJnODUgMSpCqF/ELwogCSAKYFiQL0PCx5bbweL4MlPAXtcE88METZOoIuHvF+GQozlHkcCwkLcNQgkfYyWLa1OfWepI8NTHDbfAguKCPucB2oEj5wMcATxpXf76m3cvLhC+nibRlmB+mKBbYOFkb8WKTlCuheiRVQozQYZcsFokHvOSml4h2UQQPcMp0ySquLorLikqx8ZCALjPBShkdIZckN5BA5QmggGJUUXC38kWG3ubOQAKGZ1CpjJMogCKhDznY/Julie1BNL+tNTBfS5QLVK7Zn+vRcPNqr7n2NwjAjUEMS+BfhF/47TYHmdngtW1o5eDnH4QJztzle+LiSrpYDhCIaOzHo/Q50SOebk0vUJSBPDsz3nTbho8rlVx8fU62ZmrAPgev6xT6nLA8V78sE9ggSo1ELTyGODnksZg+GGdhTbsPEmAHwZq1aKSiWQr6OQxQHp8BN9jra7wWjRMaWsDqDS7ZCJVCSzIGVZ3HldyRvl0a4Qe+USNqr89MCxwO8lVCQ47SObLlePfjced4vkymFblsIkAt5fRn59ly7CQG5vZ2BfbhnbxXRPyZVKhbOWmrU6+abG4bRASl7SWHq/HZ/m5pLXtgR3fNkCkxVUxkSWc8DHmcSKT0fl4RWUwHGFvM0d6fKRup4U28V0Ttg30iSz3mggAiibBr795P1RzH9mT0w52fNeEjRKYArNAoSXB9ArJZ8OEV4vEh1wH1q2DXfxbiZv3V9FqY03vwcQyiZiXVHoHrfBGkwfV9go23mr86lf5UkQ3BWYbi7cksJUAyhz65FpKj/Q5kV2O5icz/0FPldFf3cnyiBpbOhLY2L9yn8S8XPKI+IsmkgCq/ejbo3gQuvmrsBUlOya2wB/0tWyUCPJFGAAAAABJRU5ErkJggg==",
      "yoffset": 0,
      "xoffset": 0,
      "width": 18,
      "angle": 0,
      "type": "esriPMS",
      "contentType": "image/png",
      "url": "036017b5-6dce-456b-8b86-a4b7ce057d34",
      "height": 18
     },
     "label": "Positive",
     "value": "Positive"
    }
   ],
   "fieldDelimiter": ",",
   "type": "uniqueValue"
  },
  "transparency": 0
 },
 "copyrightText": "",
 "geometryType": "esriGeometryPoint",
 "supportsLayerOverrides": true
}