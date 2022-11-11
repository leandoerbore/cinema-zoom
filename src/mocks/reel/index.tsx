export type Position = "positionUp" | "positionDown"
export interface mockData {
    variant: "today" | "soon";
    position: Position
    data: {
        description: string;
        producer: string;
        time: string;
        premier: string;
        country: string;
        title: string;
        img: string;
        released: boolean
    }[]
}

export const mockDataToday: mockData = {
    variant: "soon",
    position: "positionDown",
    data: [
        {
            title: "Донбасс Окраина",
            img: "/images/donbass.png",
            description: "Офицер ополчения спасает уцелевших от бомбежек в ДНР, русских и украинцев. Военная драма Рената Давлетьярова",
            producer: "Ренат Давлетьяров",
            time: "1 час 36 минут",
            premier: "12 июня 2019",
            country: "Россия",
            released: false,
        },
        {
            title: "Бэтмен",
            img: "/images/batman.png",
            description: "После двух лет поисков правосудия на улицах Готэма для своих сограждан Бэтмен становится олицетворением беспощадного возмездия. Когда в городе происходит серия жестоких нападений на представителей элиты, загадочные улики приводят Брюса Уэйна в самые темные закоулки преступного мира, где он встречает Женщину-Кошку, Пингвина, Кармайна Фальконе и Загадочника. Теперь под прицелом оказывается сам Бэтмен, которому предстоит отличить друга от врага и восстановить справедливость во имя Готэма.",
            producer: "Мэтт Ривз",
            time: "2 часа 56 минут",
            premier: "1 марта 2022г.",
            country: "США",
            released: false,
        },
        {
            title: "Крым",
            img: "/images/krim.png",
            description: "История о любви, вере и чести, о силе духа и настоящей дружбе на фоне реальных событий крымской весны 2014 года. Судьба свела их в Крыму близ древнего города Мангуп-Кале. Это была любовь с первого взгляда… В непростые дни исторических перемен они должны сохранить свою жизнь и любовь.",
            producer: "Алексей Пиманов",
            time: "1 час 39 минут",
            premier: "28 сентября 2017",
            country: "Россия",
            released: false,
        },
        {
            title: "Три тысячи лет желаний",
            img: "/images/wishes.png",
            description: "Британская лингвистка Алетея прилетает из Лондона в Стамбул, чтобы прочитать курс лекций по нарративу. Уже в аэропорту женщина начинает видеть загадочных существ, а когда в одной из многочисленных сувенирных лавочек покупает стеклянную бутылочку и пытается её отмыть, перед ней возникает самый настоящий джинн. Алетея не торопится загадывать три желания, ей интереснее послушать его историю. Джинн начинает свой рассказ.",
            producer: "Джордж Миллер",
            time: "1 час 36 минут",
            premier: "8 сентября 2022 г.",
            country: "США, Австралия",
            released: false,
        },
        {
            title: "Kingsman: Секретная служба",
            description: "Тайная шпионская организация вербует в свои ряды лондонского гопника. Смешная и брутальная экранизация комикса",
            producer: "Адам Болинг, Дэвид Рейд, Мэттью Вон",
            time: "2 часа 10 минут",
            premier:  "12 февраля 2015",
            country: "Великобритания, США",
            img: "/images/kingsman.png",
            released: false,
        },
        {
            title: "Евангелион",
            description: "2015 год, Токио-3. 15 лет назад произошёл Второй удар, в результате чего Антарктида растаяла, Землю накрыла глобальная катастрофа, и большая часть человечества погибла. Но на месте выясняется, что Синдзи должен прямо сейчас залезть в робота и сражаться с Ангелом.",
            producer: "Хидэаки Анно",
            time: "1 час 40 минут",
            premier: "4 октября 1995",
            country: "Япония",
            img: "/images/evangelion.png",
            released: false,
        },
        {
            title: "Шрэк 2",
            description: "Шрэк и Фиона возвращаются после медового месяца и находят письмо от родителей Фионы с приглашением на ужин. Однако те не подозревают, что их дочь тоже стала огром! Вместе с Осликом счастливая пара отправляется в путешествие, полное неожиданностей, и попадает в круговорот событий, во время которых приобретает множество друзей…",
            producer: "Дэвид Липман, Арон Уорнер, Джон Х. Уильямс",
            time: "1 час 33 минут",
            premier: "19 августа 2004",
            country: "США" ,
            img: "/images/shrek.png",
            released: false,
        },
        {
            title: "Мегамозг",
            description: "Мегамозг – самый гениальный и самый неудачливый злодей в мире. Вот уже много лет он пытается покорить Метро-Сити самыми разнообразными способами. Но каждая такая попытка кончается провалом по вине супергероя по имени Метро-Мэн. Сможет ли злой гений стать героем – спасителем человечества.",
            producer: "Том МакГрат",
            time: "1 час 35 минут",
            premier: "28 октября 2010",
            country: "США",
            img: "/images/megamozg.png",
            released: false,
        },
    ]
}

