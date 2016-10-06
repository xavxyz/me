module Main exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http
import Task exposing (Task)
import Json.Decode exposing (Decoder)


main : Program Never
main =
    Html.program
        { view = view
        , update = update
        , init = ( initialModel, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


submitForm : String -> String -> Cmd Msg
submitForm firstname email =
    let
        url =
            "https://xav-express.herokuapp.com/email?firstname="
                ++ firstname
                ++ "&email="
                ++ email
    in
        Http.get Json.Decode.bool url
            |> Task.perform HandleSubmitError HandleSubmitResponse


type alias Model =
    { email : String
    , firstname : String
    , submitted : Bool
    , submitLoading : Bool
    , errorMessage : Maybe String
    }


initialModel : Model
initialModel =
    { email = ""
    , firstname = ""
    , submitted = False
    , submitLoading = False
    , errorMessage = Nothing
    }


viewSubmitButton : Model -> Html Msg
viewSubmitButton model =
    if model.submitLoading then
        button [ class "CallToAction__submit", disabled True ]
            [ div [ class "spinner" ]
                [ div [ class "bounce1" ] []
                , div [ class "bounce2" ] []
                , div [ class "bounce3" ] []
                ]
            ]
    else
        button [ class "CallToAction__submit", onClick SubmitForm ] [ text "Let's go to work!" ]


viewCallToAction : Model -> Html Msg
viewCallToAction model =
    if model.submitted then
        div [ class "CallToAction__afterSubmit" ]
            [ div [ class "Header Header--dark" ]
                [ div [ class "Header__main" ]
                    [ text "Awesome!" ]
                , span [ class "Header__meta" ]
                    [ text "I'll get back to you soon! 🚀" ]
                ]
            ]
    else
        div [ class "CallToAction" ]
            [ input [ name "firstname", placeholder "Your Firstname", type' "text", onInput SetFirstname, defaultValue model.firstname ] []
            , input [ name "email", placeholder "Your Email", type' "email", onInput SetEmail, defaultValue model.email ] []
            , viewSubmitButton model
            ]


view : Model -> Html Msg
view model =
    div [ class "App" ]
        [ div [ class "Hero" ]
            [ div [ class "Header Header--white" ]
                [ div [ class "Header__main" ]
                    [ text "Consultant, Fullstack Javascript Engineer"
                    ]
                , span [ class "Header__meta" ]
                    [ text "I build modern webapps to help SaaS businesses become more profitable." ]
                ]
            , div [ class "Hero__picture" ]
                [ img [ alt "Rocket consulting", src "https://res.cloudinary.com/xavcz/image/upload/v1473680138/rocket_b0atyx.png" ]
                    []
                ]
            , div [ class "Hero__me" ]
                [ img [ alt "Me", src "https://res.cloudinary.com/xavcz/image/upload/v1473680137/me_srabkd.png" ]
                    []
                , div [ class "Header Header--both" ]
                    [ div [ class "Header__main" ]
                        [ text "Hello, I'm Xavier Cazalot" ]
                    , span [ class "Header__meta" ]
                        [ text "I’m an entrepreneur and a software engineer." ]
                    ]
                ]
            ]
        , div [ class "Benefits" ]
            [ div [ class "Benefits__block" ]
                [ span [ class "Benefits__title" ]
                    [ text "Business Driven Developer" ]
                , span [ class "Benefits__details" ]
                    [ text "I understand your business model: I build the actual value proposition that meets the needs of your customers." ]
                ]
            , div [ class "Benefits__block" ]
                [ span [ class "Benefits__title" ]
                    [ text "Engineering At Core" ]
                , span [ class "Benefits__details" ]
                    [ text "I come from a mechanical and industrial engineering background: I design products with the right structure to solve the right problem." ]
                ]
            , div [ class "Benefits__block" ]
                [ span [ class "Benefits__title" ]
                    [ text "Open-Source Contributor" ]
                , span [ class "Benefits__details" ]
                    [ text "I always sharpen my technical skills on different experiments. I'm also part of Telescope core team, the biggest Meteor + React open-source app." ]
                ]
            ]
        , div [ class "Testimonial" ]
            [ div [ class "PictureListItem" ]
                [ div [ class "PictureListItem__picture" ]
                    [ img [ alt "Satisfied Client", class "PictureListItem__picture--with-border", src "https://res.cloudinary.com/xavcz/image/upload/v1473680138/testimonial-0_klsjqz.png" ]
                        []
                    ]
                , div [ class "PictureListItem__content PictureListItem__content--in-testimonial" ]
                    [ div [ class "PictureListItem__text" ]
                        [ text "Xavier is an excellent web developer supported by an entrepreneur mindset. He remains always watchful on the legitimacy of a functional evolution compared to business benefits. This is extremely useful and effective during the design process." ]
                    , div [ class "PictureListItem__meta" ]
                        [ text "— Aurélien Basille, CTO @ Cavacave" ]
                    ]
                ]
            ]
        , div [ class "Stack" ]
            [ div [ class "Header Header--dark" ]
                [ div [ class "Header__main" ]
                    [ text "Your business deserves the right tools" ]
                , span [ class "Header__meta" ]
                    [ text "You may recognize your needs in this subset of my toolbox." ]
                ]
            , div [ class "PictureListItem" ]
                [ div [ class "PictureListItem__picture" ]
                    [ img [ alt "React", class "", src "https://res.cloudinary.com/xavcz/image/upload/v1473680136/react_uhbbzg.png" ]
                        []
                    ]
                , div [ class "PictureListItem__content" ]
                    [ div [ class "PictureListItem__text" ]
                        [ text "React is a clever library for structuring the UI and managing the data flow. By breaking the UI into a component hierarchy, it becomes really explicit how your data is flowing throughout the app." ]
                    ]
                ]
            , div [ class "PictureListItem" ]
                [ div [ class "PictureListItem__picture" ]
                    [ img [ alt "GraphQL", class "", src "https://res.cloudinary.com/xavcz/image/upload/v1473680136/graphql_vll4qz.png" ]
                        []
                    ]
                , div [ class "PictureListItem__content" ]
                    [ div [ class "PictureListItem__text" ]
                        [ text "GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. Compared to traditional approaches such as REST, GraphQL is much more efficient." ]
                    ]
                ]
            , div [ class "PictureListItem" ]
                [ div [ class "PictureListItem__picture" ]
                    [ img [ alt "Meteor", class "", src "https://res.cloudinary.com/xavcz/image/upload/v1473680136/meteor_xde2h5.png" ]
                        []
                    ]
                , div [ class "PictureListItem__content" ]
                    [ div [ class "PictureListItem__text" ]
                        [ text "Meteor eases the pain of building great web applications when used as the centerpiece of an architectural stack. It allows to concentrate on developing business value and validate assumptions quickly." ]
                    ]
                ]
            ]
        , div [ class "Testimonial" ]
            [ div [ class "PictureListItem" ]
                [ div [ class "PictureListItem__picture" ]
                    [ img [ alt "Satisfied Client", class "PictureListItem__picture--with-border", src "https://res.cloudinary.com/xavcz/image/upload/v1473680139/testimonial-1_ca1itt.png" ]
                        []
                    ]
                , div [ class "PictureListItem__content PictureListItem__content--in-testimonial" ]
                    [ div [ class "PictureListItem__text" ]
                        [ text "Resourceful and energetic, Xavier is passionated by choosing the right tools, setting them up, and teaching people how to use them. He has the perfect skills to efficiently bootstrap any project. " ]
                    , div [ class "PictureListItem__meta" ]
                        [ text "—\x200AMaxime Pico, Managing Director @ Startup42" ]
                    ]
                ]
            ]
        , div []
            [ div [ class "Header Header--dark" ]
                [ div [ class "Header__main" ] [ text "I'm available for hire" ]
                , span [ class "Header__meta" ] [ text "Each project begins with a conversation. If you’re ready to get the conversation rolling, enter your contact in the boxes below!" ]
                ]
            , viewCallToAction model
            , div [ class "Header__meta" ]
                [ text " You can also reach me on ", a [ href "https://twitter.com/xav_cz", target "_blank" ] [ text "Twitter" ], text "." ]
            , div [ class "Header__meta" ] [ text "You may fork my code on ", a [ href "https://github.com/xavcz", target "_blank" ] [ text "GitHub" ], text "." ]
            , div [ class "Header__meta" ] [ text "And you are invited to read me on ", a [ href "https://medium.com/hack-learn-make", target "_blank" ] [ text "Medium" ], text "." ]
            ]
        , div [ class "Testimonial" ]
            [ div [ class "PictureListItem" ]
                [ div [ class "PictureListItem__picture" ]
                    [ img [ alt "Satisfied Client", class "PictureListItem__picture--with-border", src "https://res.cloudinary.com/xavcz/image/upload/v1473680139/testimonial-2_ngaqbt.png" ]
                        []
                    ]
                , div [ class "PictureListItem__content PictureListItem__content--in-testimonial" ]
                    [ div [ class "PictureListItem__text" ]
                        [ text "Xavier has a very great attitude as a developer: he always wants to deliver the best results. When we discuss the next features/assignment we would like him to work on, he actively thinks along with us to help for deciding how to tackle our current problems." ]
                    , div [ class "PictureListItem__meta" ]
                        [ text "— Chris de Rouck, CTO @ iDronect" ]
                    ]
                ]
            ]
        , div [ class "Footer" ]
            [ div [] [ text "👍 Thanks ", a [ href "http://dominikvayrynen.com/", target "_blank" ] [ text "Dominik Väyrynen" ], text " for the design guidance." ]
            , div [] [ text "🚀 Illustration by ", a [ href " https://dribbble.com/Madebyelvis", target "_blank" ] [ text "MadeByElvis" ], text "." ]
            , div [] [ text "🛠 This fancy page has been built with ", a [ href "https://github.com/xavcz/cazalot-bros", target "_blank" ] [ text "Elm" ], text "!" ]
            ]
        ]


type Msg
    = SetEmail String
    | SetFirstname String
    | SubmitForm
    | HandleSubmitResponse Bool
    | HandleSubmitError Http.Error


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetFirstname firstname ->
            ( { model | firstname = firstname }, Cmd.none )

        SetEmail email ->
            ( { model | email = email }, Cmd.none )

        SubmitForm ->
            ( { model | submitLoading = True }, submitForm model.firstname model.email )

        HandleSubmitResponse submitted ->
            ( { model | submitLoading = False, submitted = submitted }, Cmd.none )

        -- TODO display error message 🤓
        HandleSubmitError error ->
            case error of
                Http.UnexpectedPayload errorMessage ->
                    ( { model | submitLoading = False, submitted = True, errorMessage = Just errorMessage }, Cmd.none )

                _ ->
                    ( { model | submitLoading = False, submitted = True }, Cmd.none )
