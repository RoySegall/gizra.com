module GizraTeam exposing (people, mapMarkers)

import Attribute.Model exposing (..)
import DictList exposing (DictList)
import LocationsMap.Model exposing (..)
import People.Model exposing (..)


people : DictList GitHubName Person
people =
    [ ( "amitaibu"
      , { name = "Amitai Burstein"
        , image = "amitaibu.jpg"
        , socialNetworks =
            [ Email "amitai"
            , Twitter "amitaibu"
            , Github "amitaibu"
            , Drupal "amitaibu"
            ]
        , title = "CTO, Co-Owner"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FamilyAttr Married
            , FoodAttr Pescetarian
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LanguageAttr French
            , LanguageAttr Spanish
            , LivedAbroad
            , NationalityAttr Israel
            , MusicWhileWorking
            , PreferedWorkHoursAttr NineToFive
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            , TvAndMovieGenereAttr SciFi
            ]
        }
      )
    , ( "bricel"
      , { name = "Brice Lenfant"
        , image = "bricel.jpg"
        , socialNetworks =
            [ Email "brice"
            , Twitter "bricel"
            , Github "bricel"
            , Drupal "bricel"
            ]
        , title = "CEO, Co-Owner"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FamilyAttr Married
            , FoodAttr Paleo
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LanguageAttr French
            , LivedAbroad
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr EarlyRise
            , PreferedWorkHoursAttr NineToFive
            , SportAttr CrossFit
            , TvAndMovieGenereAttr Drama
            ]
        }
      )
    , ( "OritiMG"
      , { name = "Orit Geron"
        , image = "OritGeron.jpg"
        , socialNetworks =
            [ Email "orit@gizra.com"
            , Twitter "OritiMG"
            , Github "OritGeron"
            ]
        , title = "Operations Manager"
        , attributes =
            [ FamilyAttr Kids
            , FamilyAttr Married
            , GenderAttr Female
            , LanguageAttr Hebrew
            , LanguageAttr English
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr EarlyRise
            , Tattoo
            , TvAndMovieGenereAttr Action
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            , TvAndMovieGenereAttr SciFi
            ]
        }
      )
    , ( "IshaDakota"
      , { name = "Adam Stewart"
        , image = "ishadakota.jpg"
        , socialNetworks =
            [ Email "adam@gizra.com"
            , Twitter "adamhstewart"
            , Github "IshaDakota"
            , Drupal "IshaDakota"
            ]
        , title = "USA CTO"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FamilyAttr Married
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LivedAbroad
            , NationalityAttr USA
            , PreferedWorkHoursAttr EarlyRise
            , SportAttr Baseball
            , TvAndMovieGenereAttr Comedy
            ]
        }
      )
    , ( "RachelBaram"
      , { name = "Rachel Baram"
        , image = "RachelBaram.jpg"
        , socialNetworks =
            [ Email "rachel@gizra.com"
            , Twitter "RachelBaram"
            , Github "RachelBaram"
            ]
        , title = "Business Development"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FamilyAttr Married
            , FoodAttr Paleo
            , GenderAttr Female
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LivedAbroad
            , NationalityAttr USA
            , NationalityAttr Israel
            , Pet
            , PreferedWorkHoursAttr EarlyRise
            , PreferedWorkHoursAttr NineToFive
            , PreferedWorkHoursAttr NightOwl
            , SportAttr CrossFit
            , Tattoo
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            , TvAndMovieGenereAttr SciFi
            , WorkingRemote
            ]
        }
      )
    , ( "LiatSadeSaadon"
      , { name = "Liat Sade Saadon"
        , image = "liatsade.jpg"
        , socialNetworks =
            [ Email "liat@gizra.com"
            , Twitter "Liat_Sade"
            , Github "liatsade"
            , Drupal "liats75"
            ]
        , title = "Employee Training & Development"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FamilyAttr Married
            , GenderAttr Female
            , LanguageAttr Hebrew
            , LanguageAttr English
            , NationalityAttr Israel
            , PreferedWorkHoursAttr NineToFive
            , SportAttr Pilates
            , TvAndMovieGenereAttr Drama
            , WorkingRemote
            ]
        }
      )
    , ( "RoySegall"
      , { name = "Roy Segall"
        , image = "RoySegall.jpg"
        , socialNetworks =
            [ Email "roy.segall@gizra.com"
            , Github "RoySegall"
            , Drupal "RoySegall"
            ]
        , title = "Team Lead"
        , attributes =
            [ DoingSports
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , NationalityAttr Israel
            , MusicAttr PlayingInstrument
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr EarlyRise
            , SportAttr CrossFit
            , TvAndMovieGenereAttr Action
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            , TvAndMovieGenereAttr SciFi
            ]
        }
      )
    , ( "NaderSafadi"
      , { name = "Nader Safadi"
        , image = "nader77.jpg"
        , socialNetworks =
            [ Email "nader@gizra.com"
            , Github "nader77"
            , Drupal "nader77"
            ]
        , title = "Team Lead"
        , attributes =
            [ DoingSports
            , GenderAttr Male
            , LanguageAttr Arabic
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LivedAbroad
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr EarlyRise
            , PreferedWorkHoursAttr NightOwl
            , SportAttr CrossFit
            , Tattoo
            , TvAndMovieGenereAttr Action
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr SciFi
            ]
        }
      )
    , ( "bitamar"
      , { name = "Itamar Bar-Lev"
        , image = "bitamar.jpg"
        , socialNetworks =
            [ Email "itamar@gizra.com"
            , Github "bitamar"
            , Drupal "itamar"
            ]
        , title = "Team Lead"
        , attributes =
            [ FamilyAttr Kids
            , FamilyAttr Married
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LanguageAttr German
            , LivedAbroad
            , MusicAttr PlayingInstrument
            , MusicAttr Sing
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr NineToFive
            , TvAndMovieGenereAttr Drama
            , WorkingRemote
            ]
        }
      )
    , ( "ordavidil"
      , { name = "Or David"
        , image = "ordavidil.jpg"
        , socialNetworks =
            [ Email "or@gizra.com"
            , Github "ordavidil"
            , Drupal "ordavidil"
            ]
        , title = "Team Lead"
        , attributes =
            [ DoingSports
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LivedAbroad
            , MusicAttr PlayingInstrument
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr NightOwl
            , SportAttr Volleyball
            , TvAndMovieGenereAttr Action
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            , TvAndMovieGenereAttr Horror
            , TvAndMovieGenereAttr SciFi
            ]
        }
      )
    , ( "efratn"
      , { name = "Efrat Nitzan"
        , image = "efratn.jpg"
        , socialNetworks =
            [ Email "efrat@gizra.com"
            , Github "efratn"
            ]
        , title = "Account Manager"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FoodAttr Kosher
            , GenderAttr Female
            , LanguageAttr Hebrew
            , LanguageAttr English
            , MusicWhileWorking
            , NationalityAttr Israel
            , Pet
            , PreferedWorkHoursAttr NineToFive
            , SportAttr Pilates
            ]
        }
      )
    , ( "anvmn"
      , { name = "Anatoly Vaitsman"
        , image = "anvmn.jpg"
        , socialNetworks =
            [ Email "anatoly@gizra.com"
            , Github "anvmn"
            ]
        , title = "Developer"
        , attributes =
            [ DoingSports
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LanguageAttr Russian
            , LivedAbroad
            , NationalityAttr Israel
            , PreferedWorkHoursAttr NightOwl
            , SportAttr CrossFit
            , Tattoo
            , TvAndMovieGenereAttr Action
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            , TvAndMovieGenereAttr Horror
            , TvAndMovieGenereAttr SciFi
            ]
        }
      )
    , ( "SavyonCohen"
      , { name = "Savyon Cohen"
        , image = "savyoncohen.jpg"
        , socialNetworks =
            [ Email "savyon@gizra.com"
            , Github "savyoncohen"
            ]
        , title = "Developer"
        , attributes =
            [ DoingSports
            , FamilyAttr Kids
            , FamilyAttr Married
            , FoodAttr Kosher
            , GenderAttr Female
            , LanguageAttr Hebrew
            , LanguageAttr English
            , MusicAttr Sing
            , MusicWhileWorking
            , NationalityAttr Israel
            , PreferedWorkHoursAttr EarlyRise
            , TvAndMovieGenereAttr Action
            , TvAndMovieGenereAttr Comedy
            ]
        }
      )
    , ( "ybaras"
      , { name = "Yoav Baras"
        , image = "ybaras.jpg"
        , socialNetworks =
            [ Email "yoav@gizra.com"
            , Github "ybaras"
            ]
        , title = "Developer"
        , attributes =
            [ DoingSports
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr English
            , LivedAbroad
            , MusicWhileWorking
            , NationalityAttr Israel
            , Pet
            , PreferedWorkHoursAttr NineToFive
            , Tattoo
            , TvAndMovieGenereAttr Comedy
            ]
        }
      )
    , ( "DavidBronfen"
      , { name = "David Bronfen"
        , image = "DavidBronfen.jpg"
        , socialNetworks =
            [ Email "davidb@gizra.com"
            , Github "DavidBronfen"
            ]
        , title = "Developer"
        , attributes =
            [ DoingSports
            , FoodAttr Vegetarian
            , GenderAttr Male
            , LanguageAttr Hebrew
            , LanguageAttr Italian
            , LanguageAttr English
            , LanguageAttr Russian
            , NationalityAttr Israel
            , MusicAttr Sing
            , MusicWhileWorking
            , Pet
            , PreferedWorkHoursAttr EarlyRise
            , SportAttr CrossFit
            , Tattoo
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr Drama
            ]
        }
      )
    , ( "DavidHernandez"
      , { name = "David Hernandez"
        , image = "DavidHernandez.jpg"
        , socialNetworks =
            [ Email "david.hernandez@gizra.com"
            , Github "DavidHernandez"
            , Drupal "david-hernández"
            ]
        , title = "Developer"
        , attributes =
            [ FoodAttr Vegan
            , GenderAttr Male
            , LanguageAttr Catalonian
            , LanguageAttr English
            , LanguageAttr Spanish
            , LivedAbroad
            , MusicWhileWorking
            , NationalityAttr Spain
            , Pet
            , PreferedWorkHoursAttr EarlyRise
            , PreferedWorkHoursAttr NineToFive
            , PreferedWorkHoursAttr NightOwl
            , Tattoo
            , TvAndMovieGenereAttr SciFi
            , WorkingRemote
            ]
        }
      )
    , ( "RyanRempel"
      , { name = "Ryan Rempel"
        , image = "RyanRempel.jpg"
        , socialNetworks =
            [ Email "ryan@gizra.com"
            , Github "rgrempel"
            ]
        , title = "Developer"
        , attributes =
            [ DoingSports
            , FamilyAttr Married
            , FamilyAttr Kids
            , LanguageAttr English
            , MusicAttr Sing
            , NationalityAttr Canada
            , Pet
            , PreferedWorkHoursAttr NineToFive
            , PreferedWorkHoursAttr NightOwl
            , Tattoo
            , TvAndMovieGenereAttr Comedy
            , TvAndMovieGenereAttr SciFi
            , WorkingRemote
            ]
        }
      )
    , ( "AronNovak"
      , { name = "Aron Novak"
        , image = "AronNovak.jpg"
        , socialNetworks =
            [ Email "aron@gizra.com"
            , Github "AronNovak"
            , Drupal "aron-novak"
            ]
        , title = "Developer"
        , attributes =
            [ DoingSports
            , FamilyAttr Married
            , FamilyAttr Kids
            , LanguageAttr English
            , LanguageAttr Hungarian
            , LivedAbroad
            , MusicWhileWorking
            , NationalityAttr Hungary
            , PreferedWorkHoursAttr NineToFive
            , Tattoo
            , TvAndMovieGenereAttr SciFi
            , WorkingRemote
            ]
        }
      )
    ]
        |> DictList.fromList


