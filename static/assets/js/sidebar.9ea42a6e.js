(window.webpackJsonp = window.webpackJsonp || []).push([
	[7], {
			44: function(t, e, i) {
					"use strict";
					
					i.r(e), i.d(e, "initSidebar", function() {
							return E
					});
					var n = document.body,
							o = n.querySelector("#sidebar"),
							r = n.querySelector("#sidebar-toggler"),
							s = n.querySelector(".sidebar-overlay"),
							c = n.querySelector("#sidebar-menu"),
							d = r.cloneNode(!0);
					d.setAttribute("id", "#sidebar-collapse");
					var u, l, a, f, b, p, w = function(t, e) {
									t.forEach(function(t) {
											return t.setAttribute("aria-expanded", e)
									})
							},
							g = function() {
									o.classList.remove("toggled"), w([o, r, d], !1)
							},
							y = function() {
									o.classList.add("toggled"), w([o, r, d], !0), o.focus()
							},
							v = 0,
							h = !1,
							A = !1,
							L = 0,
							m = function() {
									f = window.scrollY, l = n.offsetHeight, a = o.offsetHeight, b = Math.round(f + o.getBoundingClientRect().top), a > u ? f > v ? h ? (h = !1, L = b > 0 ? b : 0, o.setAttribute("style", "top: ".concat(L, "px;"))) : !A && f + u > a + b && a < l && (A = !0, o.setAttribute("style", "position: fixed; bottom: 0;")) : f < v ? A ? (A = !1, L = b > 0 ? b : 0, o.setAttribute("style", "top: ".concat(L, "px;"))) : !h && f < b && (h = !0, o.setAttribute("style", "position: fixed;")) : (h = A = !1, L = b || 0, o.setAttribute("style", "top: ".concat(L, "px;"))) : h || (h = !0, o.setAttribute("style", "position: fixed;")), v = f
							},
							x = function() {
									window.innerWidth, u = window.innerHeight, m()
							},
							E = function() {
									o.setAttribute("tabindex", "-1"), o.insertBefore(d, o.children[1]), w([o, r, d], !1), r.addEventListener("click", y), d.addEventListener("click", g), s.addEventListener("click", g), window.addEventListener("scroll", m), window.addEventListener("resize", function() {
											clearTimeout(p), p = setTimeout(x, 500)
									}), x(), c && c.querySelectorAll(".item.has-children").forEach(function(t) {
											// var e = t.querySelector("button"),
											// 		i = t.querySelector(".sub-menu");
											// w([i, e], !1), e.addEventListener("click", function() {
											// 		var n = t.classList.contains("toggled");
											// 		t.classList[n ? "remove" : "add"]("toggled"), w([i, e], !n)
											// })
									})
							}
			}
	}
]);