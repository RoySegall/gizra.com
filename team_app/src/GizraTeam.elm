module GizraTeam exposing (..)

import Attribute.Model exposing (..)
import DictList exposing (DictList)
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
        , location =
            { id = "amitaibu"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "bricel"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "OritiMG"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "IshaDakota"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "RachelBaram"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "LiatSadeSaadon"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "RoySegall"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "NaderSafadi"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "bitamar"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "ordavidil"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "efratn"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "anvmn"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "SavyonCohen"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "ybaras"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "DavidBronfen"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "DavidHernandez"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "RyanRempel"
            , lat = 0
            , lng = 0
            }
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
        , location =
            { id = "AronNovak"
            , lat = 0
            , lng = 0
            }
        }
      )
    ]
        |> DictList.fromList