export const mockDataSoon: mockData= {
    variant: "today",
    position: "positionUp",
    data: [
        {
            title: "Донбасс Окраина",
            img: "/images/donbass.png",
            description: "Офицер ополчения спасает уцелевших от бомбежек в ДНР, русских и украинцев. Военная драма Рената Давлетьярова",
            producer: "Ренат Давлетьяров",
            time: "1 час 36 минут",
            premier: "12 июня 2019",
            country: "Россия",
            released: true,
        },
        {
            title: "Бэтмен",
            img: "/images/batman.png",
            description: "После двух лет поисков правосудия на улицах Готэма для своих сограждан Бэтмен становится олицетворением беспощадного возмездия. Когда в городе происходит серия жестоких нападений на представителей элиты, загадочные улики приводят Брюса Уэйна в самые темные закоулки преступного мира, где он встречает Женщину-Кошку, Пингвина, Кармайна Фальконе и Загадочника. Теперь под прицелом оказывается сам Бэтмен, которому предстоит отличить друга от врага и восстановить справедливость во имя Готэма.",
            producer: "Мэтт Ривз",
            time: "2 часа 56 минут",
            premier: "1 марта 2022г.",
            country: "США",
            released: true,
        },
        {
            title: "Крым",
            img: "/images/krim.png",
            description: "История о любви, вере и чести, о силе духа и настоящей дружбе на фоне реальных событий крымской весны 2014 года. Судьба свела их в Крыму близ древнего города Мангуп-Кале. Это была любовь с первого взгляда… В непростые дни исторических перемен они должны сохранить свою жизнь и любовь.",
            producer: "Алексей Пиманов",
            time: "1 час 39 минут",
            premier: "28 сентября 2017",
            country: "Россия",
            released: true,
        },
        {
            title: "Три тысячи лет желаний",
            img: "/images/wishes.png",
            description: "Британская лингвистка Алетея прилетает из Лондона в Стамбул, чтобы прочитать курс лекций по нарративу. Уже в аэропорту женщина начинает видеть загадочных существ, а когда в одной из многочисленных сувенирных лавочек покупает стеклянную бутылочку и пытается её отмыть, перед ней возникает самый настоящий джинн. Алетея не торопится загадывать три желания, ей интереснее послушать его историю. Джинн начинает свой рассказ.",
            producer: "Джордж Миллер",
            time: "1 час 36 минут",
            premier: "8 сентября 2022 г.",
            country: "США, Австралия",
            released: true,
        },
        {
            title: "Kingsman: Секретная служба",
            description: "Тайная шпионская организация вербует в свои ряды лондонского гопника. Смешная и брутальная экранизация комикса",
            producer: "Адам Болинг, Дэвид Рейд, Мэттью Вон",
            time: "2 часа 10 минут",
            premier:  "12 февраля 2015",
            country: "Великобритания, США",
            img: "/images/kingsman.png",
            released: true,
        },
        {
            title: "Евангелион",
            description: "2015 год, Токио-3. 15 лет назад произошёл Второй удар, в результате чего Антарктида растаяла, Землю накрыла глобальная катастрофа, и большая часть человечества погибла. Но на месте выясняется, что Синдзи должен прямо сейчас залезть в робота и сражаться с Ангелом.",
            producer: "Хидэаки Анно",
            time: "1 час 40 минут",
            premier: "4 октября 1995",
            country: "Япония",
            img: "/images/evangelion.png",
            released: true,
        },
        {
            title: "Шрэк 2",
            description: "Шрэк и Фиона возвращаются после медового месяца и находят письмо от родителей Фионы с приглашением на ужин. Однако те не подозревают, что их дочь тоже стала огром! Вместе с Осликом счастливая пара отправляется в путешествие, полное неожиданностей, и попадает в круговорот событий, во время которых приобретает множество друзей…",
            producer: "Дэвид Липман, Арон Уорнер, Джон Х. Уильямс",
            time: "1 час 33 минут",
            premier: "19 августа 2004",
            country: "США" ,
            img: "/images/shrek.png",
            released: true,
        },
        {
            title: "Мегамозг",
            description: "Мегамозг – самый гениальный и самый неудачливый злодей в мире. Вот уже много лет он пытается покорить Метро-Сити самыми разнообразными способами. Но каждая такая попытка кончается провалом по вине супергероя по имени Метро-Мэн. Сможет ли злой гений стать героем – спасителем человечества.",
            producer: "Том МакГрат",
            time: "1 час 35 минут",
            premier: "28 октября 2010",
            country: "США",
            img: "/images/megamozg.png",
            released: true,
        },
    ]
}