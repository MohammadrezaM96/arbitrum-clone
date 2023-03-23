"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [275],
  {
    62615: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return i;
        },
      });
      var d = c(85893),
        e = c(98130),
        f = c(87083),
        g = c(49275),
        h = c(82508);
      function i(a) {
        var b,
          c,
          i = a.size,
          j = a.isClaimingLive,
          k = function () {
            return j
              ? (0, d.jsxs)("span", {
                  children: [
                    "This countdown is an approximation. Claiming will be live until",
                    " ",
                    (0, d.jsxs)(h.d, {
                      className: "underline",
                      href: "https://etherscan.io/block/countdown/".concat(
                        18208e3
                      ),
                      children: ["L1 block ", 18208e3],
                    }),
                    ".",
                  ],
                })
              : (0, d.jsxs)("span", {
                  children: [
                    "This countdown is an approximation. Claiming will be live on",
                    " ",
                    (0, d.jsxs)(h.d, {
                      className: "underline",
                      href: "https://etherscan.io/block/countdown/".concat(
                        16890400
                      ),
                      children: ["L1 block ", 16890400],
                    }),
                    ".",
                  ],
                });
          },
          l =
            ((b = j ? 18208e3 : 16890400),
            (c = new Date(1678867703e3)).setSeconds(
              c.getSeconds() + (b - 16832017) * 12.2
            ),
            c);
        return (0, d.jsx)("section", {
          className: "[ l-Section l-Section--countdown ]".concat(
            "compact" === i ? " compact" : ""
          ),
          children: (0, d.jsxs)("div", {
            className: "c-Countdown",
            children: [
              (0, d.jsx)("h3", {
                className: "c-Countdown__heading",
                children: j
                  ? "Claiming will be live until:"
                  : "Claiming will be live in:",
              }),
              (0, d.jsx)(e.ZP, {
                date: l,
                renderer: function (a) {
                  var b = a.days,
                    c = a.hours,
                    h = a.minutes;
                  return (0, d.jsxs)("span", {
                    className: "c-Countdown__timer",
                    children: [
                      (0, e.Bu)(b),
                      "d ",
                      (0, e.Bu)(c),
                      "h ",
                      (0, e.Bu)(h),
                      "m",
                      (0, d.jsx)(f.ZP, {
                        theme: "dark",
                        content: (0, d.jsx)(k, {}),
                        className: "text-left p-1",
                        interactive: !0,
                        children: (0, d.jsx)(g, { className: "info-icon" }),
                      }),
                    ],
                  });
                },
              }),
            ],
          }),
        });
      }
    },
    33680: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return m;
        },
      });
      var d,
        e,
        f = c(85893),
        g = c(67294),
        h = c(828),
        i = c(29815),
        j = c(28129),
        k = function (a) {
          return "number" == typeof a ? a : a.valueOf();
        };
      ((e = d || (d = {})).GREY = "#808080"),
        (e.GREY_DARK = "#575756"),
        (e.BLUE_DARK = "#2D374B"),
        (e.BLUE_NAVY = "#3751D1"),
        (e.BLUE = "#28A0F0"),
        (e.BLUE_LIGHT = "#96BEDC");
      var l = [
        { name: "DAOs IN ARBITRUM ECOSYSTEM", value: "1.13%" },
        { name: "INDIVIDUAL WALLETS", value: "11.62%" },
        { name: "DAO TREASURY", value: "42.78%" },
        { name: "TEAM AND FUTURE TEAM + ADVISORS", value: "26.94%" },
        { name: "INVESTORS", value: "17.53%" },
      ];
      function m() {
        var a = (0, g.useRef)(null);
        return (
          (0, g.useEffect)(function () {
            if (a.current) {
              var b,
                c,
                e,
                f,
                g,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N,
                O,
                P,
                Q,
                R =
                  ((b = l),
                  (g =
                    void 0 ===
                    (f = (c = {
                      name: function (a) {
                        return a.name;
                      },
                      value: function (a) {
                        return a.value;
                      },
                      width: 600,
                      height: 640,
                      colors: [
                        d.BLUE_LIGHT,
                        d.BLUE,
                        d.BLUE_NAVY,
                        d.BLUE_DARK,
                        d.GREY_DARK,
                      ],
                    }).name)
                      ? function (a) {
                          return (0, h.Z)(a, 1)[0];
                        }
                      : f),
                  (m = c.value),
                  (n =
                    void 0 === m
                      ? function (a) {
                          return (0, h.Z)(a, 2)[1];
                        }
                      : m),
                  (o = c.title),
                  (p =
                    void 0 === o
                      ? function (a) {
                          return "";
                        }
                      : o),
                  (q = c.width),
                  (r = void 0 === q ? 640 : q),
                  (s = c.height),
                  (t = void 0 === s ? 400 : s),
                  (u = c.innerRadius),
                  (v = void 0 === u ? Math.min(r, t) / 4 : u),
                  (w = c.outerRadius),
                  (x = void 0 === w ? Math.min(r, t) / 2.6 : w),
                  (y = c.cornerRadius),
                  (z = void 0 === y ? 6 : y),
                  (A = c.names),
                  (B = c.colors),
                  (C = c.stroke),
                  (D = void 0 === C ? (v > 0 ? "none" : "white") : C),
                  (E = c.strokeWidth),
                  (F = void 0 === E ? 1 : E),
                  (G = c.strokeLinejoin),
                  (H = void 0 === G ? "round" : G),
                  (I = c.padAngle),
                  (J = void 0 === I ? 0.015 : I),
                  (K = j.UID(b, g)),
                  (L = j.UID(b, n)),
                  (M = j.w6H(K.length)),
                  (p = function (a) {
                    return "".concat(K[a], " ").concat(L[a]);
                  }),
                  void 0 === A && (A = K),
                  (A = new j.H0G(A)),
                  void 0 === B && (B = (0, i.Z)(j.lqd[A.size])),
                  void 0 === B &&
                    (B = j.q$2(function (a) {
                      return j.T0$(0.8 * a + 0.1);
                    }, A.size)),
                  (N = j.PKp(A, B)),
                  (O = j
                    .ve8()
                    .padAngle(J)
                    .sort(null)
                    .value(function (a) {
                      return Number(L[k(a)].split("%")[0]);
                    })(M)),
                  (P = j.Nb1().innerRadius(v).outerRadius(x).cornerRadius(z)),
                  (Q = j
                    .Ue8("svg")
                    .attr("width", r)
                    .attr("height", t)
                    .attr("viewBox", [-r / 2, -t / 2, r, t])
                    .attr(
                      "style",
                      "max-width: 100%; height: auto; height: intrinsic;"
                    )),
                  Q.append("line")
                    .style("stroke", d.GREY)
                    .attr("x1", -180)
                    .attr("y1", -120)
                    .attr("x2", -180)
                    .attr("y2", -270),
                  Q.append("rect")
                    .style("stroke", d.GREY)
                    .attr("x", -220)
                    .attr("y", -270)
                    .attr("width", 170)
                    .attr("height", 30),
                  Q.append("circle")
                    .attr("cx", -205)
                    .attr("cy", -255)
                    .attr("r", 8)
                    .attr("fill", d.GREY_DARK),
                  Q.append("text")
                    .attr(
                      "font-family",
                      '"Maison Neue Mono", "Courier New", Courier, monospace'
                    )
                    .attr("font-size", 13)
                    .attr("text-anchor", "start")
                    .style("fill", "white")
                    .text(p(4))
                    .attr("x", -190)
                    .attr("y", -250),
                  Q.append("line")
                    .style("stroke", d.GREY)
                    .attr("x1", 10)
                    .attr("y1", -220)
                    .attr("x2", 10)
                    .attr("y2", -320),
                  Q.append("rect")
                    .style("stroke", d.GREY)
                    .attr("x", -80)
                    .attr("y", -320)
                    .attr("width", 307)
                    .attr("height", 30),
                  Q.append("circle")
                    .attr("cx", -65)
                    .attr("cy", -305)
                    .attr("r", 8)
                    .attr("fill", d.BLUE_LIGHT),
                  Q.append("text")
                    .attr(
                      "font-family",
                      '"Maison Neue Mono", "Courier New", Courier, monospace'
                    )
                    .attr("font-size", 13)
                    .attr("text-anchor", "start")
                    .style("fill", "white")
                    .text(p(0))
                    .attr("x", -50)
                    .attr("y", -300),
                  Q.append("line")
                    .style("stroke", d.GREY)
                    .attr("x1", 90)
                    .attr("y1", -200)
                    .attr("x2", 90)
                    .attr("y2", -270),
                  Q.append("rect")
                    .style("stroke", d.GREY)
                    .attr("x", 50)
                    .attr("y", -270)
                    .attr("width", 248)
                    .attr("height", 30),
                  Q.append("circle")
                    .attr("cx", 65)
                    .attr("cy", -255)
                    .attr("r", 8)
                    .attr("fill", d.BLUE),
                  Q.append("text")
                    .attr(
                      "font-family",
                      '"Maison Neue Mono", "Courier New", Courier, monospace'
                    )
                    .attr("font-size", 13)
                    .attr("text-anchor", "start")
                    .style("fill", "white")
                    .text(p(1))
                    .attr("x", 80)
                    .attr("y", -250),
                  Q.append("line")
                    .style("stroke", d.GREY)
                    .attr("x1", -150)
                    .attr("y1", 170)
                    .attr("x2", -150)
                    .attr("y2", 250),
                  Q.append("rect")
                    .style("stroke", d.GREY)
                    .attr("x", -300)
                    .attr("y", 250)
                    .attr("width", 360)
                    .attr("height", 30),
                  Q.append("circle")
                    .attr("cx", -285)
                    .attr("cy", 265)
                    .attr("r", 8)
                    .attr("fill", d.BLUE_DARK),
                  Q.append("text")
                    .attr(
                      "font-family",
                      '"Maison Neue Mono", "Courier New", Courier, monospace'
                    )
                    .attr("font-size", 13)
                    .attr("text-anchor", "start")
                    .style("fill", "white")
                    .text(p(3))
                    .attr("x", -270)
                    .attr("y", 270),
                  Q.append("line")
                    .style("stroke", d.GREY)
                    .attr("x1", 165)
                    .attr("y1", 150)
                    .attr("x2", 165)
                    .attr("y2", 220),
                  Q.append("rect")
                    .style("stroke", d.GREY)
                    .attr("x", 100)
                    .attr("y", 220)
                    .attr("width", 198)
                    .attr("height", 30),
                  Q.append("circle")
                    .attr("cx", 115)
                    .attr("cy", 235)
                    .attr("r", 8)
                    .attr("fill", d.BLUE_NAVY),
                  Q.append("text")
                    .attr(
                      "font-family",
                      '"Maison Neue Mono", "Courier New", Courier, monospace'
                    )
                    .attr("font-size", 13)
                    .attr("text-anchor", "start")
                    .style("fill", "white")
                    .text(p(2))
                    .attr("x", 130)
                    .attr("y", 240),
                  Q.append("g")
                    .attr("stroke", D)
                    .attr("stroke-width", F)
                    .attr("stroke-linejoin", H)
                    .selectAll("path")
                    .data(O)
                    .join("path")
                    .attr("fill", function (a) {
                      return N(K[k(a.data)]);
                    })
                    .attr("d", P)
                    .append("title")
                    .text(function (a) {
                      return p(k(a.data));
                    }),
                  Object.assign(
                    null !== (e = Q.node()) && void 0 !== e ? e : {},
                    { scales: { color: N } }
                  ));
              0 === a.current.childElementCount && a.current.appendChild(R);
            }
          }, []),
          (0, f.jsx)("div", { ref: a })
        );
      }
    },
    60487: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return h;
        },
      });
      var d = c(85893),
        e = c(41664),
        f = c.n(e),
        g = c(82508);
      function h() {
        var a = function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("hr", { className: "margin-top-xxlarge" }),
            (0, d.jsx)("footer", {
              children: (0, d.jsxs)("div", {
                className: "l-Footer",
                children: [
                  (0, d.jsxs)("div", {
                    className: "l-Footer__links",
                    children: [
                      (0, d.jsxs)("ul", {
                        children: [
                          (0, d.jsx)("li", {
                            className: "l-Footer__label",
                            children: "Learn More",
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://forum.arbitrum.foundation/",
                              children: "View Proposals",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://arbitrumfoundation.medium.com/arbitrum-the-next-phase-of-decentralization-e7f8b37b5226",
                              children: "Read the Vision",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://developer.arbitrum.io",
                              children: "Read Developer Docs",
                            }),
                          }),
                        ],
                      }),
                      (0, d.jsxs)("ul", {
                        children: [
                          (0, d.jsx)("li", {
                            className: "l-Footer__label",
                            children: "Resources",
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://arbitrumfoundation.medium.com",
                              children: "Blog",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(f(), {
                              href: "/tos",
                              children: "Terms of Service",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(f(), {
                              href: "/privacy",
                              children: "Privacy Notice",
                            }),
                          }),
                        ],
                      }),
                      (0, d.jsxs)("ul", {
                        children: [
                          (0, d.jsx)("li", {
                            className: "l-Footer__label",
                            children: "Ecosystem",
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://portal.arbitrum.io",
                              children: "App Portal",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://bridge.arbitrum.io",
                              children: "Bridge",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://research.arbitrum.io",
                              children: "Research Forum",
                            }),
                          }),
                        ],
                      }),
                      (0, d.jsxs)("ul", {
                        children: [
                          (0, d.jsx)("li", {
                            className: "l-Footer__label",
                            children: "Talk to us",
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)("a", {
                              href: "mailto:info@arbitrum.foundation",
                              children: "info@arbitrum.foundation",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://discord.gg/arbitrum",
                              children: "Discord",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            children: (0, d.jsx)(g.d, {
                              href: "https://twitter.com/arbitrum",
                              children: "Twitter",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: "l-Footer__subscribe",
                    children: [
                      (0, d.jsxs)("div", {
                        children: [
                          (0, d.jsx)("span", {
                            className: "l-Footer__label",
                            children: "Join the community",
                          }),
                          (0, d.jsx)("p", {
                            className: "l-Footer__subscribe-lede",
                            children:
                              "Sign up to our newsletter for updates, announcements, and more.",
                          }),
                          (0, d.jsx)("iframe", {
                            title: "Form",
                            src: "/embed/newsletter",
                            width: "100%",
                          }),
                        ],
                      }),
                      (0, d.jsx)("button", {
                        onClick: a,
                        className: "c-BackToTop mt-8",
                        children: "Back to top",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    39605: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return g;
        },
      });
      var d = c(85893);
      c(77090);
      var e = c(25675),
        f = c.n(e);
      function g(a) {
        var b = a.imageObj,
          c = a.layout,
          e = void 0 === c ? "responsive" : c,
          g = a.hasPadding,
          h = void 0 !== g && g,
          i = a.className;
        return (0, d.jsx)("div", {
          className: "c-LazyImage "
            .concat("fill" !== e || h ? "" : "is-contained", " ")
            .concat("fill" === e && h ? "has-padding" : "")
            .concat(i ? " " + i : ""),
          style: {
            paddingBottom: h
              ? "".concat((b.height / b.width) * 100, "%")
              : void 0,
          },
          children: (0, d.jsx)(f(), {
            layout: e,
            className: "lazyload",
            "data-src": b.sizes[0],
            src: b.sizes[0],
            width: b.width,
            height: b.height,
            alt: b.alt,
            lazyBoundary: "500px",
          }),
        });
      }
    },
    2292: function (a, b, c) {
      c.d(b, {
        Z: function () {
          return l;
        },
      });
      var d = c(41799),
        e = c(69396),
        f = c(85893),
        g = c(93096),
        h = c.n(g),
        i = c(67294),
        j = c(85518),
        k = c(39605);
      function l(a) {
        var b = a.elements,
          c = (0, i.useState)(0),
          g = c[0],
          l = c[1],
          m = (0, i.useState)(!1),
          n = m[0],
          o = m[1],
          p = function () {
            return l(window.scrollY);
          };
        return (
          (0, i.useEffect)(function () {
            var a = h()(p, 10);
            return (
              window.removeEventListener("scroll", a),
              window.addEventListener("scroll", a, { passive: !0 }),
              function () {
                return window.removeEventListener("scroll", a);
              }
            );
          }, []),
          (0, i.useEffect)(function () {
            o(!0);
          }, []),
          (0, f.jsx)(f.Fragment, {
            children:
              n &&
              (0, f.jsx)(f.Fragment, {
                children: b.map(function (a, b) {
                  var c;
                  return (0,
                  f.jsx)("div", { className: "c-ParallaxElement ".concat(a.setBack ? "" : "scroll-touch"), style: { transform: ((c = a.transformOffset), j.tq && c ? "scale(.5) translateY(0)" : "scale(.5) translateY(-".concat(g * c, "px)")), width: a.width, height: a.height, inset: a.inset, zIndex: a.setBack ? "-2" : "-1" }, children: (0, f.jsx)(k.Z, { layout: "fill", imageObj: (0, e.Z)((0, d.Z)({}, a.image), { width: 100, height: 100 }) }) }, b);
                }),
              }),
          })
        );
      }
    },
  },
]);
