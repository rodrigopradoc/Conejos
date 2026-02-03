(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4145],
  {
    47983: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index",
        function () {
          return i(25832);
        },
      ]);
    },
    33284: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var a = (0, i(31134).Z)("palette", [
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "path",
          {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
          },
        ],
      ]);
    },
    26499: function (e, t, i) {
      "use strict";
      var a = i(24043),
        n = i(85893),
        o = i(67353),
        s = i(67294),
        l = i(33284),
        r = i(30461);
      t.Z = function (e) {
        var t = e.colors,
          i = void 0 === t ? [] : t,
          c = e.maxWidth,
          d = e.minWidth,
          m = (0, a._)((0, s.useState)(!1), 2),
          u = m[0],
          p = m[1],
          v = (0, r.$)().t;
        return 0 === i.length
          ? null
          : (0, n.jsx)(o.E.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 1, delay: 1.2 } },
              className: "pointer-events-none fixed bottom-16 z-30 w-full",
              children: (0, n.jsx)("div", {
                className: "mx-auto flex w-full ".concat(
                  (void 0 === c ? void 0 : c) || "max-w-md",
                  " justify-end"
                ),
                children: (0, n.jsxs)("div", {
                  className: "pointer-events-auto relative",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: function () {
                        return p(!u);
                      },
                      className:
                        "mr-5 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#575757]",
                      children: (0, n.jsx)(l.Z, {
                        className: "h-6 w-6",
                        strokeWidth: 1.5,
                        color: "white",
                      }),
                    }),
                    u &&
                      (0, n.jsx)(o.E.div, {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 10 },
                        className:
                          "absolute bottom-full right-5 mb-2 w-auto rounded-lg bg-white p-2 shadow-lg",
                        children: (0, n.jsx)("div", {
                          className:
                            "relative flex w-auto flex-col gap-2 ".concat(
                              (void 0 === d ? void 0 : d) || ""
                            ),
                          children: i.map(function (e, t) {
                            return (0,
                            n.jsxs)("a", { className: "flex items-center justify-start gap-2", href: e.href, children: [(0, n.jsx)("div", { className: "h-4 w-4 rounded-full border-2 border-[#575757] ".concat(e.value, " ").concat(0 === t ? "animate-pulse" : "") }), (0, n.jsx)("span", { className: "text-sm capitalize ".concat(0 === t ? "underline" : ""), children: v("product.color.".concat(e.name)) })] }, t);
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            });
      };
    },
    7248: function (e, t, i) {
      "use strict";
      var a = new Date();
      a.setDate(a.getDate() + 180),
        (t.Z = {
          id: "1SeLAg4yEmMdOK0iJTMCLw6qfQPCEwcbaWMd8WjnQxxo",
          slug: "manuel-y-carmen",
          languages: ["en", "es"],
          invitation: {
            demo: !0,
            date: a,
            person1: "Rodrigo",
            person2: "Brisa",
            coupleImg: "/invitations/manuel-y-carmen-elegant/cover.jpg",
            song: "https://static.hyperions.work/song1.mp3",
          },
          assistForm: {
            assist: {
              order: 1,
              type: "radio",
              options: ["yes", "no"],
              required: !0,
            },
            adultsCount: {
              order: 2,
              type: "select",
              options: ["1", "2", "3", "4", "5", "6"],
              required: !0,
            },
            kidsCount: {
              type: "select",
              options: ["0", "1", "2", "3", "4", "5", "6"],
              required: !0,
              order: 3,
            },
            bus: {
              order: 4,
              type: "radio",
              options: ["1", "2"],
              hiddenFilters: ["2"],
              required: !0,
            },
            song: { order: 5, type: "string", required: !1 },
          },
          customLabels: {
            es: {
              "invitation.clic.to.enter": "\xa1Pulsa aqu\xed y desliza!",
              "invitation.we.marry": "\xa1NOS CASAMOS!",
              "invitation.quote.text.1":
                "Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.\n Mateo 19:6",
              "invitation.quote.text.2":
                "Queremos que se\xe1is testigos de nuestro amor acompa\xf1\xe1ndonos en este d\xeda tan especial",
              "invitation.place.clic.maps": "Pulsa para ver en Maps",
              "invitation.place.title.1": "CEREMONIA",
              "invitation.place.address.title.1": "Fundo Villa Luisa",
              "invitation.place.address.1": "Cieneguilla, Lima",
              "invitation.place.address.sub.1": "15593 Cieneguilla",
              "invitation.place.address.hour.1": "16:00 h",
              "invitation.place.address.href.1":
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12628.690219767157!2d-76.7950407296337!3d-12.099774437942223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105eb001fdaf225%3A0x688c3ce8e79c4e89!2sFundo%20Villa%20Luisa!5e0!3m2!1ses-419!2spe!4v1769717985072!5m2!1ses-419!2spe",
              "invitation.dress.code.title.1": "DRESS CODE",
              "invitation.dress.code.type.1.1": "FORMAL",
              "invitation.dress.code.type.text.1.1":
                "El blanco est\xe1 reservado para la novia,<br/>\xa1nos encantar\xe1 verte en otros colores!",
              "invitation.clic.to.see": "Pulsa para ver",
              "invitation.assist.title.1": "ASISTENCIA",
              "invitation.assist.subtitle.1": "\xbfNos acompa\xf1as?",
              "invitation.assist.clic": "Pulsa aqu\xed para confirmar",
              "invitation.itinerary.title.1": "ITINERARIO",
              "invitation.gift.title.1": "REGALO",
              "invitation.gift.text.1":
                "Nuestro mejor regalo es que est\xe9s con nosotros en nuestro d\xeda, pero si quieres hacernos un obsequio, \xa1aqu\xed est\xe1 nuestro n\xfamero de cuenta!",
              "invitation.gift.account.title.1.1": "Rodrigo y Brisa",
              "invitation.gift.account.1.1": "ESXX XXXX XXXX XXXX XXXX",
              "invitation.photo.carousel.title.1": "Recuerdos de\nnuestro amor",
              "invitation.qr.title.1": "\xc1LBUM DE FOTOS",
              "invitation.qr.subtitle.1":
                "\xa1Ay\xfadanos a inmortalizar cada momento!",
              "invitation.qr.text.1":
                "Escanea este QR o haz clic en \xe9l y comparte las fotos que tomes durante la boda. \xa1Nos har\xe1 much\xedsima ilusi\xf3n verlas!",
              "invitation.qr.code.label.1": "C\xf3digo del \xe1lbum",
              "invitation.qr.code.1": "BODA-M&C",
              "invitation.counter.title.1": "NOS VEMOS EN...",
            },
            en: {
              "invitation.clic.to.enter": "Click here and slide!",
              "invitation.we.marry": "WE ARE GETTING MARRIED!",
              "invitation.quote.text.1":
                "When destiny unites two souls, neither time nor distance can separate them.",
              "invitation.quote.text.2":
                "We would love for you to be with us on this very special day",
              "invitation.place.clic.maps": "Tap to open in Maps",
              "invitation.place.title.1": "CEREMONY",
              "invitation.place.address.title.1": "CATHEDRAL OF PALMA",
              "invitation.place.address.img.src.1": "/invitations/place1.jpg",
              "invitation.place.address.1": "Pla\xe7a de la Seu, Centro",
              "invitation.place.address.sub.1": "07001 Palma",
              "invitation.place.address.hour.1": "6:00 PM",
              "invitation.place.address.href.1":
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6151.304720947887!2d2.6483273!3d39.56744555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792457daf8f55%3A0x540c9be89afd81aa!2sCatedral-Bas%C3%ADlica%20de%20Santa%20Mar%C3%ADa%20de%20Mallorca!5e0!3m2!1ses!2ses!4v1742633157812!5m2!1sen!2ses",
              "invitation.place.title.2": "RECEPTION",
              "invitation.place.address.title.2": "S'OLIVARET RESTAURANT",
              "invitation.place.address.img.src.2": "/invitations/place2.jpg",
              "invitation.place.address.2": "Carretera Alar\xf3-Orient, KM 3,",
              "invitation.place.address.sub.2": "07340 Alar\xf3,",
              "invitation.place.address.hour.2": "7:30 PM",
              "invitation.place.address.href.2":
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.6683505500055!2d2.802171254092839!3d39.73440297632312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297e9c8566df2d5%3A0x7651cbc49055958d!2sHotel%20Rural%20S'Olivaret%20%26%20Spa!5e0!3m2!1ses!2ses!4v1764938071659!5m2!1sen!2ses",
              "invitation.dress.code.title.1": "DRESS CODE",
              "invitation.dress.code.type.1.1": "FORMAL",
              "invitation.dress.code.type.text.1.1":
                "White is reserved for the bride,<br/>we’d love to see you in other colors!",
              "invitation.bus.place.clic": "Tap to view stop location",
              "invitation.bus.title.1": "BUS",
              "invitation.bus.text.1":
                "To make it easier to get from the Church to the restaurant, we will provide the following bus service:",
              "invitation.hotels.title.1": "ACCOMODATION",
              "invitation.hotels.text.1":
                "If you would like to stay overnight in the area, here are some options to help you plan your reservation.",
              "invitation.clic.to.see": "Tap to view",
              "invitation.assist.title.1": "ASSISTANCE",
              "invitation.assist.subtitle.1": "Will you join us?",
              "invitation.assist.clic": "Tap here to confirm",
              "invitation.gift.title.1": "GIFT",
              "invitation.gift.text.1":
                "Your presence is the most special gift on our big day, but if you would like to give us a present, here is our account number!",
              "invitation.gift.account.title.1.1": "Rodrigo y Brisa",
              "invitation.gift.account.1.1": "ESXX XXXX XXXX XXXX XXXX",
              "invitation.photo.carousel.title.1": "Memories of\nour love",
              "invitation.qr.title.1": "PHOTO ALBUM",
              "invitation.qr.subtitle.1": "Help us capture every moment!",
              "invitation.qr.text.1":
                "Scan this QR or tap it to upload the photos you take during the wedding. We can’t wait to see them!",
              "invitation.qr.code.label.1": "Album Code",
              "invitation.qr.code.1": "BODA-M&C",
              "invitation.counter.title.1": "SEE YOU IN...",
            },
          },
        });
    },
    13032: function (e, t, i) {
      "use strict";
      i.d(t, {
        J: function () {
          return n;
        },
      });
      var a = i(85893),
        n = function (e, t, i, n) {
          var o,
            s,
            l,
            r,
            c,
            d,
            m,
            u,
            p =
              !(arguments.length > 4) ||
              void 0 === arguments[4] ||
              arguments[4],
            v = p
              ? ""
                  .concat(
                    null == e
                      ? void 0
                      : null === (o = e.invitation) || void 0 === o
                      ? void 0
                      : o.person1,
                    " & "
                  )
                  .concat(
                    null == e
                      ? void 0
                      : null === (s = e.invitation) || void 0 === s
                      ? void 0
                      : s.person2
                  )
              : ""
                  .concat(
                    null == e
                      ? void 0
                      : null === (l = e.invitation) || void 0 === l
                      ? void 0
                      : l.person1,
                    " "
                  )
                  .concat(
                    (null == e
                      ? void 0
                      : null === (r = e.invitation) || void 0 === r
                      ? void 0
                      : r.person1LastName) || ""
                  ),
            f = "es" === i ? "/".concat(n) : "/".concat(i, "/").concat(n);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("title", { children: v }),
              (0, a.jsx)("meta", { name: "author", content: "Specially Love" }),
              (0, a.jsx)("meta", { name: "color-scheme", content: "light" }),
              (0, a.jsx)("meta", { property: "og:title", content: v }),
              (0, a.jsx)("meta", {
                property: "og:description",
                content: t("invitation.page.seo.title"),
              }),
              (0, a.jsx)("meta", {
                property: "og:url",
                content: "https://specially.love".concat(f),
              }),
              (0, a.jsx)("meta", {
                property: "og:image",
                content: "https://specially.love".concat(
                  (null == e
                    ? void 0
                    : null === (c = e.invitation) || void 0 === c
                    ? void 0
                    : c.coupleImgSeo) ||
                    (null == e
                      ? void 0
                      : null === (d = e.invitation) || void 0 === d
                      ? void 0
                      : d.coupleImg)
                ),
              }),
              (0, a.jsx)("meta", { property: "og:type", content: "website" }),
              (0, a.jsx)("meta", {
                property: "og:site_name",
                content: "Specially Love",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, a.jsx)("meta", { name: "twitter:title", content: v }),
              (0, a.jsx)("meta", {
                name: "twitter:description",
                content: t("invitation.page.seo.title"),
              }),
              (0, a.jsx)("meta", {
                name: "twitter:image",
                content: "https://specially.love".concat(
                  (null == e
                    ? void 0
                    : null === (m = e.invitation) || void 0 === m
                    ? void 0
                    : m.coupleImgSeo) ||
                    (null == e
                      ? void 0
                      : null === (u = e.invitation) || void 0 === u
                      ? void 0
                      : u.coupleImg)
                ),
              }),
              (0, a.jsx)("meta", { name: "google", content: "notranslate" }),
              (0, a.jsx)("meta", {
                name: "robots",
                content: "noindex, nofollow",
              }),
            ],
          });
        };
    },
    25832: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return y;
          },
        });
      var a = i(72253),
        n = i(14932),
        o = i(85893),
        s = i(52471),
        l = i.n(s),
        r = i(40144),
        c = i.n(r),
        d = i(9008),
        m = i.n(d),
        u = i(11163),
        p = i(87904),
        v = i(30461),
        f = i(13032),
        h = i(26499),
        g = i(7248);
      function y() {
        var e = (0, u.useRouter)().query,
          t = e.name1,
          i = e.name2,
          s = e.date,
          r = (0, v.$)(
            (null === g.Z || void 0 === g.Z ? void 0 : g.Z.customLabels) || {}
          ),
          d = r.t,
          y = r.locale;
        if (!g.Z.languages.includes(y))
          return (0, o.jsx)("p", {
            children: "Esta invitaci\xf3n no est\xe1 disponible en este idioma",
          });
        var b = (0, n._)((0, a._)({}, g.Z), {
          invitation: (0, a._)({}, g.Z.invitation),
        });
        if (t && i && s) {
          var x = sessionStorage.getItem("previewImage");
          b.invitation = (0, n._)((0, a._)({}, g.Z.invitation), {
            coupleImg: x || g.Z.invitation.coupleImg,
            person1: t,
            person2: i,
            date: s,
          });
        }
        var w = [
          { type: "mainPhoto" },
          { type: "coupleName" },
          { type: "date" },
          { type: "quote" },
          { type: "place" },
          { type: "place" },
          { type: "dressCode" },
          { type: "quote" },
          { type: "assist", coupleData: g.Z },
          {
            type: "photo",
            imgSrc: "/invitations/manuel-y-carmen-elegant/0.jpg",
          },
          { type: "gift", accounts: [1] },
          {
            type: "qr",
            imgUrl: "https://photos.app.goo.gl/XdjgDkia8WV5GkzJ7",
            imgSrc: "/invitations/test/qr.png",
          },
          {
            type: "photoCarousel",
            photos: [
              { src: "/invitations/manuel-y-carmen-elegant/1.jpg" },
              { src: "/invitations/manuel-y-carmen-elegant/2.jpg" },
              { src: "/invitations/manuel-y-carmen-elegant/3.jpg" },
            ],
          },
          { type: "timer" },
        ];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(m(), { children: (0, f.J)(g.Z, d, y, g.Z.slug) }),
            (0, o.jsx)(p.J, {
              t: d,
              data: b,
              blocks: w,
              theme: "white",
              fonts: {
                coverFont: "font-amsterdam",
                titleFont: "font-amsterdam",
                subtitleFont: l().className,
                contentFont: c().className,
              },
            }),
            (0, o.jsx)(h.Z, {
              colors: [
                { name: "white", value: "bg-white", href: "index" },
                { name: "beige", value: "bg-[#c3bcb4]", href: "index-beige" },
                {
                  name: "terracota",
                  value: "bg-[#d58e76]",
                  href: "index-terracota",
                },
              ],
            }),
          ],
        });
      }
      i(79669);
    },
    40144: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__contentFont_b2dd9e', '__contentFont_Fallback_b2dd9e'",
        },
        className: "__className_b2dd9e",
      };
    },
    52471: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__altFont_146def', '__altFont_Fallback_146def'",
        },
        className: "__className_146def",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3957, 7353, 1623, 3657, 362, 8130, 7513, 3906, 1126, 7904, 2888, 9774,
        179,
      ],
      function () {
        return e((e.s = 47983));
      }
    ),
      (_N_E = e.O());
  },
]);
