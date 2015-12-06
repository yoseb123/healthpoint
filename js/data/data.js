'use strict';

module.exports = {
    'hospitals': {
          "meta" : {
            "view" : {
              "id" : "zzzz-zzzz",
              "name" : "Hospital General Information",
              "averageRating" : 0,
              "category" : "Hospital Compare",
              "description" : "A list of all Hospitals that have been registered with Medicare. The list includes addresses, phone numbers, and hospital type.",
              "displayType" : "table",
              "downloadCount" : 0,
              "indexUpdatedAt" : 1444269637,
              "newBackend" : false,
              "numberOfComments" : 0,
              "oid" : 0,
              "publicationAppendEnabled" : false,
              "publicationStage" : "unpublished",
              "rowsUpdatedAt" : 1441325917,
              "rowsUpdatedBy" : "drs7-75yr",
              "tableId" : 4211443,
              "totalTimesRated" : 0,
              "viewCount" : 0,
              "viewType" : "tabular",
              "columns" : [ {
                "id" : -1,
                "name" : "sid",
                "dataTypeName" : "meta_data",
                "fieldName" : ":sid",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "id",
                "dataTypeName" : "meta_data",
                "fieldName" : ":id",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "position",
                "dataTypeName" : "meta_data",
                "fieldName" : ":position",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "created_at",
                "dataTypeName" : "meta_data",
                "fieldName" : ":created_at",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "created_meta",
                "dataTypeName" : "meta_data",
                "fieldName" : ":created_meta",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "updated_at",
                "dataTypeName" : "meta_data",
                "fieldName" : ":updated_at",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "updated_meta",
                "dataTypeName" : "meta_data",
                "fieldName" : ":updated_meta",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : -1,
                "name" : "meta",
                "dataTypeName" : "meta_data",
                "fieldName" : ":meta",
                "position" : 0,
                "renderTypeName" : "meta_data",
                "format" : { }
              }, {
                "id" : 220539467,
                "name" : "Provider ID",
                "dataTypeName" : "text",
                "fieldName" : "provider_id",
                "position" : 1,
                "renderTypeName" : "text",
                "tableColumnId" : 19722602,
                "width" : 142,
                "format" : { }
              }, {
                "id" : 220539468,
                "name" : "Hospital Name",
                "dataTypeName" : "text",
                "fieldName" : "hospital_name",
                "position" : 2,
                "renderTypeName" : "text",
                "tableColumnId" : 19722603,
                "width" : 256,
                "format" : { }
              }, {
                "id" : 220539469,
                "name" : "Address",
                "dataTypeName" : "text",
                "fieldName" : "address",
                "position" : 3,
                "renderTypeName" : "text",
                "tableColumnId" : 19722604,
                "width" : 184,
                "format" : { }
              }, {
                "id" : 220539470,
                "name" : "City",
                "dataTypeName" : "text",
                "fieldName" : "city",
                "position" : 4,
                "renderTypeName" : "text",
                "tableColumnId" : 19722605,
                "width" : 148,
                "format" : { }
              }, {
                "id" : 220539471,
                "name" : "State",
                "dataTypeName" : "text",
                "fieldName" : "state",
                "position" : 5,
                "renderTypeName" : "text",
                "tableColumnId" : 19722606,
                "width" : 111,
                "format" : { }
              }, {
                "id" : 220539472,
                "name" : "ZIP Code",
                "dataTypeName" : "text",
                "fieldName" : "zip_code",
                "position" : 6,
                "renderTypeName" : "text",
                "tableColumnId" : 19722607,
                "width" : 133,
                "format" : { }
              }, {
                "id" : 220539474,
                "name" : "Phone Number",
                "dataTypeName" : "phone",
                "fieldName" : "phone_number",
                "position" : 8,
                "renderTypeName" : "phone",
                "tableColumnId" : 19722609,
                "width" : 157,
                "format" : {
                  "align" : "left"
                },
                "subColumnTypes" : [ "phone_number", "phone_type" ]
              }, {
                "id" : 220539477,
                "name" : "Emergency Services",
                "dataTypeName" : "checkbox",
                "fieldName" : "emergency_services",
                "position" : 11,
                "renderTypeName" : "checkbox",
                "tableColumnId" : 19722612,
                "width" : 198,
                "format" : { }
              }, {
                "id" : 220539478,
                "name" : "Location",
                "dataTypeName" : "location",
                "fieldName" : "location",
                "position" : 12,
                "renderTypeName" : "location",
                "tableColumnId" : 19722613,
                "width" : 196,
                "format" : {
                  "align" : "left",
                  "view" : "coords"
                },
                "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
              } ],
              "grants" : [ {
                "inherited" : true,
                "type" : "viewer",
                "flags" : [ "public" ]
              } ],
              "metadata" : {
                "renderTypeConfig" : {
                  "visible" : {
                    "table" : true
                  }
                },
                "availableDisplayTypes" : [ "table", "fatrow", "page" ],
                "jsonQuery" : {
                  "where" : {
                    "value" : "WA",
                    "operator" : "EQUALS",
                    "columnFieldName" : "state"
                  }
                },
                "rdfSubject" : "0"
              },
              "query" : {
                "filterCondition" : {
                  "type" : "operator",
                  "value" : "AND",
                  "children" : [ {
                    "type" : "operator",
                    "value" : "EQUALS",
                    "children" : [ {
                      "columnId" : 220539471,
                      "type" : "column"
                    }, {
                      "type" : "literal",
                      "value" : "WA"
                    } ],
                    "metadata" : {
                      "unifiedVersion" : 2
                    }
                  } ],
                  "metadata" : {
                    "unifiedVersion" : 2
                  }
                }
              },
              "rights" : [ "read" ],
              "tableAuthor" : {
                "id" : "drs7-75yr",
                "displayName" : "cms",
                "profileImageUrlLarge" : "/api/users/drs7-75yr/profile_images/LARGE",
                "profileImageUrlMedium" : "/api/users/drs7-75yr/profile_images/THUMB",
                "profileImageUrlSmall" : "/api/users/drs7-75yr/profile_images/TINY",
                "roleName" : "administrator",
                "screenName" : "cms",
                "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets", "edit_pages", "create_pages", "view_goals", "view_dashboards", "edit_goals", "edit_dashboards", "create_dashboards" ]
              },
              "tags" : [ "hospital compare", "hospital list", "emergency services", "hospital type", "general information" ],
              "viewFilters" : {
                "type" : "operator",
                "value" : "AND",
                "children" : [ {
                  "type" : "operator",
                  "value" : "EQUALS",
                  "children" : [ {
                    "columnId" : 220539471,
                    "type" : "column"
                  }, {
                    "type" : "literal",
                    "value" : "WA"
                  } ],
                  "metadata" : {
                    "unifiedVersion" : 2
                  }
                } ],
                "metadata" : {
                  "unifiedVersion" : 2
                }
              },
              "flags" : [ "unsaved" ]
            }
          },
          "data" : [ [ 4436, "0F59ADD4-9AAE-49D6-B9E9-D13076F8961D", 4436, 1441325849, "391130", 1441325890, "386561", null, "500001", "NORTHWEST HOSPITAL", "1550 NORTH 115TH STREET", "SEATTLE", "WA", "98133", [ "2063681700", null ], true, [ "{\"address\":\"1550 NORTH 115TH STREET\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98133\"}", "47.712261", "-122.335522", null, false ] ]
        , [ 4437, "4F34F607-B65D-48DD-A2B9-3FA2C317C04A", 4437, 1441325849, "391130", 1441325901, "386561", null, "500002", "PROVIDENCE ST MARY MEDICAL CENTER", "401 W POPLAR ST", "WALLA WALLA", "WA", "99362", [ "5095225900", null ], true, [ "{\"address\":\"401 W POPLAR ST\",\"city\":\"WALLA WALLA\",\"state\":\"WA\",\"zip\":\"99362\"}", "46.063771", "-118.341053", null, false ] ]
        , [ 4438, "0FC72071-2B80-42BD-B133-6FC187BAC549", 4438, 1441325849, "391130", 1441325890, "386561", null, "500003", "SKAGIT VALLEY HOSPITAL", "1415 KINCAID STREET", "MOUNT VERNON", "WA", "98274", [ "3604244111", null ], true, [ "{\"address\":\"1415 KINCAID STREET\",\"city\":\"MOUNT VERNON\",\"state\":\"WA\",\"zip\":\"98274\"}", "48.417415", "-122.323914", null, false ] ]
        , [ 4439, "8005A624-F0AD-4CD2-8784-92A0562EFD87", 4439, 1441325849, "391130", 1441325906, "386561", null, "500005", "VIRGINIA MASON MEDICAL CENTER", "925 SENECA ST", "SEATTLE", "WA", "98101", [ "2062236867", null ], true, [ "{\"address\":\"925 SENECA ST\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98101\"}", "47.610176", "-122.327819", null, false ] ]
        , [ 4440, "3014FB90-D3FB-409B-973A-A15CFA1EE076", 4440, 1441325849, "391130", 1441325893, "386561", null, "500007", "ISLAND HOSPITAL", "1211  24TH STREET", "ANACORTES", "WA", "98221", [ "3602991300", null ], true, [ "{\"address\":\"1211 24TH STREET\",\"city\":\"ANACORTES\",\"state\":\"WA\",\"zip\":\"98221\"}", "48.502816", "-122.616702", null, false ] ]
        , [ 4441, "4C27DC81-E6B7-454E-90EF-6E2678688E7E", 4441, 1441325849, "391130", 1441325901, "386561", null, "500008", "UNIVERSITY OF WASHINGTON MEDICAL CTR", "1959 NE PACIFIC ST  BOX 356151", "SEATTLE", "WA", "98195", [ "2065983300", null ], true, [ "{\"address\":\"1959 NE PACIFIC ST BOX 356151\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98195\"}", "47.65064", "-122.307742", null, false ] ]
        , [ 4442, "94C0AEB5-953A-4F4E-B245-9BC8C8B502DB", 4442, 1441325849, "391130", 1441325907, "386561", null, "500011", "HIGHLINE MEDICAL CENTER", "16251 SYLVESTER ROAD SW", "BURIEN", "WA", "98166", [ "2062449970", null ], true, [ "{\"address\":\"16251 SYLVESTER ROAD SW\",\"city\":\"BURIEN\",\"state\":\"WA\",\"zip\":\"98166\"}", "47.456585", "-122.341623", null, false ] ]
        , [ 4443, "FA66F4FF-0324-4F63-B6CD-3C909D6459FA", 4443, 1441325849, "391130", 1441325916, "386561", null, "500012", "YAKIMA REGIONAL MEDICAL AND CARDIAC CENTER", "110 SOUTH NINTH AVE", "YAKIMA", "WA", "98902", [ "5095755102", null ], true, [ "{\"address\":\"110 SOUTH NINTH AVE\",\"city\":\"YAKIMA\",\"state\":\"WA\",\"zip\":\"98902\"}", "46.597628", "-120.520919", null, false ] ]
        , [ 4444, "10EEEB72-F6B3-4BBB-8133-484CDEEAFA7A", 4444, 1441325849, "391130", 1441325891, "386561", null, "500014", "PROVIDENCE REGIONAL MEDICAL CENTER EVERETT", "1321 COLBY AVENUE", "EVERETT", "WA", "98201", [ "4252612000", null ], true, [ "{\"address\":\"1321 COLBY AVENUE\",\"city\":\"EVERETT\",\"state\":\"WA\",\"zip\":\"98201\"}", "48.000086", "-122.207979", null, false ] ]
        , [ 4445, "B47B4F4E-B248-41C2-8558-245C2468230B", 4445, 1441325849, "391130", 1441325849, "391130", null, "500015", "MULTICARE AUBURN MEDICAL CENTER", "202 NORTH DIVISION STREET PLAZA ONE", "AUBURN", "WA", "98001", [ "2538337711", null ], true, [ "{\"address\":\"202 NORTH DIVISION STREET PLAZA ONE\",\"city\":\"AUBURN\",\"state\":\"WA\",\"zip\":\"98001\"}", null, null, null, true ] ]
        , [ 4446, "710C2069-5C7D-4715-B19F-C2B976BE7D5F", 4446, 1441325849, "391130", 1441325905, "386561", null, "500016", "CENTRAL WASHINGTON HOSPITAL", "1201 SOUTH MILLER STREET", "WENATCHEE", "WA", "98807", [ "5096621511", null ], true, [ "{\"address\":\"1201 SOUTH MILLER STREET\",\"city\":\"WENATCHEE\",\"state\":\"WA\",\"zip\":\"98807\"}", "47.407963", "-120.324593", null, false ] ]
        , [ 4447, "20DB0F39-ABD7-4A09-AD33-4A48C161E270", 4447, 1441325849, "391130", 1441325893, "386561", null, "500019", "PROVIDENCE CENTRALIA HOSPITAL", "914 S SCHEUBER ROAD", "CENTRALIA", "WA", "98531", [ "3607362803", null ], true, [ "{\"address\":\"914 S SCHEUBER ROAD\",\"city\":\"CENTRALIA\",\"state\":\"WA\",\"zip\":\"98531\"}", "46.712649", "-122.986991", null, false ] ]
        , [ 4448, "8BEC2BAE-34E2-4403-A81A-CDC8EE6CD3E7", 4448, 1441325849, "391130", 1441325907, "386561", null, "500021", "ST CLARE HOSPITAL", "11315 BRIDGEPORT WAY S W", "LAKEWOOD", "WA", "98499", [ "2535881711", null ], true, [ "{\"address\":\"11315 BRIDGEPORT WAY S W\",\"city\":\"LAKEWOOD\",\"state\":\"WA\",\"zip\":\"98499\"}", "47.153766", "-122.504488", null, false ] ]
        , [ 4449, "1D583A6D-4726-49FE-8F24-37D28556B49F", 4449, 1441325849, "391130", 1441325892, "386561", null, "500024", "PROVIDENCE ST PETER HOSPITAL", "413 LILLY ROAD NE", "OLYMPIA", "WA", "98506", [ "3604919480", null ], true, [ "{\"address\":\"413 LILLY ROAD NE\",\"city\":\"OLYMPIA\",\"state\":\"WA\",\"zip\":\"98506\"}", "47.051243", "-122.844374", null, false ] ]
        , [ 4450, "C9AEA4C6-D909-4D1B-B193-82250EF3071D", 4450, 1441325849, "391130", 1441325912, "386561", null, "500025", "SWEDISH MEDICAL CENTER / CHERRY HILL", "500 17TH AVENUE", "SEATTLE", "WA", "98122", [ "2063202000", null ], true, [ "{\"address\":\"500 17TH AVENUE\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98122\"}", "47.606569", "-122.310234", null, false ] ]
        , [ 4451, "32ED5C40-1DB6-459E-876A-A8D817D2E494", 4451, 1441325849, "391130", 1441325894, "386561", null, "500026", "SWEDISH EDMONDS HOSPITAL", "21601 76TH AVENUE WEST", "EDMONDS", "WA", "98026", [ "4256404000", null ], true, [ "{\"address\":\"21601 76TH AVENUE WEST\",\"city\":\"EDMONDS\",\"state\":\"WA\",\"zip\":\"98026\"}", "47.803284", "-122.335697", null, false ] ]
        , [ 4452, "50592AFE-1286-4E09-9800-47DCCD3424EE", 4452, 1441325849, "391130", 1441325901, "386561", null, "500027", "SWEDISH MEDICAL CENTER", "747 BROADWAY", "SEATTLE", "WA", "98122", [ "2063866000", null ], true, [ "{\"address\":\"747 BROADWAY\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98122\"}", "47.608112", "-122.320765", null, false ] ]
        , [ 4453, "43A83E04-CA29-43BA-94B0-3B17DECC379E", 4453, 1441325849, "391130", 1441325900, "386561", null, "500030", "PEACEHEALTH ST JOSEPH MEDICAL CENTER", "2901 SQUALICUM PARKWAY", "BELLINGHAM", "WA", "98225", [ "3607345400", null ], true, [ "{\"address\":\"2901 SQUALICUM PARKWAY\",\"city\":\"BELLINGHAM\",\"state\":\"WA\",\"zip\":\"98225\"}", "48.772264", "-122.474877", null, false ] ]
        , [ 4454, "B6E4AC1A-58B5-4FCC-974F-3F0DA39F28DC", 4454, 1441325849, "391130", 1441325911, "386561", null, "500031", "GRAYS HARBOR COMMUNITY HOSPITAL", "915 ANDERSON DRIVE", "ABERDEEN", "WA", "98520", [ "3605328330", null ], true, [ "{\"address\":\"915 ANDERSON DRIVE\",\"city\":\"ABERDEEN\",\"state\":\"WA\",\"zip\":\"98520\"}", "46.979658", "-123.846384", null, false ] ]
        , [ 4455, "3423781B-23AA-4593-86B9-DF155D841BB2", 4455, 1441325849, "391130", 1441325894, "386561", null, "500033", "SAMARITAN HOSPITAL", "801 EAST WHEELER ROAD", "MOSES LAKE", "WA", "98837", [ "5097655606", null ], true, [ "{\"address\":\"801 EAST WHEELER ROAD\",\"city\":\"MOSES LAKE\",\"state\":\"WA\",\"zip\":\"98837\"}", "47.131104", "-119.264196", null, false ] ]
        , [ 4456, "60FE3E0C-9EF6-4567-BA60-A718099A3926", 4456, 1441325849, "391130", 1441325901, "386561", null, "500036", "YAKIMA VALLEY MEMORIAL HOSPITAL", "2811 TIETON DRIVE", "YAKIMA", "WA", "98902", [ "5095758000", null ], true, [ "{\"address\":\"2811 TIETON DRIVE\",\"city\":\"YAKIMA\",\"state\":\"WA\",\"zip\":\"98902\"}", "46.592708", "-120.547439", null, false ] ]
        , [ 4457, "A5C38D98-295F-472A-9E05-9DE8E92FD392", 4457, 1441325849, "391130", 1441325910, "386561", null, "500037", "TOPPENISH COMMUNITY HOSPITAL", "502 W FOURTH AVE", "TOPPENISH", "WA", "98948", [ "5098651520", null ], true, [ "{\"address\":\"502 W FOURTH AVE\",\"city\":\"TOPPENISH\",\"state\":\"WA\",\"zip\":\"98948\"}", "46.371355", "-120.316651", null, false ] ]
        , [ 4458, "6A9E68AB-42B2-4B8A-8B3A-9ABCFE324A8D", 4458, 1441325849, "391130", 1441325902, "386561", null, "500039", "HARRISON MEMORIAL HOSPITAL", "2520 CHERRY AVENUE", "BREMERTON", "WA", "98310", [ "3603773911", null ], true, [ "{\"address\":\"2520 CHERRY AVENUE\",\"city\":\"BREMERTON\",\"state\":\"WA\",\"zip\":\"98310\"}", "47.583426", "-122.626046", null, false ] ]
        , [ 4459, "637F1119-A3E3-4D36-891B-05969305607C", 4459, 1441325849, "391130", 1441325901, "386561", null, "500041", "PEACHEALTH ST JOHN MEDICAL CENTER", "1615 DELAWARE STREET", "LONGVIEW", "WA", "98632", [ "3604142000", null ], true, [ "{\"address\":\"1615 DELAWARE STREET\",\"city\":\"LONGVIEW\",\"state\":\"WA\",\"zip\":\"98632\"}", "46.131054", "-122.941508", null, false ] ]
        , [ 4460, "A1624B77-D3DD-42AC-AB4F-C820DC9DE788", 4460, 1441325849, "391130", 1441325849, "391130", null, "500044", "DEACONESS HOSPITAL", "W 800 FIFTH AVENUE", "SPOKANE", "WA", "99210", [ "5094735800", null ], true, [ "{\"address\":\"W 800 FIFTH AVENUE\",\"city\":\"SPOKANE\",\"state\":\"WA\",\"zip\":\"99210\"}", null, null, null, true ] ]
        , [ 4461, "D267E84A-8E12-43FA-8B31-424FB1D4D6FC", 4461, 1441325849, "391130", 1441325912, "386561", null, "500049", "WALLA WALLA GENERAL HOSPITAL", "1025 S SECOND AVE", "WALLA WALLA", "WA", "99362", [ "5095250480", null ], true, [ "{\"address\":\"1025 S SECOND AVE\",\"city\":\"WALLA WALLA\",\"state\":\"WA\",\"zip\":\"99362\"}", "46.054089", "-118.331571", null, false ] ]
        , [ 4462, "481F3422-543B-49FD-81D5-88A970EC3758", 4462, 1441325849, "391130", 1441325900, "386561", null, "500050", "PEACEHEALTH SOUTHWEST MEDICAL CENTER", "400 NE MOTHER JOSEPH PLACE", "VANCOUVER", "WA", "98668", [ "3602562000", null ], true, [ "{\"address\":\"400 NE MOTHER JOSEPH PLACE\",\"city\":\"VANCOUVER\",\"state\":\"WA\",\"zip\":\"98668\"}", "45.623443", "-122.580644", null, false ] ]
        , [ 4463, "21546AB8-01B0-4DE1-AB8F-E7A5B03D8C9F", 4463, 1441325849, "391130", 1441325893, "386561", null, "500051", "OVERLAKE HOSPITAL MEDICAL CENTER", "1035-116TH AVE NE", "BELLEVUE", "WA", "98004", [ "4256885000", null ], true, [ "{\"address\":\"1035-116TH AVE NE\",\"city\":\"BELLEVUE\",\"state\":\"WA\",\"zip\":\"98004\"}", "47.619961", "-122.185641", null, false ] ]
        , [ 4464, "F067A2A1-5040-4EBD-AF29-E1B900C9D3D4", 4464, 1441325849, "391130", 1441325916, "386561", null, "500052", "GROUP HEALTH CENTRAL HOSPITAL", "201 - 16TH AVENUE EAST", "SEATTLE", "WA", "98112", [ "2063263000", null ], true, [ "{\"address\":\"201 - 16TH AVENUE EAST\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98112\"}", "47.619731", "-122.311413", null, false ] ]
        , [ 4465, "D655A1CC-7EFA-49D6-9252-1434BB6370EC", 4465, 1441325849, "391130", 1441325912, "386561", null, "500053", "KENNEWICK GENERAL HOSPITAL", "900 SOUTH AUBURN STREET", "KENNEWICK", "WA", "99336", [ "5095866111", null ], true, [ "{\"address\":\"900 SOUTH AUBURN STREET\",\"city\":\"KENNEWICK\",\"state\":\"WA\",\"zip\":\"99336\"}", "46.199089", "-119.118462", null, false ] ]
        , [ 4466, "7C3E773B-2B29-477A-A683-AE32EFC1494A", 4466, 1441325849, "391130", 1441325906, "386561", null, "500054", "PROVIDENCE SACRED HEART MEDICAL CENTER", "101 WEST 8TH AVENUE", "SPOKANE", "WA", "99204", [ "5094743040", null ], true, [ "{\"address\":\"101 WEST 8TH AVENUE\",\"city\":\"SPOKANE\",\"state\":\"WA\",\"zip\":\"99204\"}", "47.648251", "-117.411879", null, false ] ]
        , [ 4467, "AC9DD099-2EB9-427F-B29A-B66A4A063843", 4467, 1441325849, "391130", 1441325911, "386561", null, "500058", "KADLEC REGIONAL MEDICAL CENTER", "888 SWIFT BLVD", "RICHLAND", "WA", "99352", [ "5099464611", null ], true, [ "{\"address\":\"888 SWIFT BLVD\",\"city\":\"RICHLAND\",\"state\":\"WA\",\"zip\":\"99352\"}", "46.280448", "-119.282199", null, false ] ]
        , [ 4468, "30C0BBA6-F44E-489F-9921-46F548544116", 4468, 1441325849, "391130", 1441325894, "386561", null, "500060", "CASCADE VALLEY HOSPITAL", "330 S STILLAGUAMISH AVE", "ARLINGTON", "WA", "98223", [ "3604352133", null ], true, [ "{\"address\":\"330 S STILLAGUAMISH AVE\",\"city\":\"ARLINGTON\",\"state\":\"WA\",\"zip\":\"98223\"}", "48.189355", "-122.11763", null, false ] ]
        , [ 4469, "50378A01-28BD-427E-841A-B1CD6405653C", 4469, 1441325849, "391130", 1441325901, "386561", null, "500064", "HARBORVIEW MEDICAL CENTER", "325 9TH AVENUE", "SEATTLE", "WA", "98104", [ "2067313000", null ], true, [ "{\"address\":\"325 9TH AVENUE\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98104\"}", "47.603598", "-122.322954", null, false ] ]
        , [ 4470, "25B3D97D-8E79-4B50-9890-CE8D18912A1C", 4470, 1441325849, "391130", 1441325893, "386561", null, "500072", "OLYMPIC MEDICAL CENTER", "939 CAROLINE ST", "PORT ANGELES", "WA", "98362", [ "3604177000", null ], true, [ "{\"address\":\"939 CAROLINE ST\",\"city\":\"PORT ANGELES\",\"state\":\"WA\",\"zip\":\"98362\"}", "48.114711", "-123.414281", null, false ] ]
        , [ 4471, "BC81D73D-4DF9-4F8B-8D20-3445600535F1", 4471, 1441325849, "391130", 1441325911, "386561", null, "500077", "PROVIDENCE HOLY FAMILY HOSPITAL", "5633 NORTH LIDGERWOOD", "SPOKANE", "WA", "99208", [ "5094822450", null ], true, [ "{\"address\":\"5633 NORTH LIDGERWOOD\",\"city\":\"SPOKANE\",\"state\":\"WA\",\"zip\":\"99208\"}", "47.709697", "-117.405904", null, false ] ]
        , [ 4472, "33CAC6CB-EED3-49C3-834E-F48F21FA0629", 4472, 1441325849, "391130", 1441325894, "386561", null, "500079", "MULTICARE GOOD SAMARITAN HOSPITAL", "401 15TH AVENUE SE", "PUYALLUP", "WA", "98372", [ "2536972102", null ], true, [ "{\"address\":\"401 15TH AVENUE SE\",\"city\":\"PUYALLUP\",\"state\":\"WA\",\"zip\":\"98372\"}", "47.177411", "-122.289468", null, false ] ]
        , [ 4473, "864FBF2F-E6A5-4AC7-BB00-8EBF05765F55", 4473, 1441325849, "391130", 1441325906, "386561", null, "500084", "VALLEY GENERAL HOSPITAL", "14701 179TH SE", "MONROE", "WA", "98272", [ "3607947497", null ], true, [ "{\"address\":\"14701 179TH SE\",\"city\":\"MONROE\",\"state\":\"WA\",\"zip\":\"98272\"}", "47.863707", "-121.990623", null, false ] ]
        , [ 4474, "A5CF7CFB-6C8F-4D77-8707-7D850C0A59D4", 4474, 1441325849, "391130", 1441325910, "386561", null, "500088", "VALLEY MEDICAL CENTER", "400 S 43RD ST", "RENTON", "WA", "98055", [ "4252283450", null ], true, [ "{\"address\":\"400 S 43RD ST\",\"city\":\"RENTON\",\"state\":\"WA\",\"zip\":\"98055\"}", "47.44109", "-122.214085", null, false ] ]
        , [ 4475, "BB65310C-2A5C-41EA-9C85-1F1FAC8A608A", 4475, 1441325849, "391130", 1441325911, "386561", null, "500108", "ST JOSEPH MEDICAL CENTER", "1717 SOUTH J STREET", "TACOMA", "WA", "98405", [ "2536274101", null ], true, [ "{\"address\":\"1717 SOUTH J STREET\",\"city\":\"TACOMA\",\"state\":\"WA\",\"zip\":\"98405\"}", "47.245263", "-122.448713", null, false ] ]
        , [ 4476, "9791FAC9-6570-4D34-9193-8E886004575E", 4476, 1441325849, "391130", 1441325907, "386561", null, "500119", "VALLEY HOSPITAL", "12606 EAST MISSION AVENUE", "SPOKANE", "WA", "99216", [ "5099246650", null ], true, [ "{\"address\":\"12606 EAST MISSION AVENUE\",\"city\":\"SPOKANE\",\"state\":\"WA\",\"zip\":\"99216\"}", "47.671645", "-117.235621", null, false ] ]
        , [ 4477, "0B0CB47D-3FC5-4420-B96D-61692EF96E9A", 4477, 1441325849, "391130", 1441325890, "386561", null, "50011F", "SPOKANE VA MEDICAL CENTER", "4815 N. ASSEMBLY STREET", "SPOKANE", "WA", "99205", [ "5094347000", null ], false, [ "{\"address\":\"4815 N. ASSEMBLY STREET\",\"city\":\"SPOKANE\",\"state\":\"WA\",\"zip\":\"99205\"}", "47.702481", "-117.47557", null, false ] ]
        , [ 4478, "57FD0687-BAE9-411F-AE97-F5544070F309", 4478, 1441325849, "391130", 1441325901, "386561", null, "500124", "EVERGREEN HOSPITAL MEDICAL CENTER", "12040 NE 128TH STREET", "KIRKLAND", "WA", "98034", [ "4258991000", null ], true, [ "{\"address\":\"12040 NE 128TH STREET\",\"city\":\"KIRKLAND\",\"state\":\"WA\",\"zip\":\"98034\"}", "47.714917", "-122.178607", null, false ] ]
        , [ 4479, "B9F4115A-401C-4E65-9858-D7A7258CE425", 4479, 1441325849, "391130", 1441325849, "391130", null, "500129", "TACOMA GENERAL ALLENMORE HOSPITAL", "315 S MLK JR WAY", "TACOMA", "WA", "98415", [ "2534031000", null ], true, [ "{\"address\":\"315 S MLK JR WAY\",\"city\":\"TACOMA\",\"state\":\"WA\",\"zip\":\"98415\"}", null, null, null, true ] ]
        , [ 4480, "0FB99328-81A5-438F-BB5E-5EDCFB1CA40E", 4480, 1441325849, "391130", 1441325890, "386561", null, "500139", "CAPITAL MEDICAL CENTER", "3900 CAPITAL MALL DR SW", "OLYMPIA", "WA", "98502", [ "3607545858", null ], true, [ "{\"address\":\"3900 CAPITAL MALL DR SW\",\"city\":\"OLYMPIA\",\"state\":\"WA\",\"zip\":\"98502\"}", "47.041671", "-122.951483", null, false ] ]
        , [ 4481, "3924586C-FD12-4119-9927-F03E3E46D52A", 4481, 1441325849, "391130", 1441325899, "386561", null, "50013F", "WALLA WALLA VA MEDICAL CENTER", "77 WAINWRIGHT DRIVE", "WALLA WALLA", "WA", "99362", [ "5095273450", null ], false, [ "{\"address\":\"77 WAINWRIGHT DRIVE\",\"city\":\"WALLA WALLA\",\"state\":\"WA\",\"zip\":\"99362\"}", "46.052553", "-118.355552", null, false ] ]
        , [ 4482, "FA4E890C-9DA1-4820-9D1D-2C5ABDE24F41", 4482, 1441325849, "391130", 1441325916, "386561", null, "500141", "ST FRANCIS COMMUNITY HOSPITAL", "34515 9TH AVENUE SOUTH", "FEDERAL WAY", "WA", "98003", [ "2539448100", null ], true, [ "{\"address\":\"34515 9TH AVENUE SOUTH\",\"city\":\"FEDERAL WAY\",\"state\":\"WA\",\"zip\":\"98003\"}", "47.292561", "-122.322944", null, false ] ]
        , [ 4483, "6E5D8B66-DEE3-41B1-BBB7-DB97416FF6F1", 4483, 1441325849, "391130", 1441325905, "386561", null, "500148", "CONFLUENCE HEALTH- WENATCHEE VALLEY HOSP & CLINICS", "820 NORTH CHELAN AVENUE", "WENATCHEE", "WA", "98801", [ "5096638711", null ], false, [ "{\"address\":\"820 NORTH CHELAN AVENUE\",\"city\":\"WENATCHEE\",\"state\":\"WA\",\"zip\":\"98801\"}", "47.433262", "-120.321737", null, false ] ]
        , [ 4484, "91A49BD2-FA82-4298-88AF-7D8FFE0B3571", 4484, 1441325849, "391130", 1441325907, "386561", null, "500150", "LEGACY SALMON CREEK MEDICAL CENTER", "2211 NE 139TH STREET", "VANCOUVER", "WA", "98686", [ "3604871000", null ], true, [ "{\"address\":\"2211 NE 139TH STREET\",\"city\":\"VANCOUVER\",\"state\":\"WA\",\"zip\":\"98686\"}", "45.721874", "-122.647983", null, false ] ]
        , [ 4485, "DD91143D-D26B-413B-BA5E-63193A97D0C9", 4485, 1441325849, "391130", 1441325915, "386561", null, "500151", "ST ANTHONY HOSPITAL", "11567 CANTERWOOD BOULEVARD NW", "GIG HARBOR", "WA", "98332", [ "2535302050", null ], true, [ "{\"address\":\"11567 CANTERWOOD BOULEVARD NW\",\"city\":\"GIG HARBOR\",\"state\":\"WA\",\"zip\":\"98332\"}", "47.363825", "-122.614792", null, false ] ]
        , [ 4486, "57643566-04A3-46B4-8410-76C8EB0A5EA4", 4486, 1441325849, "391130", 1441325901, "386561", null, "500152", "SWEDISH ISSAQUAH", "751 NE BLAKELY DR", "ISSAQUAH", "WA", "98029", [ "4253134000", null ], true, [ "{\"address\":\"751 NE BLAKELY DR\",\"city\":\"ISSAQUAH\",\"state\":\"WA\",\"zip\":\"98029\"}", "47.536567", "-122.0221", null, false ] ]
        , [ 4487, "29474AC8-10D4-4623-9F94-A62736D6270F", 4487, 1441325849, "391130", 1441325893, "386561", null, "50030F", "SEATTLE VA MEDICAL CENTER - VA PUGIT SOUND", "1660 S. COLUMBIAN WAY", "SEATTLE", "WA", "98108", [ "2067642299", null ], false, [ "{\"address\":\"1660 S. COLUMBIAN WAY\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98108\"}", "47.56233", "-122.311518", null, false ] ]
        , [ 4488, "E0761A3E-170E-47A2-B5E9-D9517CA52DF0", 4488, 1441325849, "391130", 1441325915, "386561", null, "501301", "GARFIELD COUNTY MEMORIAL HOSPITAL", "66 NORTH SIXTH STREET", "POMEROY", "WA", "99347", [ "5098431591", null ], true, [ "{\"address\":\"66 NORTH SIXTH STREET\",\"city\":\"POMEROY\",\"state\":\"WA\",\"zip\":\"99347\"}", "46.474949", "-117.602781", null, false ] ]
        , [ 4489, "72E2892B-685C-4CF2-9995-C6D47DEBCED5", 4489, 1441325849, "391130", 1441325905, "386561", null, "501302", "DAYTON GENERAL HOSPITAL", "1012 SOUTH 3RD STREET", "DAYTON", "WA", "99328", [ "5093822531", null ], true, [ "{\"address\":\"1012 SOUTH 3RD STREET\",\"city\":\"DAYTON\",\"state\":\"WA\",\"zip\":\"99328\"}", "46.312433", "-117.968743", null, false ] ]
        , [ 4490, "CE2EE22A-443F-47B7-A08A-BF8906ACCC70", 4490, 1441325849, "391130", 1441325912, "386561", null, "501303", "WILLAPA HARBOR HOSPITAL", "800 ALDER STREET", "SOUTH BEND", "WA", "98586", [ "3608755526", null ], true, [ "{\"address\":\"800 ALDER STREET\",\"city\":\"SOUTH BEND\",\"state\":\"WA\",\"zip\":\"98586\"}", "46.662195", "-123.812327", null, false ] ]
        , [ 4491, "99970948-1521-47AE-8749-03BDD4093C05", 4491, 1441325849, "391130", 1441325907, "386561", null, "501304", "SUMMIT PACIFIC MEDICAL CENTER-SWING BED UNIT", "600 EAST MAIN STREET", "ELMA", "WA", "98541", [ "3603462222", null ], true, [ "{\"address\":\"600 EAST MAIN STREET\",\"city\":\"ELMA\",\"state\":\"WA\",\"zip\":\"98541\"}", "47.006706", "-123.39085", null, false ] ]
        , [ 4492, "4C3EDD9B-0388-4058-A366-6592E80B15C0", 4492, 1441325849, "391130", 1441325901, "386561", null, "501305", "LINCOLN HOSPITAL", "10 NICHOLS STREET", "DAVENPORT", "WA", "99122", [ "5097257101", null ], true, [ "{\"address\":\"10 NICHOLS STREET\",\"city\":\"DAVENPORT\",\"state\":\"WA\",\"zip\":\"99122\"}", "47.657256", "-118.146023", null, false ] ]
        , [ 4493, "AF887260-7F6A-4514-A3D6-B9A6516BE5A2", 4493, 1441325849, "391130", 1441325911, "386561", null, "501307", "ODESSA MEMORIAL HEALTHCARE CENTER", "502 E AMENDE DRIVE", "ODESSA", "WA", "99159", [ "5099822611", null ], true, [ "{\"address\":\"502 E AMENDE DRIVE\",\"city\":\"ODESSA\",\"state\":\"WA\",\"zip\":\"99159\"}", "47.331603", "-118.682403", null, false ] ]
        , [ 4494, "66BC1BE9-C990-418E-85FC-8F32C7CE7E1E", 4494, 1441325849, "391130", 1441325902, "386561", null, "501308", "COULEE COMMUNITY HOSPITAL", "411 FORTUYN ROAD", "GRAND COULEE", "WA", "99133", [ "5096331753", null ], true, [ "{\"address\":\"411 FORTUYN ROAD\",\"city\":\"GRAND COULEE\",\"state\":\"WA\",\"zip\":\"99133\"}", "47.942391", "-119.004532", null, false ] ]
        , [ 4495, "8E0A2AB8-837B-40CB-9E49-74BCBD1F996D", 4495, 1441325849, "391130", 1441325907, "386561", null, "501309", "PROVIDENCE ST JOSEPH HOSPITAL", "500 EAST WEBSTER", "CHEWELAH", "WA", "99109", [ "5099358211", null ], true, [ "{\"address\":\"500 EAST WEBSTER\",\"city\":\"CHEWELAH\",\"state\":\"WA\",\"zip\":\"99109\"}", "48.278213", "-117.710823", null, false ] ]
        , [ 4496, "C63FEBCC-CF29-4368-9F19-3F1D3807B273", 4496, 1441325849, "391130", 1441325911, "386561", null, "501310", "NEWPORT COMMUNITY HOSPITAL", "714 WEST PINE STREET", "NEWPORT", "WA", "99156", [ "5094472441", null ], true, [ "{\"address\":\"714 WEST PINE STREET\",\"city\":\"NEWPORT\",\"state\":\"WA\",\"zip\":\"99156\"}", "48.182083", "-117.047874", null, false ] ]
        , [ 4497, "7C9BD2F6-BE8A-4267-A453-E0243E146256", 4497, 1441325849, "391130", 1441325906, "386561", null, "501311", "EAST ADAMS RURAL HOSPITAL", "903 SOUTH ADAMS", "RITZVILLE", "WA", "99169", [ "5096591200", null ], true, [ "{\"address\":\"903 SOUTH ADAMS\",\"city\":\"RITZVILLE\",\"state\":\"WA\",\"zip\":\"99169\"}", "47.121155", "-118.372617", null, false ] ]
        , [ 4498, "F0681C27-A377-4F03-86D0-DAE92164EB6B", 4498, 1441325849, "391130", 1441325916, "386561", null, "501312", "PROSSER MEMORIAL HOSPITAL", "723 MEMORIAL STREET", "PROSSER", "WA", "99350", [ "5097862222", null ], true, [ "{\"address\":\"723 MEMORIAL STREET\",\"city\":\"PROSSER\",\"state\":\"WA\",\"zip\":\"99350\"}", "46.207952", "-119.763503", null, false ] ]
        , [ 4499, "FABBC86B-F4BD-4C79-A8C2-29EA86EC31F8", 4499, 1441325849, "391130", 1441325917, "386561", null, "501313", "CASCADE MEDICAL CENTER", "817 COMMERCIAL STREET", "LEAVENWORTH", "WA", "98826", [ "5095485815", null ], true, [ "{\"address\":\"817 COMMERCIAL STREET\",\"city\":\"LEAVENWORTH\",\"state\":\"WA\",\"zip\":\"98826\"}", "47.594694", "-120.661092", null, false ] ]
        , [ 4500, "1F5511CF-5346-47FA-906F-3842B43555DC", 4500, 1441325849, "391130", 1441325892, "386561", null, "501314", "OCEAN BEACH HOSPITAL", "174 FIRST AVENUE NORTH", "ILWACO", "WA", "98624", [ "3606423181", null ], true, [ "{\"address\":\"174 FIRST AVENUE NORTH\",\"city\":\"ILWACO\",\"state\":\"WA\",\"zip\":\"98624\"}", "46.310145", "-124.043363", null, false ] ]
        , [ 4501, "91790661-CA60-494E-8DD9-8EB9BA738FC0", 4501, 1441325849, "391130", 1441325907, "386561", null, "501315", "SKYLINE HOSPITAL", "211 SKYLINE DRIVE", "WHITE SALMON", "WA", "98672", [ "5094911101", null ], true, [ "{\"address\":\"211 SKYLINE DRIVE\",\"city\":\"WHITE SALMON\",\"state\":\"WA\",\"zip\":\"98672\"}", "45.723105", "-121.471118", null, false ] ]
        , [ 4502, "7D8E6A2F-A547-4E84-943F-1A5BEB35DCBA", 4502, 1441325849, "391130", 1441325906, "386561", null, "501316", "KLICKITAT VALLEY HOSPITAL", "310 SOUTH ROOSEVELT", "GOLDENDALE", "WA", "98620", [ "5097734022", null ], true, [ "{\"address\":\"310 SOUTH ROOSEVELT\",\"city\":\"GOLDENDALE\",\"state\":\"WA\",\"zip\":\"98620\"}", "45.820629", "-120.812269", null, false ] ]
        , [ 4503, "B64C239E-272B-4416-91CE-1CFDF1212027", 4503, 1441325849, "391130", 1441325911, "386561", null, "501317", "COLUMBIA BASIN HOSPITAL", "200 NAT WASHINGTON WAY", "EPHRATA", "WA", "98823", [ "5097544631", null ], true, [ "{\"address\":\"200 NAT WASHINGTON WAY\",\"city\":\"EPHRATA\",\"state\":\"WA\",\"zip\":\"98823\"}", "47.31566", "-119.547881", null, false ] ]
        , [ 4504, "00C142AB-0DAF-47CB-AC11-F67902B2FAA9", 4504, 1441325849, "391130", 1441325889, "386561", null, "501318", "OTHELLO COMMUNITY HOSPITAL", "315 NORTH 14TH AVENUE", "OTHELLO", "WA", "99344", [ "5094882636", null ], true, [ "{\"address\":\"315 NORTH 14TH AVENUE\",\"city\":\"OTHELLO\",\"state\":\"WA\",\"zip\":\"99344\"}", "46.831175", "-119.154365", null, false ] ]
        , [ 4505, "024DE0F5-CEF1-4B37-BF2F-8EF205D02AF4", 4505, 1441325849, "391130", 1441325889, "386561", null, "501319", "MORTON GENERAL HOSPITAL", "521 ADAMS STREET", "MORTON", "WA", "98356", [ "3604965112", null ], true, [ "{\"address\":\"521 ADAMS STREET\",\"city\":\"MORTON\",\"state\":\"WA\",\"zip\":\"98356\"}", "46.555937", "-122.280559", null, false ] ]
        , [ 4506, "205E75F4-75EE-4BB1-9E8F-57A5FD987E1E", 4506, 1441325849, "391130", 1441325892, "386561", null, "501320", "QUINCY VALLEY HOSPITAL", "908 10TH AVENUE SOUTHWEST", "QUINCY", "WA", "98848", [ "5097873531", null ], true, [ "{\"address\":\"908 10TH AVENUE SOUTHWEST\",\"city\":\"QUINCY\",\"state\":\"WA\",\"zip\":\"98848\"}", "47.230989", "-119.869181", null, false ] ]
        , [ 4507, "9D963C44-9E91-4D73-AA8D-86887A93E403", 4507, 1441325849, "391130", 1441325908, "386561", null, "501321", "NORTH VALLEY HOSPITAL", "203 SOUTH WESTERN", "TONASKET", "WA", "98855", [ "5094862151", null ], true, [ "{\"address\":\"203 SOUTH WESTERN\",\"city\":\"TONASKET\",\"state\":\"WA\",\"zip\":\"98855\"}", "48.706958", "-119.439479", null, false ] ]
        , [ 4508, "309AADB4-AEBE-404D-A4A5-E0BCDF528314", 4508, 1441325849, "391130", 1441325894, "386561", null, "501322", "FERRY COUNTY MEMORIAL HOSPITAL", "36 KLONDIKE ROAD", "REPUBLIC", "WA", "99166", [ "5097753333", null ], true, [ "{\"address\":\"36 KLONDIKE ROAD\",\"city\":\"REPUBLIC\",\"state\":\"WA\",\"zip\":\"99166\"}", "48.652944", "-118.732967", null, false ] ]
        , [ 4509, "8A8C04CB-FF7B-49CF-B398-5F9B2B01911D", 4509, 1441325849, "391130", 1441325907, "386561", null, "501323", "JEFFERSON HEALTHCARE", "834 SHERIDAN STREET", "PORT TOWNSEND", "WA", "98368", [ "3603852200", null ], true, [ "{\"address\":\"834 SHERIDAN STREET\",\"city\":\"PORT TOWNSEND\",\"state\":\"WA\",\"zip\":\"98368\"}", "48.105502", "-122.790284", null, false ] ]
        , [ 4510, "5D56BBA7-6F1F-46ED-9810-1BA8A2AF7A58", 4510, 1441325849, "391130", 1441325901, "386561", null, "501324", "THREE RIVERS HOSPITAL", "507 HOSPITAL WAY", "BREWSTER", "WA", "98812", [ "5096892517", null ], true, [ "{\"address\":\"507 HOSPITAL WAY\",\"city\":\"BREWSTER\",\"state\":\"WA\",\"zip\":\"98812\"}", "48.105521", "-119.783717", null, false ] ]
        , [ 4511, "B3FC8F3E-EC19-4CB6-87C1-F04194A68408", 4511, 1441325849, "391130", 1441325911, "386561", null, "501325", "FORKS COMMUNITY HOSPITAL", "530 BOGACHIEL WAY", "FORKS", "WA", "98331", [ "3603746271", null ], true, [ "{\"address\":\"530 BOGACHIEL WAY\",\"city\":\"FORKS\",\"state\":\"WA\",\"zip\":\"98331\"}", "47.946446", "-124.393214", null, false ] ]
        , [ 4512, "3EDC0DF6-E787-47F9-831D-36E6FD014C02", 4512, 1441325849, "391130", 1441325900, "386561", null, "501326", "PROVIDENCE MOUNT CARMEL HOSPITAL", "982 EAST COLUMBIA", "COLVILLE", "WA", "99114", [ "5096842561", null ], true, [ "{\"address\":\"982 EAST COLUMBIA\",\"city\":\"COLVILLE\",\"state\":\"WA\",\"zip\":\"99114\"}", "48.541304", "-117.8934", null, false ] ]
        , [ 4513, "CC5B83A3-FD16-4CC6-88F4-C676B36F8DB1", 4513, 1441325849, "391130", 1441325912, "386561", null, "501327", "WHITMAN HOSPITAL AND MEDICAL CENTER", "1200 WEST FAIRVIEW", "COLFAX", "WA", "99111", [ "5093973435", null ], true, [ "{\"address\":\"1200 WEST FAIRVIEW\",\"city\":\"COLFAX\",\"state\":\"WA\",\"zip\":\"99111\"}", "46.869249", "-117.374602", null, false ] ]
        , [ 4514, "8C8C8889-B02C-4758-8C38-E909DB21E899", 4514, 1441325849, "391130", 1441325907, "386561", null, "501328", "MID VALLEY HOSPITAL", "810 JASMINE STREET", "OMAK", "WA", "98841", [ "5098261760", null ], true, [ "{\"address\":\"810 JASMINE STREET\",\"city\":\"OMAK\",\"state\":\"WA\",\"zip\":\"98841\"}", "48.396393", "-119.545364", null, false ] ]
        , [ 4515, "E1A35671-0DDD-4EDE-A701-C48F01F89458", 4515, 1441325849, "391130", 1441325915, "386561", null, "501329", "PEACEHEALTH UNITED GENERAL MEDICAL CENTER", "2000 HOSPITAL DRIVE", "SEDRO WOOLLEY", "WA", "98284", [ "3608566021", null ], true, [ "{\"address\":\"2000 HOSPITAL DRIVE\",\"city\":\"SEDRO WOOLLEY\",\"state\":\"WA\",\"zip\":\"98284\"}", "48.49551", "-122.276027", null, false ] ]
        , [ 4516, "F0BBD437-9409-406F-9F81-F85F09966AE6", 4516, 1441325849, "391130", 1441325916, "386561", null, "501330", "SUNNYSIDE COMMUNITY HOSPITAL", "1016 TACOMA AVENUE", "SUNNYSIDE", "WA", "98944", [ "5098371500", null ], true, [ "{\"address\":\"1016 TACOMA AVENUE\",\"city\":\"SUNNYSIDE\",\"state\":\"WA\",\"zip\":\"98944\"}", "46.322218", "-120.006966", null, false ] ]
        , [ 4517, "49946417-2751-4C15-BBC5-5678BE25117E", 4517, 1441325849, "391130", 1441325901, "386561", null, "501331", "PULLMAN REGIONAL HOSPITAL", "835 S BISHOP BLVD", "PULLMAN", "WA", "99163", [ "5093322541", null ], true, [ "{\"address\":\"835 S BISHOP BLVD\",\"city\":\"PULLMAN\",\"state\":\"WA\",\"zip\":\"99163\"}", "46.713506", "-117.170278", null, false ] ]
        , [ 4518, "5A706C41-FA18-48FB-A643-F561AB88A43F", 4518, 1441325849, "391130", 1441325901, "386561", null, "501332", "TRI-STATE MEMORIAL HOSPITAL", "1221 HIGHLAND AVENUE", "CLARKSTON", "WA", "99403", [ "5097585511", null ], true, [ "{\"address\":\"1221 HIGHLAND AVENUE\",\"city\":\"CLARKSTON\",\"state\":\"WA\",\"zip\":\"99403\"}", "46.403637", "-117.055073", null, false ] ]
        , [ 4519, "ACFD180F-612F-4232-B344-C64F16008EB5", 4519, 1441325849, "391130", 1441325911, "386561", null, "501333", "KITTITAS VALLEY COMMUNITY HOSPITAL", "603 SOUTH CHESTNUT", "ELLENSBURG", "WA", "98926", [ "5099629841", null ], true, [ "{\"address\":\"603 SOUTH CHESTNUT\",\"city\":\"ELLENSBURG\",\"state\":\"WA\",\"zip\":\"98926\"}", "46.987252", "-120.536739", null, false ] ]
        , [ 4520, "452F4173-E9E6-4A9D-B22D-5CED9F8008A7", 4520, 1441325849, "391130", 1441325900, "386561", null, "501334", "LAKE CHELAN COMMUNITY HOSPITAL", "503 EAST HIGHLAND", "CHELAN", "WA", "98816", [ "5096823300", null ], true, [ "{\"address\":\"503 EAST HIGHLAND\",\"city\":\"CHELAN\",\"state\":\"WA\",\"zip\":\"98816\"}", "47.845274", "-120.010935", null, false ] ]
        , [ 4521, "68CC12BE-BD20-4235-A96F-E657C914C281", 4521, 1441325849, "391130", 1441325902, "386561", null, "501335", "ST ELIZABETH HOSPITAL", "1450 BATTERSBY AVENUE", "ENUMCLAW", "WA", "98022", [ "3608252505", null ], true, [ "{\"address\":\"1450 BATTERSBY AVENUE\",\"city\":\"ENUMCLAW\",\"state\":\"WA\",\"zip\":\"98022\"}", "47.208406", "-121.988133", null, false ] ]
        , [ 4522, "C46C112F-81B0-45C9-B1BC-C647A7DD3FD3", 4522, 1441325849, "391130", 1441325911, "386561", null, "501336", "MASON GENERAL HOSPITAL & FAMILY OF CLINICS", "901 MT VIEW DRIVE", "SHELTON", "WA", "98584", [ "3604261611", null ], true, [ "{\"address\":\"901 MT VIEW DRIVE\",\"city\":\"SHELTON\",\"state\":\"WA\",\"zip\":\"98584\"}", "47.470214", "-122.975869", null, false ] ]
        , [ 4523, "4053BEC9-ECC6-44B9-9E2E-C505A25C3BD9", 4523, 1441325849, "391130", 1441325900, "386561", null, "501337", "LOURDES MEDICAL CENTER", "520 N FOURTH AVENUE", "PASCO", "WA", "99301", [ "5095462278", null ], true, [ "{\"address\":\"520 N FOURTH AVENUE\",\"city\":\"PASCO\",\"state\":\"WA\",\"zip\":\"99301\"}", "46.235463", "-119.094643", null, false ] ]
        , [ 4524, "6412BD31-26CE-4DA2-9EA2-CE8B494B3C73", 4524, 1441325849, "391130", 1441325901, "386561", null, "501338", "SNOQUALMIE VALLEY HOSPITAL", "9801 FRONTIER AVE SE", "SNOQUALMIE", "WA", "98065", [ "4258312300", null ], true, [ "{\"address\":\"9801 FRONTIER AVE SE\",\"city\":\"SNOQUALMIE\",\"state\":\"WA\",\"zip\":\"98065\"}", "47.512309", "-121.885917", null, false ] ]
        , [ 4525, "D2655331-B1D7-430A-BA05-BCAEDBB620C3", 4525, 1441325849, "391130", 1441325912, "386561", null, "501339", "WHIDBEY GENERAL HOSPITAL", "101 NORTH MAIN STREET", "COUPEVILLE", "WA", "98239", [ "3606785151", null ], true, [ "{\"address\":\"101 NORTH MAIN STREET\",\"city\":\"COUPEVILLE\",\"state\":\"WA\",\"zip\":\"98239\"}", "48.21424", "-122.686122", null, false ] ]
        , [ 4526, "33D4A960-AEE6-4991-A6C5-910067725EA4", 4526, 1441325849, "391130", 1441325894, "386561", null, "501340", "PEACEHEALTH PEACE ISLAND MEDICAL CENTER", "1117 SPRING STREET", "FRIDAY HARBOR", "WA", "98250", [ "3603782141", null ], true, [ "{\"address\":\"1117 SPRING STREET\",\"city\":\"FRIDAY HARBOR\",\"state\":\"WA\",\"zip\":\"98250\"}", "48.529857", "-123.028171", null, false ] ]
        , [ 4527, "2578F2F7-0394-4D70-A171-E4403B7AB326", 4527, 1441325849, "391130", 1441325893, "386561", null, "503300", "SEATTLE CHILDREN'S HOSPITAL", "4800 SAND POINT WAY NE, PO BOX C-5371", "SEATTLE", "WA", "98105", [ "2069872000", null ], true, [ "{\"address\":\"4800 SAND POINT WAY NE, PO BOX C-5371\",\"city\":\"SEATTLE\",\"state\":\"WA\",\"zip\":\"98105\"}", "47.664447", "-122.283227", null, false ] ]
        ]
    }
};