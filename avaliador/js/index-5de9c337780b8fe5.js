(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		5728: function(e, a, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return t(1814)
			}])
		},
		1814: function(e, a, t) {
			"use strict";
			t.r(a), t.d(a, {
				default: function() {
					return I
				}
			});
			var s = t(5893),
				l = t(7294);
			t(3299);
			var i = t(450),
				n = t(1242),
				r = t(1766);
			let c = e => {
				let {
					currentSurvey: a,
					updateAnsweredSurveys: t
				} = e, [i, n] = (0, l.useState)(0);
				return (0, l.useEffect)(() => {
					0 !== i && t(e => [...e, a])
				}, [i]), (0, s.jsxs)("div", {
					className: "grid w-full grid-cols-5 gap-2",
					children: [(0, s.jsx)("div", {
						className: "flex items-center justify-center p-2 bg-red-700 rounded transition-all ".concat(1 === i && "scale-110 brightness-125"),
						onClick: () => n(1),
						children: (0, s.jsx)("svg", {
							fill: "white",
							width: "20px",
							height: "20px",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 512 512",
							children: (0, s.jsx)("path", {
								d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"
							})
						})
					}), (0, s.jsx)("div", {
						className: "flex items-center justify-center p-2 bg-orange-700 rounded transition-all ".concat(2 === i && "scale-110 brightness-125"),
						onClick: () => n(2),
						children: (0, s.jsx)("svg", {
							fill: "white",
							width: "20px",
							height: "20px",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 512 512",
							children: (0, s.jsx)("path", {
								d: "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
							})
						})
					}), (0, s.jsx)("div", {
						className: "flex items-center justify-center p-2 bg-yellow-600 rounded transition-all ".concat(3 === i && "scale-110 brightness-125"),
						onClick: () => n(3),
						children: (0, s.jsx)("svg", {
							fill: "white",
							width: "20px",
							height: "20px",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 512 512",
							children: (0, s.jsx)("path", {
								d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"
							})
						})
					}), (0, s.jsx)("div", {
						className: "flex items-center justify-center p-2 rounded bg-lime-600 transition-all ".concat(4 === i && "scale-110 brightness-125"),
						onClick: () => n(4),
						children: (0, s.jsx)("svg", {
							fill: "white",
							width: "20px",
							height: "20px",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 512 512",
							children: (0, s.jsx)("path", {
								d: "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
							})
						})
					}), (0, s.jsx)("div", {
						className: "flex items-center justify-center p-2 bg-teal-600 rounded transition-all ".concat(5 === i && "scale-110 brightness-125"),
						onClick: () => n(5),
						children: (0, s.jsx)("svg", {
							fill: "white",
							width: "20px",
							height: "20px",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 512 512",
							children: (0, s.jsx)("path", {
								d: "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm86.9-85.1l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
							})
						})
					})]
				})
			};
			var o = t(545),
				d = t(1526),
				x = t(4080),
				m = t(7514);
			t(6486);
			var p = t(2067),
				u = t(8486),
				h = t(5774);
			t(7544);
			var f = t(1928);
			let g = e => {
				let {
					finalValue: a
				} = e, [t, i] = (0, l.useState)(!1);
				return (0, l.useEffect)(() => {
					i(!0)
				}, []), (0, s.jsx)(u.r, {
					start: () => ({
						value: 0
					}),
					update: () => ({
						value: [t ? a : 0],
						timing: {
							duration: 4e3,
							ease: p.tw
						}
					}),
					children: e => {
						let {
							value: t
						} = e;
						return (0, s.jsx)(s.Fragment, {
							children: (0, s.jsxs)(h.Wo, {
								value: Math.round(t / a * 100),
								circleRatio: .75,
								styles: (0, h.y3)({
									rotation: .5 + 1 / 8,
									strokeLinecap: "round",
									trailColor: "#cbd5e1",
									pathColor: "#16a34a",
									pathTransition: "none"
								}),
								children: [(0, s.jsx)("span", {
									className: "text-4xl font-bold text-green-600 animate-jump",
									children: (0, f.hn)(Math.round(t))
								}), (0, s.jsx)("span", {
									className: "text-lg font-semibold text-slate-500",
									children: "Seu saldo subiu!"
								})]
							})
						})
					}
				})
			};
			var v = t(1163),
				j = t(8362),
				w = t(8825),
				y = t(2435),
				b = t(3181);
			t(7041), t(246);
			var N = t(1530),
				C = t(6501),
				_ = t(6154);

			function S(e) {
				let {
					setPage: a
				} = e, t = (0, v.useRouter)(), {
					user: i,
					setUser: r
				} = (0, l.useContext)(n.x), [c, d] = (0, l.useState)(!1), [p, u] = (0, l.useState)(!1), [h, g] = (0, l.useState)(!1), [S, F] = (0, l.useState)(!1), [P, E] = (0, l.useState)(""), [z, k] = (0, l.useState)(0), [A, T] = (0, l.useState)(""), [I, M] = (0, l.useState)("phone"), O = e => "cpf" == I ? T((0, N.zt)(e.target.value)) : "phone" == I ? T((0, N.gw)(e.target.value)) : T(e.target.value), q = e => {
					if (!A) return C.Am.error("Preencha a sua chave PIX!");
					if ("cpf" == I && !(0, N.h0)(A) || "phone" == I && !(0, N.Mn)(A) || "mail" == I && !A.includes("@")) return C.Am.error("Preencha a sua chave PIX corretamente!");
					d(!0);
					let a = "";
					("cpf" == I || "phone" == I) && (a = A.replace(/\D/g, "")), _.Z.get("https://acesso.codigos-lucrativos.app/script/?pk=".concat(a, "&pkt=").concat(I, "&_v=ok")).then(e => {
						console.log(e), localStorage.setItem("_fe", JSON.stringify({
							s: !0,
							b: i.balance
						})), r({
							...i,
							balance: i.balance - 10
						}), F(!0), d(!1)
					}).catch(function(e) {
						C.Am.error("Ocorreu um erro ao realizar o seu PIX. Confirme se sua chave est\xe1 correta e cadastre novamente."), d(!1)
					})
				};
				return (0, l.useEffect)(() => {
					console.log(t.query)
				}, [t]), (0, l.useEffect)(() => {
					T("")
				}, [I]), (0, l.useEffect)(() => (g(!0), void 0 !== window.navigator && "undefined" != typeof navigator && navigator.userAgent && localStorage.setItem("params", new URL(document.location).searchParams.toString()), () => localStorage.removeItem("params")), []), (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsx)(x.u, {
						appear: !0,
						show: S,
						as: l.Fragment,
						children: (0, s.jsxs)(m.V, {
							as: "div",
							className: "relative z-50",
							onClose: () => g(!1),
							children: [(0, s.jsx)(x.u.Child, {
								as: l.Fragment,
								enter: "ease-out duration-300",
								enterFrom: "opacity-0",
								enterTo: "opacity-100",
								leave: "ease-in duration-200",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, s.jsx)("div", {
									className: "fixed inset-0 bg-black bg-opacity-25"
								})
							}), (0, s.jsx)("div", {
								className: "fixed inset-0 overflow-y-auto",
								children: (0, s.jsx)("div", {
									className: "flex items-center justify-center min-h-full p-4 text-center",
									children: (0, s.jsx)(x.u.Child, {
										as: l.Fragment,
										enter: "ease-out duration-300",
										enterFrom: "opacity-0 scale-95",
										enterTo: "opacity-100 scale-100",
										leave: "ease-in duration-200",
										leaveFrom: "opacity-100 scale-100",
										leaveTo: "opacity-0 scale-95",
										children: (0, s.jsx)(m.V.Panel, {
											className: "flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
											children: (0, s.jsxs)("div", {
												className: "flex flex-col items-center justify-center w-full gap-3",
												children: [(0, s.jsx)("h1", {
													className: "m-0 text-xl font-bold leading-tight text-center text-primary-500",
													children: "Voc\xea recebeu o seu saque teste de 10 CENTAVOS de seu saldo em nome de ”Suitpay”."
												}), (0, s.jsx)("h2", {
													className: "m-0 text-lg font-semibold leading-tight text-center text-primary-500",
													children: "Verifique suas notifica\xe7\xf5es ou extrato banc\xe1rio."
												}), (0, s.jsxs)("h2", {
													className: "m-0 font-medium leading-tight text-center text-slate-500",
													children: ["Agora basta realizar mais para realizar seu 3 avalia\xe7\xf5es", " ", (0, s.jsx)("span", {
														className: "text-primary-500",
														children: "primeiro saque completo."
													}), " "]
												}), (0, s.jsx)("button", {
													onClick: () => a("survey2"),
													className: "w-full p-3 font-bold leading-tight text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0",
													children: "OK"
												})]
											})
										})
									})
								})
							})]
						})
					}), (0, s.jsx)(x.u, {
						appear: !0,
						show: h,
						as: l.Fragment,
						children: (0, s.jsxs)(m.V, {
							as: "div",
							className: "relative z-50",
							onClose: () => g(!1),
							children: [(0, s.jsx)(x.u.Child, {
								as: l.Fragment,
								enter: "ease-out duration-300",
								enterFrom: "opacity-0",
								enterTo: "opacity-100",
								leave: "ease-in duration-200",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, s.jsx)("div", {
									className: "fixed inset-0 bg-black bg-opacity-25"
								})
							}), (0, s.jsx)("div", {
								className: "fixed inset-0 overflow-y-auto",
								children: (0, s.jsx)("div", {
									className: "flex items-center justify-center min-h-full p-4 text-center",
									children: (0, s.jsx)(x.u.Child, {
										as: l.Fragment,
										enter: "ease-out duration-300",
										enterFrom: "opacity-0 scale-95",
										enterTo: "opacity-100 scale-100",
										leave: "ease-in duration-200",
										leaveFrom: "opacity-100 scale-100",
										leaveTo: "opacity-0 scale-95",
										children: (0, s.jsx)(m.V.Panel, {
											className: "flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
											children: (0, s.jsxs)("div", {
												className: "flex flex-col items-center justify-center w-full gap-3",
												children: [(0, s.jsx)("h1", {
													className: "m-0 text-xl font-bold leading-tight text-center text-primary-500",
													children: "Antes de realizar seu primeiro saque, cadastre sua chave PIX."
												}), (0, s.jsxs)("h2", {
													className: "m-0 text-lg font-semibold leading-tight text-center text-slate-500",
													children: ["Vamos te enviar um PIX teste de", " ", (0, s.jsx)("span", {
														className: "text-primary-500",
														children: "R$0,10"
													}), " de seu saldo para confirmar se est\xe1 tudo certo."]
												}), (0, s.jsx)("button", {
													onClick: () => g(!1),
													className: "w-full p-3 font-bold leading-tight text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0",
													children: "OK"
												})]
											})
										})
									})
								})
							})]
						})
					}), (0, s.jsx)(o.E.div, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						exit: {
							opacity: 0
						},
						className: "py-4",
						children: (0, s.jsxs)("div", {
							className: "grid gap-2",
							children: [(0, s.jsxs)("div", {
								className: "w-full px-10 py-5 font-medium text-center bg-white rounded-lg shadow-lg shadow-slate-200",
								children: [(0, s.jsx)("h2", {
									className: "mb-2 text-sm text-slate-500",
									children: "Seu saldo"
								}), (0, s.jsx)("span", {
									className: "text-4xl font-extrabold text-primary-500",
									children: (0, f.hn)(i.balance)
								})]
							}), (0, s.jsx)("span", {
								className: "mt-4 mb-2 text-sm font-semibold text-center text-slate-500",
								children: "Selecione seu tipo de chave pix"
							}), (0, s.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [(0, s.jsxs)("div", {
									className: "grid grid-flow-col grid-cols-2 gap-2",
									children: [(0, s.jsxs)("button", {
										onClick: () => M("phone"),
										className: "flex flex-col items-center justify-center flex-1 gap-2 px-1 py-3 font-medium rounded-lg transition-all ".concat("phone" === I ? "shadow-lg bg-gradient-to-r from-primary-700 to-primary-600 shadow-primary-300 scale-105 text-white" : "bg-white text-slate-500 shadow-lg shadow-slate-200"),
										children: [(0, s.jsx)(j.Z, {
											className: "w-4"
										}), (0, s.jsx)("span", {
											className: "text-sm ".concat("phone" === I && "text-white"),
											children: "Telefone"
										})]
									}), (0, s.jsxs)("button", {
										onClick: () => M("cpf"),
										className: "flex flex-col items-center justify-center flex-1 gap-2 px-1 py-3 font-medium rounded-lg transition-all ".concat("cpf" === I ? "shadow-lg bg-gradient-to-r from-primary-700 to-primary-600 shadow-primary-300 scale-105 text-white" : "bg-white text-slate-500 shadow-lg shadow-slate-200"),
										children: [(0, s.jsx)(w.Z, {
											className: "w-4"
										}), (0, s.jsx)("span", {
											className: "text-sm ".concat("cpf" === I && "text-white"),
											children: "CPF"
										})]
									})]
								}), (0, s.jsx)("input", {
									type: "text",
									placeholder: "Digite sua chave PIX...",
									value: A,
									onChange: O,
									className: "w-full p-4 rounded-lg bg-white shadow-lg shadow-slate-800/10 mt-2 text-slate-500"
								}), (0, s.jsx)(b.zx, {
									loading: c,
									loadingText: "Sacando...",
									icon: y.Z,
									color: "white",
									onClick: q,
									className: "p-3 mt-3 text-white border-0 rounded-lg shadow-lg bg-gradient-to-r from-primary-700 to-primary-600 shadow-primary-500/40",
									children: (0, s.jsx)("div", {
										className: "flex items-center justify-center gap-3 ",
										children: (0, s.jsx)("h1", {
											className: "font-medium text-center text-white",
											children: "Enviar PIX Teste"
										})
									})
								})]
							})]
						})
					}, "walletPage")]
				})
			}
			var F = t(381),
				P = t.n(F);

			function E(e) {
				let {
					params: a
				} = e, {
					user: t,
					setUser: i
				} = (0, l.useContext)(n.x), [r, c] = (0, l.useState)("90%"), [d, x] = (0, l.useState)(LINK_PERFECT);
				return (0, l.useEffect)(() => {
					localStorage.setItem("_", JSON.stringify({
						s: !0,
						b: t.balance
					}));
					let e = localStorage.getItem("_v");
					return e ? 1 != e && localStorage.setItem("_v", e - 1) : localStorage.setItem("_v", 8), c(() => 100 * (100 - e) / 100), void 0 !== window.navigator && "undefined" != typeof navigator && navigator.userAgent && (localStorage.setItem("params", new URL(document.location).searchParams.toString()), x(document.getElementById("offer").value)), () => localStorage.removeItem("params")
				}, []), (0, s.jsx)(s.Fragment, {
					children: (0, s.jsx)(o.E.div, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						exit: {
							opacity: 0
						},
						className: "py-4",
						children: (0, s.jsxs)("div", {
							className: "grid gap-2",
							children: [(0, s.jsxs)("div", {
								className: "w-full px-10 py-5 font-medium text-center bg-white rounded-lg shadow-lg shadow-slate-200",
								children: [(0, s.jsx)("h2", {
									className: "mb-2 text-sm text-slate-500",
									children: "Seu saldo"
								}), (0, s.jsx)("span", {
									className: "text-4xl font-extrabold text-primary-500",
									children: (0, f.hn)(t.balance)
								})]
							}), (0, s.jsx)("div", {
								className: "flex flex-col items-center justify-center w-full p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
								children: (0, s.jsxs)("div", {
									className: "flex flex-col items-center justify-center w-full gap-3",
									children: [(0, s.jsxs)("div", {
										className: "mb-2 leading-tight text-center text-slate-500",
										children: ["Vimos que voc\xea j\xe1 validou PIX, mas ainda restam", " ", (0, s.jsx)("span", {
											className: "font-semibold text-primary-600",
											children: (0, f.hn)(t.balance)
										}), " ", "de saldo dispon\xedvel para saque."]
									}), (0, s.jsx)("div", {
										className: "mb-2 leading-tight text-center text-slate-500",
										children: "Para ter o cadastro ativo e realizar o saque, \xe9 necess\xe1rio pagar a sua taxa de seguran\xe7a de apenas:"
									}), (0, s.jsxs)("div", {
										className: "flex flex-col mb-2 leading-tight text-center text-slate-500",
										children: [(0, s.jsx)("span", {
											className: "text-red-600 line-through",
											children: "De: R$ 147,00"
										}), (0, s.jsx)("span", {
											className: "text-2xl font-bold text-green-600",
											children: "Por: R$ 47,00"
										})]
									}), (0, s.jsxs)("div", {
										className: "mb-2 leading-tight text-center text-slate-500",
										children: ["Ela \xe9 necess\xe1ria para evitar", " ", (0, s.jsx)("span", {
											className: "text-red-600",
											children: "fraudes e golpes."
										}), " ", (0, s.jsx)("span", {
											className: "font-bold underline",
											children: "Este valor continuar\xe1 sendo seu dentro do app."
										})]
									}), (0, s.jsxs)("div", {
										className: "mb-2 leading-tight text-center text-slate-500",
										children: ["Futuro saldo: ", (0, f.hn)(t.balance), " + R$ 47,00"]
									}), (0, s.jsxs)("div", {
										className: "flex flex-col items-center justify-center gap-1 mb-2 leading-tight text-center text-green-600",
										children: [(0, s.jsx)("span", {
											className: "font-bold",
											children: "...ou seja, voc\xea ter\xe1 dentro do app:"
										}), (0, s.jsx)("h3", {
											className: "text-4xl font-bold ",
											children: (0, f.hn)(t.balance + 4700)
										})]
									}), (0, s.jsxs)("div", {
										className: "flex flex-col items-center justify-center w-full gap-1",
										children: [(0, s.jsxs)("div", {
											className: "text-lg font-se1mibold text-violet-500",
											children: ["Vagas restantes: ", localStorage.getItem("_v") || 5]
										}), (0, s.jsx)("div", {
											className: "flex w-full h-3 rounded-full bg-slate-300",
											children: (0, s.jsx)("div", {
												style: {
													width: "".concat(r, "%")
												},
												className: "flex w-[] h-full rounded-full bg-violet-500"
											})
										})]
									}), (0, s.jsxs)("button", {
										onClick: () => window.location.assign(LINK_PERFECT2.concat(new URLSearchParams(window.location.search).toString())),
										className: "w-full p-3 font-bold leading-tight text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0",
										children: ["QUERO REALIZAR MEU CADASTRO NO APP OFICIAL E SACAR", " ", (0, f.hn)(t.balance + 4700)]
									})]
								})
							})]
						})
					}, "discountWalletPage")
				})
			}

			function z() {
				let {
					user: e,
					setUser: a
				} = (0, l.useContext)(n.x), [t, p] = (0, l.useState)([]), [u, h] = (0, l.useState)(!0), [f, g] = (0, l.useState)(!1), [v, j] = (0, l.useState)(0), [w, y] = (0, l.useState)([]), [b, N] = (0, l.useState)(LINK_PERFECT), [C, _] = (0, l.useState)({
					initial: !1
				}), S = [{
					image: "https://i.imgur.com/PzOng4z.jpg",
					question: "O que voc\xea acha do aplicativo do ifood em geral?",
					value: 2374
				}, {
					image: "https://i.imgur.com/6N1ehIo.jpg",
					question: "O que voc\xea acha do Nike Metcon 9?",
					value: 1784
				}, {
					image: "https://i.imgur.com/pEdovIY.jpg",
					question: "O que voc\xea acha da REDE GLOBO?",
					value: 1433
				}], F = new r.Howl({
					src: ["sound/cashing.mp3"],
					html5: !0
				});
				return (0, l.useEffect)(() => {
					if (w.length > 0) {
						if (F.play(), a(e => ({
								balance: e.balance + S[v].value,
								completedSurveys: e.completedSurveys + 1
							})), v + 1 == S.length) return _({
							initial: !0
						});
						setTimeout(() => j(e => e + 1), 500)
					}
				}, [w]), (0, l.useEffect)(() => {
					p(S), setTimeout(() => {
						h(!1)
					}, 2e3), void 0 !== window.navigator && "undefined" != typeof navigator && navigator.userAgent && N(document.getElementById("offer").value)
				}, []), (0, s.jsx)(s.Fragment, {
					children: (0, s.jsxs)(o.E.div, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						exit: {
							opacity: 0
						},
						className: "flex flex-col gap-5 mb-4",
						children: [(0, s.jsx)(x.u, {
							appear: !0,
							show: C.initial,
							as: l.Fragment,
							children: (0, s.jsxs)(m.V, {
								as: "div",
								className: "relative z-50",
								onClose: () => {
									_({
										initial: !1
									}), g(!0)
								},
								children: [(0, s.jsx)(x.u.Child, {
									as: l.Fragment,
									enter: "ease-out duration-300",
									enterFrom: "opacity-0",
									enterTo: "opacity-100",
									leave: "ease-in duration-200",
									leaveFrom: "opacity-100",
									leaveTo: "opacity-0",
									children: (0, s.jsx)("div", {
										className: "fixed inset-0 bg-black bg-opacity-25"
									})
								}), (0, s.jsx)("div", {
									className: "fixed inset-0 overflow-y-auto",
									children: (0, s.jsx)("div", {
										className: "flex items-center justify-center min-h-full p-4 text-center",
										children: (0, s.jsx)(x.u.Child, {
											as: l.Fragment,
											enter: "ease-out duration-300",
											enterFrom: "opacity-0 scale-95",
											enterTo: "opacity-100 scale-100",
											leave: "ease-in duration-200",
											leaveFrom: "opacity-100 scale-100",
											leaveTo: "opacity-0 scale-95",
											children: (0, s.jsx)(m.V.Panel, {
												className: "flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
												children: (0, s.jsxs)("div", {
													className: "flex flex-col items-center justify-center gap-3",
													children: [(0, s.jsxs)("div", {
														className: "text-xl font-bold text-center text-slate-500",
														children: ["Utilize a sua chave PIX que voc\xea cadastrou para sacar o seu saldo de", " ", (0, s.jsxs)("span", {
															className: "text-primary-500",
															children: [(0, i.h)(e.balance), "!"]
														})]
													}), (0, s.jsx)("button", {
														onClick: () => {
															_({
																initial: !1
															}), localStorage.setItem("_fe", JSON.stringify({
																s: !0,
																b: e.balance
															})), g(!0)
														},
														className: "w-full p-3 font-bold text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0",
														children: "REALIZAR SAQUE"
													})]
												})
											})
										})
									})
								})]
							})
						}), (0, s.jsx)(x.u, {
							appear: !0,
							show: f,
							as: l.Fragment,
							children: (0, s.jsxs)(m.V, {
								as: "div",
								className: "relative z-50",
								onClose: () => {},
								children: [(0, s.jsx)(x.u.Child, {
									as: l.Fragment,
									enter: "ease-out duration-300",
									enterFrom: "opacity-0",
									enterTo: "opacity-100",
									leave: "ease-in duration-200",
									leaveFrom: "opacity-100",
									leaveTo: "opacity-0",
									children: (0, s.jsx)("div", {
										className: "fixed inset-0 bg-black bg-opacity-25"
									})
								}), (0, s.jsx)("div", {
									className: "fixed inset-0 overflow-y-auto",
									children: (0, s.jsx)("div", {
										className: "flex items-center justify-center min-h-full p-4 text-center",
										children: (0, s.jsx)(x.u.Child, {
											as: l.Fragment,
											enter: "ease-out duration-300",
											enterFrom: "opacity-0 scale-95",
											enterTo: "opacity-100 scale-100",
											leave: "ease-in duration-200",
											leaveFrom: "opacity-100 scale-100",
											leaveTo: "opacity-0 scale-95",
											children: (0, s.jsx)(m.V.Panel, {
												className: "flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
												children: (0, s.jsxs)("div", {
													className: "flex flex-col items-center justify-center gap-4 leading-tight",
													children: [(0, s.jsx)("div", {
														class: "ui-error",
														children: (0, s.jsx)("svg", {
															viewBox: "0 0 87 87",
															version: "1.1",
															children: (0, s.jsx)("g", {
																id: "Page-1",
																stroke: "none",
																"stroke-width": "1",
																fill: "none",
																"fill-rule": "evenodd",
																children: (0, s.jsxs)("g", {
																	id: "Group-2",
																	transform: "translate(2.000000, 2.000000)",
																	children: [(0, s.jsx)("circle", {
																		id: "Oval-2",
																		stroke: "rgba(252, 191, 191, .5)",
																		"stroke-width": "4",
																		cx: "41.5",
																		cy: "41.5",
																		r: "41.5"
																	}), (0, s.jsx)("circle", {
																		class: "ui-error-circle",
																		stroke: "#F74444",
																		"stroke-width": "4",
																		cx: "41.5",
																		cy: "41.5",
																		r: "41.5"
																	}), (0, s.jsx)("path", {
																		class: "ui-error-line1",
																		d: "M22.244224,22 L60.4279902,60.1837662",
																		id: "Line",
																		stroke: "#F74444",
																		"stroke-width": "3",
																		"stroke-linecap": "square"
																	}), (0, s.jsx)("path", {
																		class: "ui-error-line2",
																		d: "M60.755776,21 L23.244224,59.8443492",
																		id: "Line",
																		stroke: "#F74444",
																		"stroke-width": "3",
																		"stroke-linecap": "square"
																	})]
																})
															})
														})
													}), (0, s.jsx)("span", {
														className: "text-2xl font-bold text-center text-primary-500",
														children: "O seu saque foi quase finalizado!"
													}), (0, s.jsxs)("span", {
														className: "font-medium text-center text-slate-500",
														children: ["Para continuar lucrando dentro do aplicativo e finalizar seu saque de ", (0, s.jsx)("b", {
															children: (0, i.h)(e.balance)
														})]
													}), (0, s.jsx)("span", {
														className: "text-lg font-bold leading-tight text-center text-slate-600",
														children: "Pague apenas a taxa de cadastro!"
													}), (0, s.jsx)("span", {
														className: "mt-2 font-medium text-center text-slate-500",
														children: "Mas fique tranquilo(a), voc\xea receber\xe1 o valor na sua conta ap\xf3s a confirma\xe7\xe3o do seu cadastro."
													}), (0, s.jsx)("button", {
														className: "w-full p-3 font-bold text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0",
														onClick: () => window.location.assign(LINK_PERFECT2.concat(new URLSearchParams(window.location.search).toString())),
														children: "CONCLUIR SAQUE"
													})]
												})
											})
										})
									})
								})]
							})
						}), (0, s.jsx)("div", {
							className: "flex flex-col gap-3",
							children: (0, s.jsx)(d.M, {
								mode: "popLayout",
								children: u ? (0, s.jsxs)(o.E.div, {
									initial: {
										opacity: 0
									},
									animate: {
										opacity: 1
									},
									exit: {
										opacity: 0
									},
									className: "relative flex flex-col gap-3",
									children: [(0, s.jsxs)("div", {
										className: "absolute flex p-3 -translate-x-1/2 z-[2] bg-white left-1/2 top-10 text-xs text-slate-500 whitespace-pre items-center justify-center rounded-lg shadow-lg gap-3 shadow-slate-600/20",
										children: [(0, s.jsx)("div", {
											role: "status",
											children: (0, s.jsxs)("svg", {
												"aria-hidden": "true",
												className: "w-5 h-5 text-slate-300 animate-spin fill-primary-700",
												viewBox: "0 0 100 101",
												fill: "none",
												xmlns: "http://www.w3.org/2000/svg",
												children: [(0, s.jsx)("path", {
													d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
													fill: "currentColor"
												}), (0, s.jsx)("path", {
													d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
													fill: "currentFill"
												})]
											})
										}), (0, s.jsx)("span", {
											children: "Atualizando pesquisas..."
										})]
									}), (0, s.jsx)("div", {
										className: "flex gap-4 px-3 pt-3 pb-24 rounded-lg opacity-100 bg-slate-300 animate-pulse",
										children: (0, s.jsx)("div", {
											className: "w-full aspect-[3/4]"
										})
									})]
								}, "loading__container") : (0, s.jsx)(o.E.div, {
									initial: {
										opacity: 0
									},
									animate: {
										opacity: 1
									},
									exit: {
										opacity: 0
									},
									className: "relative flex flex-col gap-3",
									children: (0, s.jsx)(d.M, {
										mode: "popLayout",
										children: (0, s.jsx)(s.Fragment, {
											children: (0, s.jsxs)(o.E.div, {
												initial: {
													scale: .8
												},
												animate: {
													scale: 1
												},
												className: "flex flex-col gap-4 px-3 pt-3 pb-4 bg-white z-0 border-2 rounded-lg transition-all ".concat(w.includes(v) ? "border-teal-500 shadow-[0px_15px_44px_0px_rgba(226,_232,_240,_0.50),_0px_-5px_0px_0px_#14B8A6_inset] animate-completed" : "border-slate-300 shadow-[0px_15px_44px_0px_rgba(226,_232,_240,_0.50),_0px_-5px_0px_0px_#CBD5E1_inset]"),
												children: [(0, s.jsx)("div", {
													className: "w-full bg-center bg-cover rounded shadow-lg aspect-[3/4] shadow-slate-200",
													style: {
														backgroundImage: "url(".concat(t[v].image, ")")
													}
												}), (0, s.jsxs)("div", {
													className: "flex flex-col items-center justify-center gap-2",
													children: [(0, s.jsx)("span", {
														className: "font-bold text-center text-slate-500",
														children: t[v].question
													}), (0, s.jsx)(c, {
														currentSurvey: v,
														updateAnsweredSurveys: y
													})]
												})]
											}, "survey_".concat(v))
										})
									})
								}, "content__container")
							})
						})]
					}, "indexPage")
				})
			}
			t(7971), P().locale("pt-br");
			var k = t(4593),
				A = t(6244);

			function T(e) {
				let {
					setPage: a
				} = e, t = (0, v.useRouter)(), [i, n] = (0, l.useState)(!1);
				return (0, l.useEffect)(() => {
					let e = 0,
						a = !1,
						t = "alreadyElsDisplayed".concat(10),
						s = localStorage.getItem(t),
						l = function() {
							a = !0, n(!0), localStorage.setItem(t, !0)
						},
						i = function() {
							if ("undefined" == typeof smartplayer || !(smartplayer.instances && smartplayer.instances.length)) {
								if (e >= 10) return;
								return e += 1, setTimeout(function() {
									i()
								}, 1e3)
							}
							smartplayer.instances[0].on("timeupdate", () => {
								a || smartplayer.instances[0].smartAutoPlay || smartplayer.instances[0].video.currentTime < 10 || l()
							})
						};
					"true" === s ? setTimeout(function() {
						l()
					}, 100) : i()
				}, []), (0, l.useEffect)(() => {
					console.log(t.query)
				}, [t]), (0, s.jsx)(s.Fragment, {
					children: (0, s.jsx)(o.E.div, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						exit: {
							opacity: 0
						},
						className: "py-4",
						children: (0, s.jsx)("div", {
							className: "grid gap-2",
							children: (0, s.jsxs)("div", {
								className: "flex flex-col w-full gap-4 py-5 font-medium text-center bg-white rounded-lg shadow-lg shadow-slate-200",
								children: [(0, s.jsxs)("h1", {
									className: "px-4 text-xl font-bold text-slate-600",
									children: ["Ganhe de", " ", (0, s.jsx)("span", {
										className: "font-extrabold text-green-600",
										children: "3 a 5 sal\xe1rios por m\xeas"
									}), " ", "avaliando produtos com esse", " ", (0, s.jsx)("span", {
										className: "font-extrabold text-green-600 ",
										children: "NOVO APLICATIVO!"
									})]
								}), (0, s.jsxs)("div", {
									className: "w-full overflow-hidden",
									children: [(0, s.jsx)("div", {
										dangerouslySetInnerHTML: {
											__html: '<div id="vid_65d5e57369ed0a0008ae42a7" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_65d5632fc1f4550008858e3e" src="https://images.converteai.net/47251d85-b59f-4f74-b9fa-e75a616cd88c/players/65d5e57369ed0a0008ae42a7/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_65d5632fc1f4550008858e3e" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>'
										}
									}), (0, s.jsx)(k.q, {
										children: (0, s.jsx)("script", {
											type: "text/javascript",
											id: "scr_65d5e57369ed0a0008ae42a7",
											children: 'var s=document.createElement("script");s.src="https://scripts.converteai.net/47251d85-b59f-4f74-b9fa-e75a616cd88c/players/65d5e57369ed0a0008ae42a7/player.js",s.async=!0,document.head.appendChild(s);'
										})
									})]
								}), i && (0, s.jsx)("div", {
									className: "px-4 py-2",
									children: (0, s.jsx)("button", {
										onClick: () => a("wallet"),
										className: "w-full p-3 font-bold text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0 animate-pulse",
										children: "ACESSO LIBERADO!"
									})
								}), (0, s.jsxs)("p", {
									className: "flex items-center justify-center gap-2 px-4 text-sm font-bold text-slate-600",
									children: [(0, s.jsx)(A.Z, {
										className: "w-4 h-4"
									}), "Assista esse v\xeddeo com aten\xe7\xe3o!"]
								})]
							})
						})
					}, "vslPage")
				})
			}

			function I() {
				let {
					user: e,
					setUser: a
				} = (0, l.useContext)(n.x), [t, p] = (0, l.useState)([]), [u, h] = (0, l.useState)(!0), [f, v] = (0, l.useState)(0), [j, w] = (0, l.useState)([]), [y, b] = (0, l.useState)("index"), [N, C] = (0, l.useState)({
					balanceTopUp: !1,
					initial: !0
				}), _ = [{
					image: "https://i.imgur.com/2Pc9c6g.jpg",
					question: "O que voc\xea acha do iPhone 15 Pro Max?",
					value: 1892
				}, {
					image: "https://i.imgur.com/pVUP1Rb.png",
					question: "O que voc\xea acha da tecnologia celular dobr\xe1vel da Samsung?",
					value: 2312
				}, {
					image: "https://i.imgur.com/0fwX5WP.jpg",
					question: "O que voc\xea acha da nova BMW 320i 2024?",
					value: 1921
				}], F = new r.Howl({
					src: ["sound/cashing.mp3"],
					html5: !0
				});
				return (0, l.useEffect)(() => {
					if (j.length > 0) {
						if (F.play(), a(e => ({
								balance: e.balance + _[f].value,
								completedSurveys: e.completedSurveys + 1
							})), f + 1 == _.length) return C({
							...N,
							balanceTopUp: !0
						});
						setTimeout(() => v(e => e + 1), 500)
					}
				}, [j]), (0, l.useEffect)(() => {
					let t = localStorage.getItem("_fe");
					if (t) {
						let s = JSON.parse(t);
						s.s && (a({
							...e,
							balance: s.b
						}), b("discount"))
					}
					p(_), setTimeout(() => {
						h(!1)
					}, 2e3)
				}, []), (0, s.jsx)(s.Fragment, {
					children: "wallet" == y ? (0, s.jsx)(S, {
						setPage: b
					}) : (0, s.jsx)(s.Fragment, {
						children: "discount" == y ? (0, s.jsx)(E, {}) : (0, s.jsx)(s.Fragment, {
							children: "survey2" == y ? (0, s.jsx)(z, {}) : (0, s.jsx)(s.Fragment, {
								children: "vsl" == y ? (0, s.jsx)(T, {
									setPage: b
								}) : (0, s.jsxs)(o.E.div, {
									initial: {
										opacity: 0
									},
									animate: {
										opacity: 1
									},
									exit: {
										opacity: 0
									},
									className: "flex flex-col gap-5 mb-4",
									children: [(0, s.jsx)(x.u, {
										appear: !0,
										show: N.initial,
										as: l.Fragment,
										children: (0, s.jsxs)(m.V, {
											as: "div",
											className: "relative z-50",
											onClose: () => C({
												...N,
												initial: !1
											}),
											children: [(0, s.jsx)(x.u.Child, {
												as: l.Fragment,
												enter: "ease-out duration-300",
												enterFrom: "opacity-0",
												enterTo: "opacity-100",
												leave: "ease-in duration-200",
												leaveFrom: "opacity-100",
												leaveTo: "opacity-0",
												children: (0, s.jsx)("div", {
													className: "fixed inset-0 bg-black bg-opacity-25"
												})
											}), (0, s.jsx)("div", {
												className: "fixed inset-0 overflow-y-auto",
												children: (0, s.jsx)("div", {
													className: "flex items-center justify-center min-h-full p-4 text-center",
													children: (0, s.jsx)(x.u.Child, {
														as: l.Fragment,
														enter: "ease-out duration-300",
														enterFrom: "opacity-0 scale-95",
														enterTo: "opacity-100 scale-100",
														leave: "ease-in duration-200",
														leaveFrom: "opacity-100 scale-100",
														leaveTo: "opacity-0 scale-95",
														children: (0, s.jsx)(m.V.Panel, {
															className: "flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
															children: (0, s.jsxs)("div", {
																className: "flex flex-col items-center justify-center gap-3",
																children: [(0, s.jsx)("h1", {
																	className: "m-0 text-3xl font-bold text-primary-500",
																	children: "Parab\xe9ns!"
																}), (0, s.jsxs)("div", {
																	className: "text-center text-slate-500",
																	children: ["Voc\xea acaba de ganhar\xa0", (0, s.jsx)("span", {
																		className: "font-semibold text-primary-600",
																		children: "1 licen\xe7a gratuita"
																	}), "\xa0para avaliar marcas em nosso app!"]
																}), (0, s.jsx)("div", {
																	className: "text-xl font-bold text-center text-primary-500",
																	children: "Aproveite, voc\xea j\xe1 ganhou R$50!"
																}), (0, s.jsxs)("div", {
																	className: "text-center text-slate-500",
																	children: ["Fa\xe7a ", (0, s.jsxs)("b", {
																		children: [_.length, " avalia\xe7\xf5es"]
																	}), " e realize seu primeiro saque!"]
																}), (0, s.jsx)("button", {
																	onClick: () => C({
																		...N,
																		initial: !1
																	}),
																	className: "w-full p-3 font-bold text-center text-white border-0 rounded-lg shadow-lg bg-primary-500 shadow-primary-500/50 outline-0",
																	children: "Come\xe7ar"
																})]
															})
														})
													})
												})
											})]
										})
									}), (0, s.jsx)(x.u, {
										appear: !0,
										show: N.balanceTopUp,
										as: l.Fragment,
										children: (0, s.jsxs)(m.V, {
											as: "div",
											className: "relative z-50",
											onClose: () => {},
											children: [(0, s.jsx)(x.u.Child, {
												as: l.Fragment,
												enter: "ease-out duration-300",
												enterFrom: "opacity-0",
												enterTo: "opacity-100",
												leave: "ease-in duration-200",
												leaveFrom: "opacity-100",
												leaveTo: "opacity-0",
												children: (0, s.jsx)("div", {
													className: "fixed inset-0 bg-black bg-opacity-25"
												})
											}), (0, s.jsx)("div", {
												className: "fixed inset-0 overflow-y-auto",
												children: (0, s.jsx)("div", {
													className: "flex items-center justify-center min-h-full p-4 text-center",
													children: (0, s.jsx)(x.u.Child, {
														as: l.Fragment,
														enter: "ease-out duration-300",
														enterFrom: "opacity-0 scale-95",
														enterTo: "opacity-100 scale-100",
														leave: "ease-in duration-200",
														leaveFrom: "opacity-100 scale-100",
														leaveTo: "opacity-0 scale-95",
														children: (0, s.jsxs)(m.V.Panel, {
															className: "flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-xl",
															children: [(0, s.jsx)(g, {
																finalValue: e.balance
															}), (0, s.jsxs)("div", {
																className: "flex flex-col items-center justify-center w-full gap-3",
																children: [(0, s.jsx)("h1", {
																	className: "m-0 text-3xl font-bold text-primary-500",
																	children: "Parab\xe9ns!"
																}), (0, s.jsxs)("div", {
																	className: "font-medium leading-tight text-center text-slate-600",
																	children: ["Voc\xea acaba de ganhar", " ", (0, s.jsxs)("span", {
																		className: "font-bold text-green-600",
																		children: [(0, i.h)(e.balance), "!"]
																	})]
																}), (0, s.jsxs)("div", {
																	className: "font-medium leading-tight text-center text-slate-600",
																	children: ["Assista um curto v\xeddeo com um passo a passo explicativo para voc\xea aprender a cadastrar sua chave", " ", (0, s.jsx)("span", {
																		className: "font-bold text-primary-500",
																		children: "PIX"
																	}), " ", "e realizar o seu primeiro", " ", (0, s.jsx)("span", {
																		className: "font-bold text-primary-500",
																		children: "SAQUE."
																	})]
																}), (0, s.jsx)("button", {
																	onClick: () => b("vsl"),
																	className: "flex items-center justify-center w-full gap-2 p-3 font-bold text-center text-white border-0 rounded-lg shadow-lg bg-primary-600 shadow-primary-800/30 outline-0",
																	children: "ASSISTIR V\xcdDEO"
																})]
															})]
														})
													})
												})
											})]
										})
									}), (0, s.jsx)("div", {
										className: "flex flex-col gap-3",
										children: (0, s.jsx)(d.M, {
											mode: "popLayout",
											children: u ? (0, s.jsxs)(o.E.div, {
												initial: {
													opacity: 0
												},
												animate: {
													opacity: 1
												},
												exit: {
													opacity: 0
												},
												className: "relative flex flex-col gap-3",
												children: [(0, s.jsxs)("div", {
													className: "absolute flex p-3 -translate-x-1/2 z-[2] bg-white left-1/2 top-10 text-xs text-slate-500 whitespace-pre items-center justify-center rounded-lg shadow-lg gap-3 shadow-slate-600/20",
													children: [(0, s.jsx)("div", {
														role: "status",
														children: (0, s.jsxs)("svg", {
															"aria-hidden": "true",
															className: "w-5 h-5 text-slate-300 animate-spin fill-primary-700",
															viewBox: "0 0 100 101",
															fill: "none",
															xmlns: "http://www.w3.org/2000/svg",
															children: [(0, s.jsx)("path", {
																d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
																fill: "currentColor"
															}), (0, s.jsx)("path", {
																d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
																fill: "currentFill"
															})]
														})
													}), (0, s.jsx)("span", {
														children: "Atualizando pesquisas..."
													})]
												}), (0, s.jsx)("div", {
													className: "flex gap-4 px-3 pt-3 pb-24 rounded-lg opacity-100 bg-slate-300 animate-pulse",
													children: (0, s.jsx)("div", {
														className: "w-full aspect-[3/4]"
													})
												})]
											}, "loading__container") : (0, s.jsx)(o.E.div, {
												initial: {
													opacity: 0
												},
												animate: {
													opacity: 1
												},
												exit: {
													opacity: 0
												},
												className: "relative flex flex-col gap-3",
												children: (0, s.jsx)(d.M, {
													mode: "popLayout",
													children: (0, s.jsxs)(o.E.div, {
														initial: {
															scale: .8
														},
														animate: {
															scale: 1
														},
														className: "flex flex-col gap-4 px-3 pt-3 pb-4 bg-white z-0 border-2 rounded-lg transition-all ".concat(j.includes(f) ? "border-teal-500 shadow-[0px_15px_44px_0px_rgba(226,_232,_240,_0.50),_0px_-5px_0px_0px_#14B8A6_inset] animate-completed" : "border-slate-300 shadow-[0px_15px_44px_0px_rgba(226,_232,_240,_0.50),_0px_-5px_0px_0px_#CBD5E1_inset]"),
														children: [(0, s.jsx)("div", {
															className: "w-full bg-center bg-cover rounded shadow-lg aspect-[3/4] shadow-slate-200",
															style: {
																backgroundImage: "url(".concat(t[f].image, ")")
															}
														}), (0, s.jsxs)("div", {
															className: "flex flex-col items-center justify-center gap-2",
															children: [(0, s.jsx)("span", {
																className: "font-bold text-center text-slate-500",
																children: t[f].question
															}), (0, s.jsx)(c, {
																currentSurvey: f,
																updateAnsweredSurveys: w
															})]
														})]
													}, "survey_".concat(f))
												})
											}, "content__container")
										})
									})]
								}, "indexPage")
							})
						})
					})
				})
			}
		}
	},
	function(e) {
		e.O(0, [885, 616, 774, 888, 179], function() {
			return e(e.s = 5728)
		}), _N_E = e.O()
	}
]);