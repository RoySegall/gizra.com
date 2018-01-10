module GizraTeam exposing (people)

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
        , coordinates =
            { lat = 32.794
            , lng = 34.9896
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
        , coordinates =
            { lat = 32.0691471
            , lng = 34.7706788
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
        , title = "Operations Director"
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
        , coordinates =
            { lat = 32.061143
            , lng = 34.777318
            }
        }
      )
      , ( "efratn"
        , { name = "Efrat Nitzan"
          , image = "efratn.jpg"
          , socialNetworks =
              [ Email "efrat@gizra.com"
              , Twitter "efratns"
              , Github "efratn"
              ]
          , title = "Executive Director"
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
          , coordinates =
              { lat = 31.7683
              , lng = 35.2137
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
        , coordinates =
            { lat = 41.8781
            , lng = -87.6298
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
        , title = "Business Development and Strategy, Account Manager"
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
        , coordinates =
            { lat = 32.175344
            , lng = 34.908442
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
        , title = "UI/UX and Training Specialist, Account Manager"
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
        , coordinates =
            { lat = 32.9506
            , lng = 35.3123
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
        , title = "Senior Developer"
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
        , coordinates =
            { lat = 32.0684
            , lng = 34.8248
            }
        }
      )
    , ( "nedSaf"
      , { name = "Nader Safadi"
        , image = "nader77.jpg"
        , socialNetworks =
            [ Email "nader@gizra.com"
            , Github "nedSaf"
            , Drupal "nedSaf"
            ]
        , title = "Senior Developer"
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
        , coordinates =
            { lat = 33.2691
            , lng = 35.7721
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
        , title = "Senior Developer"
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
        , coordinates =
            { lat = 32.094286
            , lng = 34.783612
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
        , title = "Senior Developer"
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
        , coordinates =
            { lat = 32.08
            , lng = 34.77
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
        , title = "QA and Automation Specialist"
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
        , coordinates =
            { lat = 32.0722
            , lng = 34.8089
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
        , coordinates =
            { lat = 32.083708
            , lng = 34.888097
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
        , coordinates =
            { lat = 39.4699
            , lng = 0.3763
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
        , title = "Senior Developer"
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
        , coordinates =
            { lat = 49.8951
            , lng = -97.1384
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
        , title = "Senior Developer"
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
        , coordinates =
            { lat = 47.4979
            , lng = 19.0402
            }
        }
      )
      , ( "amaksimov"
        , { name = "Alex Maksimov"
          , image = "alex.jpg"
          , socialNetworks =
              [ Email "aleksey@gizra.com"
              , Github "amaksimov"
              ]
          , title = "Developer"
          , attributes =
              [ FamilyAttr Married
              , GenderAttr Male
              , LanguageAttr English
              , LanguageAttr Russian
              , LivedAbroad
              , NationalityAttr Russia
              , PreferedWorkHoursAttr NineToFive
              , WorkingRemote
              ]
          , coordinates =
              { lat = 55.763
              , lng = 37.849
              }
          }
        )
    ]
        |> DictList.fromList