mapMarkers : List Marker
mapMarkers =
    [ { id = "amitaibu"
      , lat = 32.794
      , lng = 34.9896
      }
    , { id = "bricel"
      , lat = 32.0853
      , lng = 34.7818
      }
    , { id = "OritiMG"
      , lat = 32.0843
      , lng = 34.7828
      }
    , { id = "IshaDakota"
      , lat = 41.8781
      , lng = 87.6298
      }
    , { id = "RachelBaram"
      , lat = 32.1782
      , lng = 34.9076
      }
    , { id = "LiatSadeSaadon"
      , lat = 32.9506
      , lng = 35.3123
      }
    , { id = "RoySegall"
      , lat = 32.0684
      , lng = 34.8248
      }
    , { id = "NaderSafadi"
      , lat = 33.2691
      , lng = 35.7721
      }
    , { id = "bitamar"
      , lat = 52.52
      , lng = 13.405
      }
    , { id = "ordavidil"
      , lat = 32.084
      , lng = 34.782
      }
    , { id = "efratn"
      , lat = 31.7683
      , lng = 35.2137
      }
    , { id = "anvmn"
      , lat = 32.08
      , lng = 34.77
      }
    , { id = "SavyonCohen"
      , lat = 32.0722
      , lng = 34.8089
      }
    , { id = "ybaras"
      , lat = 32.08
      , lng = 34.77
      }
    , { id = "DavidBronfen"
      , lat = 32.08
      , lng = 34.77
      }
    , { id = "DavidHernandez"
      , lat = 39.4699
      , lng = 0.3763
      }
    , { id = "RyanRempel"
      , lat = 49.8951
      , lng = -97.1384
      }
    , { id = "AronNovak"
      , lat = 47.4979
      , lng = 19.0402
      }
    ]
