/*

    __  __    _    _  _______    
   |  \/  |  / \  | |/ / ____|   
   | |\/| | / _ \ | ' /|  _|     
   | |  | |/ ___ \| . \| |___    
   |_|__|_/_/  _\_\_|\_\_____|

	    *MODDED*
  __  __  ___  _   _ _____ _   _  
 |  \/  |/ _ \| \ | | ____\ \ / /
 | |\/| | | | |  \| |  _|  \ V / 
 | |  | | |_| | |\  | |___  | |  
 |_|  |_|\___/|_| \_|_____| |_|  
                                 
Developed by Economical Games
Modded by WeDonHaveAName Studios
                                 
*/

!(function () {
  var e,
    t,
    n,
    z = 0,
    o,
    l,
    i,
    s,
    a,
    d,
    reset = false,
    c = {
      1: [1, "Water Bottle", 10],
      2: [1, "Backpack", 50],
      3: [1, "Cart", 100],
      4: [2, "Bicycle", 200],
      5: [3, "Smartphone", 750],
      6: [3, "Gaming Laptop", 2e3],
      7: [5, "Plasma TV", 5e3],
      8: [10, "Motorcycle", 15e3],
      9: [15, "Car", 35e3],
      10: [20, "Luxury Car", 1e5],
      11: [50, "Apartment", 3e5],
      12: [250, "House", 1e6],
      13: [1e3, "Mansion", 1e7],
      14: [3e3, "Rocket", 1e8],
      15: [5e3, "Space Shuttle", 1e9],
      16: [1e4, "Saturn V", 5e9],
      17: [1e5, "Moon Landing", 25e9],
      18: [1e6, "McDonald's", 1e11],
      19: [1e7, "Apple", 1e12],
      20: [5e7, "Fortune 500", 2e13],
      21: [1e9, "United States", 2e14],
      22: [1e10, "Everything on Earth", 1e15],
      23: [1e17, "Earth", 1e17],
      24: [1e20, "Mars", 1e18],
      25: [1e25, "Solar System", 1e19],
    },
    r = [],
    u = 1,
    y = 3,
    m = 1,
    g = 25,
    p = !1;
  function _(e) {
    var t;
    if (2 == i)
      t =
        e >= 1e50
          ? "$" + Math.round((100 * e) / 1e42) / 100 + " Bruhyourstilldoingthisitsbeentoomuchtimegetalifeilion"
          : e >= 1e42
          ? "$" + Math.round((100 * e) / 1e42) / 100 + " Stopcheatilion"
          : e >= 1e39
          ? "$" + Math.round((100 * e) / 1e39) / 100 + " ThatsALotIlion"
          : e >= 1e36
          ? "$" + Math.round((100 * e) / 1e36) / 100 + " ThatsALotIlion"
          : e >= 1e33
          ? "$" + Math.round((100 * e) / 1e33) / 100 + " Decillion"
          : e >= 1e30
          ? "$" + Math.round((100 * e) / 1e30) / 100 + " Nonillion"
          : e >= 1e27
          ? "$" + Math.round((100 * e) / 1e27) / 100 + " Octillion"
          : e >= 1e24
          ? "$" + Math.round((100 * e) / 1e24) / 100 + " Septillion"
          : e >= 1e21
          ? "$" + Math.round((100 * e) / 1e21) / 100 + " Sextillion"
          : e >= 1e18
          ? "$" + Math.round((100 * e) / 1e18) / 100 + " Quintillion"
          : e >= 1e15
          ? "$" + Math.round((100 * e) / 1e15) / 100 + " Quadrillion"
          : e >= 1e12
          ? "$" + Math.round((100 * e) / 1e12) / 100 + " Trillion"
          : e >= 1e9
          ? "$" + Math.round((100 * e) / 1e9) / 100 + " Billion"
          : e >= 1e6
          ? "$" + Math.round((100 * e) / 1e6) / 100 + " Million"
          : "$" + e;
    else if (3 == i) {
      if (
        (t =
          e >= 1e50
            ? "$" + Math.round((1e3 * e) / 1e42) / 1e3 + " Bruhyourstilldoingthisitsbeentoomuchtimegetalifeilion"
            : e >= 1e42
            ? "$" + Math.round((1e3 * e) / 1e42) / 1e3 + " Stopcheatilion"
            : e >= 1e39
            ? "$" + Math.round((1e3 * e) / 1e39) / 1e3 + " ThatsALotIlion"
            : e >= 1e36
            ? "$" + Math.round((1e3 * e) / 1e36) / 1e3 + " Monilion"
            : e >= 1e33
            ? "$" + Math.round((1e3 * e) / 1e33) / 1e3 + " Decillion"
            : e >= 1e30
            ? "$" + Math.round((1e3 * e) / 1e30) / 1e3 + " Nonillion"
            : e >= 1e27
            ? "$" + Math.round((1e3 * e) / 1e27) / 1e3 + " Octillion"
            : e >= 1e24
            ? "$" + Math.round((1e3 * e) / 1e24) / 1e3 + " Septillion"
            : e >= 1e21
            ? "$" + Math.round((1e3 * e) / 1e21) / 1e3 + " Sextillion"
            : e >= 1e18
            ? "$" + Math.round((1e3 * e) / 1e18) / 1e3 + " Quintillion"
            : e >= 1e15
            ? "$" + Math.round((1e3 * e) / 1e15) / 1e3 + " Quadrillion"
            : e >= 1e12
            ? "$" + Math.round((1e3 * e) / 1e12) / 1e3 + " Trillion"
            : e >= 1e9
            ? "$" + Math.round((1e3 * e) / 1e9) / 1e3 + " Billion"
            : e >= 1e6
            ? "$" + Math.round((1e3 * e) / 1e6) / 1e3 + " Million"
            : "$" + e).includes(".")
      )
        2 ==
          (n = (n = t.substr(t.indexOf(".") + 1)).substr(0, n.indexOf(" ")))
            .length &&
          (t =
            t.substr(0, t.indexOf(" ")) + "0 " + t.substr(t.indexOf(" ") + 1));
    } else if (4 == i) {
      var n;
      if (
        (t =
          e >= 1e36
            ? "$" + Math.round((1e4 * e) / 1e36) / 1e4 + " Monilion"
            : e >= 1e33
            ? "$" + Math.round((1e4 * e) / 1e33) / 1e4 + " Decillion"
            : e >= 1e30
            ? "$" + Math.round((1e4 * e) / 1e30) / 1e4 + " Nonillion"
            : e >= 1e27
            ? "$" + Math.round((1e4 * e) / 1e27) / 1e4 + " Octillion"
            : e >= 1e24
            ? "$" + Math.round((1e4 * e) / 1e24) / 1e4 + " Septillion"
            : e >= 1e21
            ? "$" + Math.round((1e4 * e) / 1e21) / 1e4 + " Sextillion"
            : e >= 1e18
            ? "$" + Math.round((1e4 * e) / 1e18) / 1e4 + " Quintillion"
            : e >= 1e15
            ? "$" + Math.round((1e4 * e) / 1e15) / 1e4 + " Quadrillion"
            : e >= 1e12
            ? "$" + Math.round((1e4 * e) / 1e12) / 1e4 + " Trillion"
            : e >= 1e9
            ? "$" + Math.round((1e4 * e) / 1e9) / 1e4 + " Billion"
            : e >= 1e6
            ? "$" + Math.round((1e4 * e) / 1e6) / 1e4 + " Million"
            : "$" + e).includes(".")
      )
        2 ==
        (n = (n = t.substr(t.indexOf(".") + 1)).substr(0, n.indexOf(" ")))
          .length
          ? (t =
              t.substr(0, t.indexOf(" ")) +
              "00 " +
              t.substr(t.indexOf(" ") + 1))
          : 3 == n.length &&
            (t =
              t.substr(0, t.indexOf(" ")) +
              "0 " +
              t.substr(t.indexOf(" ") + 1));
    } else
      t =
        e >= 1e27
          ? "$" + Math.round((1e3 * e) / 1e27) / 1e3 + " Octillion"
          : e >= 1e24
          ? "$" + Math.round((1e3 * e) / 1e24) / 1e3 + " Septillion"
          : e >= 1e21
          ? "$" + Math.round((1e3 * e) / 1e21) / 1e3 + " Sextillion"
          : e >= 1e18
          ? "$" + Math.round((1e3 * e) / 1e18) / 1e3 + " Quintillion"
          : e >= 1e15
          ? "$" + Math.round((1e3 * e) / 1e15) / 1e3 + " Quadrillion"
          : e >= 1e12
          ? "$" + Math.round((1e3 * e) / 1e12) / 1e3 + " Trillion"
          : e >= 1e9
          ? "$" + Math.round((1e3 * e) / 1e9) / 1e3 + " Billion"
          : e >= 1e6
          ? "$" + Math.round((1e3 * e) / 1e6) / 1e3 + " Million"
          : "$" + e;
    return t;
  }
  function res() {    
    chrome.storage.sync.set({
      game_data: {
        balance: 0,
        bonus_clicks: 0,
        items: 0,
        decimal_digits: 0,
        upgrade_details: 0,
        prestige_points: 0,
      },
    });
  }
  function b() {    
    chrome.storage.sync.set({
      game_data: {
        balance: e,
        bonus_clicks: o,
        items: t,
        decimal_digits: i,
        upgrade_details: s,
        prestige_points: a,
      },
    });
  }

  function f(e, t, n) {
    t.addEventListener("click", function () {
      h(n);
      for (var o = 0; o < 5; o++) {
        var l = e[o];
        "rgb(255, 255, 255)" == l.style.backgroundColor &&
          l.removeAttribute("style");
      }
      (t.style.border = "0.5px solid #000000"),
        (t.style.borderBottom = "none"),
        (t.style.background = "#FFFFFF");
    });
  }
  function I() {
    for (var e = 1, n = 1; n < 24; n++) {
      t[n] && (e += c[n][0]);
    }
    for (
      var o = 0, l = s.income_boost.bought, i = 1;
      i < s.income_boost.levels + 1;
      i++
    )
      l[i] && o++;
    return (e *= 1 + o / 10), (e *= 1 + (5 * a) / 10), (e = Math.round(e));
  }
  function E() {
    click_rate = 0;
    for (
      var e = s.bonus_clicks.bought, t = 1;
      t < Object.keys(e).length + 1;
      t++
    )
      e[t] && (click_rate += 0.1 + z); 
    return Math.round(10 * click_rate) / 10;
  }
  function h(e) {
    for (
      var o = document.getElementById(e + "_screen"),
        l = document.getElementsByClassName("switchButton"),
        i = 0;
      i < l.length;
      i++
    ) {
      var d = l[i];
      if ("rgb(255, 255, 255)" == d.style.background)
        var r = d.id.substr(0, d.id.indexOf("_")),
          p = document.getElementById(r + "_screen");
    }
    if (((p.style.display = "none"), "income_screen" == p.id))
      (document.getElementById("income_back").style.display = "none"),
        (document.getElementById("income_next").style.display = "none");
    else if ("help_screen" == p.id) {
      (document.getElementById("help_back").style.display = "none"),
        (document.getElementById("help_next").style.display = "none");
      for (var b = 2; b < y + 1; b++)
        document.getElementById("help_pg" + b).style.display = "none";
      (document.getElementById("help_pg1").style.display = "block"), (u = 1);
    } else if ("updates_screen" == p.id) {
      (document.getElementById("updates_back").style.display = "none"),
        (document.getElementById("updates_next").style.display = "none");
      for (b = 2; b < g + 1; b++) {
        var f = "updates_pg" + b;
        document.getElementById(f).style.display = "none";
      }
      (document.getElementById("updates_pg1").style.display = "block"), (m = 1);
    }
    "income_screen" == o.id
      ? (function () {
          var e = document.getElementById("income_screen_pg1"),
            o = document.getElementById("income_screen_pg2");
          (e.style.display = "block"), (o.style.display = "none");
          var l = document.getElementById("incomescreen_income"),
            i = _(n);
          l.innerHTML = i;
          var d = document.getElementById("prestige_points_info"),
            r = a;
          (r += " (+" + 50 * a + "%)"), (d.innerHTML = r);
          for (
            var u = 0, y = s.income_boost.bought, m = 1;
            m < s.income_boost.levels + 1;
            m++
          )
            y[m] && u++;
          var g = document.getElementById("boosts_number");
          g.innerHTML = 0 == u ? "None" : "+" + 10 * u + "%";
          var p = document.getElementById("total_boost_number");
          p.innerHTML =
            u + a == 0
              ? "None"
              : 0 == a
              ? "+" + 10 * u + "%"
              : "+" + (50 * a + (1 + (5 * a) / 10) * u * 10) + "%";
          for (var b = "", f = "", I = 1; I < 10; I++)
            if (1 == t[I]) {
              (b += c[I][1]), (b += ": Income + ");
              var E = c[I][0].toLocaleString();
              (b += E), (b += "<br><br>");
            }
          for (var I = 10; I < 24; I++)
            if (1 == t[I]) {
              (f += c[I][1]), (f += ": Income +");
              var E = c[I][0].toLocaleString();
              (f += E), (f += "<br><br>");
            }
          (b += "<br><br>"), (f += "<br><br>");
          var h = document.getElementById("possessions_pg1"),
            v = document.getElementById("possessions_pg2");
          "<br><br>" == b
            ? (h.innerHTML = "You have no possessions! =(")
            : "<br><br>" == f
            ? (h.innerHTML = b)
            : ((h.innerHTML = b),
              (v.innerHTML = f),
              (document.getElementById("income_next").style.display = "block"));
        })()
      : "help_screen" == o.id
      ? (document.getElementById("help_next").style.display = "block")
      : "updates_screen" == o.id
      ? (document.getElementById("updates_next").style.display = "block")
      : "upgrades_screen" == o.id && S(),
      (o.style.display = "block");
  }
  function v() {
    (document.getElementById("income_back").style.display = "none"),
      (document.getElementById("income_next").style.display = "block"),
      (document.getElementById("income_screen_pg1").style.display = "block"),
      (document.getElementById("income_screen_pg2").style.display = "none");
  }
  function B() {
    (document.getElementById("income_back").style.display = "block"),
      (document.getElementById("income_next").style.display = "none"),
      (document.getElementById("income_screen_pg1").style.display = "none"),
      (document.getElementById("income_screen_pg2").style.display = "block");
  }
  function k() {
    var e = document.getElementById("help_back"),
      t = document.getElementById("help_next"),
      n = document.getElementById("help_pg" + u),
      o = document.getElementById("help_pg" + (u - 1));
    u--,
      (t.style.display = "block"),
      (n.style.display = "none"),
      (o.style.display = "block"),
      1 == u && (e.style.display = "none");
  }
  function M() {
    var e = document.getElementById("help_back"),
      t = document.getElementById("help_next"),
      n = document.getElementById("help_pg" + u),
      o = document.getElementById("help_pg" + (u + 1));
    u++,
      (e.style.display = "block"),
      (n.style.display = "none"),
      (o.style.display = "block"),
      u == y && (t.style.display = "none");
  }
  function L() {
    var e = document.getElementById("updates_back"),
      t = document.getElementById("updates_next"),
      n = document.getElementById("updates_pg" + m),
      o = document.getElementById("updates_pg" + (m - 1));
    m--,
      (t.style.display = "block"),
      (n.style.display = "none"),
      (o.style.display = "block"),
      1 == m && (e.style.display = "none");
  }
  function T() {
    var e = document.getElementById("updates_back"),
      t = document.getElementById("updates_next"),
      n = document.getElementById("updates_pg" + m),
      o = document.getElementById("updates_pg" + (m + 1));
    m++,
      (e.style.display = "block"),
      (n.style.display = "none"),
      (o.style.display = "block"),
      m == g && (t.style.display = "none");
  }
  function $() {
    (document.getElementById("content_area").style.display = "none"),
      (document.getElementById("prestige_area").style.display = "none"),
      (document.getElementById("prestige_back").style.display = "none"),
      (document.getElementById("casino_area").style.display = "none"),
      (document.getElementById("casino_back").style.display = "none"),
      (document.getElementById("settings_area").style.display = "block"),
      (document.getElementById("settings_back").style.display = "block"),
      (document.getElementById("settings_save_note").style.display = "block");
  }
  function Y() {
    (document.getElementById("content_area").style.display = "block"),
      (document.getElementById("settings_area").style.display = "none"),
      (document.getElementById("settings_back").style.display = "none"),
      (document.getElementById("settings_save_note").style.display = "none");
  }
  function x() {
    (document.getElementById("content_area").style.display = "none"),
      (document.getElementById("settings_area").style.display = "none"),
      (document.getElementById("settings_back").style.display = "none"),
      (document.getElementById("settings_save_note").style.display = "none"),
      (document.getElementById("casino_area").style.display = "none"),
      (document.getElementById("casino_back").style.display = "none"),
      (document.getElementById("prestige_area").style.display = "block"),
      (document.getElementById("prestige_back").style.display = "block");
    for (
      var e = 0,
        n = document.getElementById("do_prestige_button"),
        o = document.getElementById("prestige_get"),
        l = 1;
      l < 24;
      l++
    )
      1 == t[l] && e++;
    (d = e > 10 ? e - 10 : 0),
      (o.innerHTML = d),
      (n.style.pointerEvents = 0 == d ? "none" : "auto");
  }
  function w() {
    (document.getElementById("content_area").style.display = "block"),
      (document.getElementById("prestige_area").style.display = "none"),
      (document.getElementById("prestige_back").style.display = "none");
  }
  function H() {
    (document.getElementById("casino_area").style.display = "block"),
      (document.getElementById("casino_back").style.display = "block"),
      (document.getElementById("prestige_area").style.display = "none"),
      (document.getElementById("prestige_back").style.display = "none"),
      (document.getElementById("settings_area").style.display = "none"),
      (document.getElementById("settings_save_note").style.display = "none"),
      (document.getElementById("settings_back").style.display = "none"),
      (document.getElementById("content_area").style.display = "none"),
      O();
    var e = document.getElementById("slot_1_digit"),
      t = document.getElementById("slot_2_digit"),
      n = document.getElementById("slot_3_digit");
    (e.innerHTML = "0"), (t.innerHTML = "0"), (n.innerHTML = "0");
  }
  function O() {
    var t = document.getElementById("casino_money"),
      n = _(e);
    t.innerHTML = n;
  }
  function F() {
    (document.getElementById("casino_area").style.display = "none"),
      (document.getElementById("casino_back").style.display = "none"),
      (document.getElementById("content_area").style.display = "block"),
      (document.getElementById("gamble_message").innerHTML = "");
  }
  function S() {
    for (var t = Object.keys(s), n = 0; n < t.length; n++) {
      for (
        var o = t[n],
          l = document.getElementById(o + "_buy"),
          i = document.getElementById(o + "_cost"),
          a = document.getElementById(o + "_inbutton"),
          d = s[o],
          c = d.levels,
          r = d.costs,
          u = d.bought,
          y = 1;
        y < c + 1;
        y++
      ) {
        if (0 == u[y]) {
          var m = y,
            g = r[y - 1];
          break;
        }
        (m = !1), (g = !1);
      }
      if (m && g) {
        var p = _(g);
        (i.innerHTML = p),
          e >= g
            ? ((a.innerHTML = "Buy"),
              (a.style = "font-size: 15px;"),
              (l.style = "pointer-events: auto;"))
            : ((a.innerHTML = "CANNOT<br>AFFORD"),
              (a.style = "font-size: 10px;"),
              (l.style = "pointer-events: none;"));
      } else
        (i.innerHTML = "NONE"),
          (a.innerHTML = "ALL<br>BOUGHT"),
          (a.style = "font-size: 10px;"),
          (l.style = "pointer-events: none;");
    }
  }
  function D() {
    var t = document.getElementById("moneyscreen_income"),
      l = document.getElementById("moneyscreen_money"),
      i = document.getElementById("amount_bonus_clicks"),
      s = document.getElementById("bonus_click_rate");
    (n = I()), (bonus_click_rate = E());
    var a = _(n),
      d = _(e);
    (t.innerHTML = a),
      (l.innerHTML = d),
      (i.innerHTML = o),
      (s.innerHTML = "(+ " + bonus_click_rate + " / click)");
  }
  function C() {
    N(), A();
  }
  function N() {
    var n = document.getElementById("status");
    t[25]
      ? (n.innerHTML =
          "You have finally completed your quest; you own Everything! But... You feel the urge to get more. Press X to enter the Cheat Menu...")
      : (n.innerHTML =
          e >= 1e40
            ? "You have multiplied reality, created new worlds - is there anything else for you to do? Is there anything more to say? Thank you for playing this mod, by WeDonHaveAName Studios"
            : e >= 5e32
            ? "You own Everything... Good job. Now, what shall you do? Press X?"
            : e >= 5e28
            ? "You are now the God of Wealth, ruling over the Golden Galaxy"
            : e >= 5e22
            ? "You have trancended all aspects of wealth"
            : e >= 5e19
            ? "You do not own the money, YOU ARE THE MONEY!"
            : e >= 5e16
            ? "Aliens from other galaxies have invited you to speak to them about your wealth."
            : e >= 5e14
            ? "You are so wealthy that your money no longer fits on Earth!"
            : e >= 5e13
            ? "The governments of major countries are asking you for donations to pay off their debts."
            : e >= 5e12
            ? "You have so much money conspiracy theorists think you are actually God in disguise."
            : e >= 1e12
            ? "You are so rich that you have 1% of the total US Dollars in circulation!"
            : e >= 25e10
            ? "You have more than the value of all the gold in Fort Knox."
            : e >= 1e11
            ? "You were on the front cover of TIME MAGAZINE for being the richest person alive!"
            : e >= 25e9
            ? "Rumors suggest Elon Musk is trying to figure out the secrets of your wealth."
            : e >= 3e9
            ? "You are wealthier than Donald Trump."
            : e >= 1e9
            ? "You are now one of the 2,208 billionares in the world!"
            : e >= 25e7
            ? "Business analysts have already written numerous articles about you and your wealth."
            : e >= 1e8
            ? "You have been appointed the CEO of Money Inc, a company soley dedicated to advertising your wealth!"
            : e >= 5e7
            ? "Your influence has caused the stock market to rise 5% in a week!"
            : e >= 1e7
            ? "Various universities have invited you to give economics lectures about how you became so rich."
            : e >= 5e6
            ? "Foreign diplomats are meeting with you to see if you can help them make their countries more financially efficient!"
            : e >= 1e6
            ? "You have been asked to give classes on making money so that others may learn your ways."
            : e >= 5e5
            ? "You are now in the top 1% of the everyone in the world by wealth."
            : e >= 25e4
            ? "You are known in your community as 'The Money Man.'"
            : e >= 1e5
            ? "People in your city are now coming to you asking for funding for their companies."
            : e >= 5e4
            ? "You are no longer below average wealth!"
            : e >= 9e3
            ? "Your money is OVER 9000!"
            : e >= 5e3
            ? "You no longer qualify as low income."
            : e >= 1e3
            ? "You are famous in your neighborhood for your rapid gain of wealth."
            : e >= 250
            ? "You are no longer considered food insecure!"
            : e >= 50
            ? "You are very poor, but you are now above the poverty line!"
            : e > 0
            ? "You are extremely poor."
            : 0 == e
            ? "You are broke!"
            : "You are so poor that you literally have a negative amount of money. Stop cheating :^)");
  }
  function A() {
    r = [];
    for (var n = 0; n < 24; n++)
      0 == t[n] && e >= 3 * c[n][2]
        ? r.push(n)
        : 23 == n && 0 == t[n] && e >= c[n][2] && r.push(n);
    0 == (r = r.sort((e, t) => e - t)).length &&
      (document.getElementById("buy_area").style.display = "none");
    for (var o = 0; o < r.length; o++) {
      var i = document.getElementById("buy_area"),
        s = document.getElementById("buy_status"),
        a = R((n = r[o]));
      (i.style.display = "block"), (s.innerHTML = a), (l = n);
    }
  }
  function R(e) {
    return 1 == e
      ? "You can afford a water bottle! ($10) (Income + 1)"
      : 2 == e
      ? "You can afford a backpack! ($50) (Income + 1)"
      : 3 == e
      ? "You can afford a cart to carry your possessions! ($100) (Income + 1)"
      : 4 == e
      ? "You can afford a brand new bicycle! ($200) (Income + 2)"
      : 5 == e
      ? "You can afford a new smartphone! ($750) (Income + 3)"
      : 6 == e
      ? "You can afford a new gaming laptop! ($2,000) (Income + 3)"
      : 7 == e
      ? "You can afford a large plasma TV! ($5,000) (Income + 5)"
      : 8 == e
      ? "You can afford a good motorcycle! ($15,000) (Income + 10)"
      : 9 == e
      ? "You can afford a brand new car! ($35,000) (Income + 15)"
      : 10 == e
      ? "You can afford a new luxury car! ($100,000) (Income + 20)"
      : 11 == e
      ? "You can afford an apartment in Manhattan! ($300,000) (Income + 50)"
      : 12 == e
      ? "You can afford a house! ($1,000,000) (Income + 250)"
      : 13 == e
      ? "You can afford a giant mansion! ($10,000,000) (Income + 1,000)"
      : 14 == e
      ? "You can afford a rocket! ($100,000,000) (Income + 3,000)"
      : 15 == e
      ? "You can afford a space shuttle! ($1,000,000,000) (Income + 5,000)"
      : 16 == e
      ? "You can afford the Saturn V rocket! ($5,000,000,000) (Income + 10,000)"
      : 17 == e
      ? "You can afford to go to the moon! ($25,000,000,000) (Income + 100,000)"
      : 18 == e
      ? "You afford to buy McDonald's! ($100,000,000,000) (Income + 1,000,000)"
      : 19 == e
      ? "You can afford to buy Apple! ($1,000,000,000,000) (Income + 10,000,000)"
      : 20 == e
      ? "You can afford to buy every company on the Fortune 500! ($20,000,000,000,000) (Income + 50,000,000)"
      : 21 == e
      ? "You can afford to buy the entire United States! ($200,000,000,000,000) (Income + 1,000,000,000)"
      : 22 == e
      ? "You can afford to buy everything in the entire world! ($1,000,000,000,000,000) (Income + 10,000,000,000)"
      : 23 == e
      ? "You afford to buy the planet Earth! ($100,000,000,000,000,000) (Income + 100,000,000,000,000,000)"
      : 24 == e
      ? "You can buy Mars! ($1,000,000,000,000,000,000) (Income + 100,000,000,000,000,000,000)"
      : 25 == e
      ? "You can buy the Whole Solar System!! ($100,000,000,000,000,000,000) (Income + 100,000,000,000,000,000,000,000)"
      : "ERROR: Invalid item!";
  };
  chrome.storage.sync.get("game_data", function (n) {
    var l = n.game_data;
    l
      ? ((e = l.balance),
        (o = l.bonus_clicks),
        (t = l.items),
        (i = l.decimal_digits),
        (s = l.upgrade_details),
        (a = l.prestige_points) || (a = 0))
      : ((e = 0),
        (o = 0),
        (t = {
          1: !1,
          2: !1,
          3: !1,
          4: !1,
          5: !1,
          6: !1,
          7: !1,
          8: !1,
          9: !1,
          10: !1,
          11: !1,
          12: !1,
          13: !1,
          14: !1,
          15: !1,
          16: !1,
          17: !1,
          18: !1,
          19: !1,
          20: !1,
          21: !1,
          22: !1,
          23: !1,
          24: !1,
          25: !1,	
          26: !1,
          27: !1,
          28: !1,
        }),
        (i = 3),
        (s = {
          income_boost: {
            levels: 28,
            costs: [
              1e5, 1e6, 5e6, 1e7, 25e6, 5e7, 75e6, 1e8, 25e7, 5e8, 75e7, 1e9,
              5e9, 1e10, 5e10, 1e11, 25e10, 5e11, 75e10, 1e12, 5e12, 1e13, 1e14,
              5e14, 1e15, 1e16, 1e17, 1e18
            ],
            bought: {
              1: !1,
              2: !1,
              3: !1,
              4: !1,
              5: !1,
              6: !1,
              7: !1,
              8: !1,
              9: !1,
              10: !1,
              11: !1,
              12: !1,
              13: !1,
              14: !1,
              15: !1,
              16: !1,
              17: !1,
              18: !1,
              19: !1,
              20: !1,
              21: !1,
              22: !1,
              23: !1,
              24: !1,
              25: !1,
              26: !1,
              27: !1,
              28: !1,

            },
          },
          bonus_clicks: {
            levels: 63,
            costs: [
              1e3, 1e4, 5e4, 1e5, 5e5, 1e6, 15e5, 2e6, 25e5, 3e6, 35e5, 4e6,
              45e5, 5e6, 75e5, 1e7, 15e6, 2e7, 25e6, 3e7, 35e6, 4e7, 45e6, 5e7,
              75e6, 1e8, 15e7, 2e8, 25e7, 3e8, 35e7, 4e8, 45e7, 5e8, 75e7, 1e9,
              15e8, 2e9, 25e8, 3e9, 35e8, 4e9, 45e8, 5e9, 75e8, 1e10, 1e11,
              1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25, 1e26, 1e26,
            ],
            bought: {
              1: !1,
              2: !1,
              3: !1,
              4: !1,
              5: !1,
              6: !1,
              7: !1,
              8: !1,
              9: !1,
              10: !1,
              11: !1,
              12: !1,
              13: !1,
              14: !1,
              15: !1,
              16: !1,
              17: !1,
              18: !1,
              19: !1,
              20: !1,
              21: !1,
              22: !1,
              23: !1,
              24: !1,
              25: !1,
              26: !1,
              27: !1,
              28: !1,
              29: !1,
              30: !1,
              31: !1,
              32: !1,
              33: !1,
              34: !1,
              35: !1,
              36: !1,
              37: !1,
              38: !1,
              39: !1,
              40: !1,
              41: !1,
              42: !1,
              43: !1,
              44: !1,
              45: !1,
              46: !1,
              47: !1,
              48: !1,
              49: !1,
              50: !1,
              51: !1,
              52: !1,
              53: !1,
              54: !1,
              55: !1,
              56: !1,
              57: !1,
              58: !1,
              59: !1,
              60: !1,
              61: !1,
              62: !1,
              63: !1,
            },
          },
        }),
        (a = 0),
	b());
  }),
    document.addEventListener("DOMContentLoaded", function () {
      var r = setInterval(function () {
        if (void 0 !== e && void 0 !== o && t && i && s && void 0 !== a) {
          if (
            (chrome.runtime.requestUpdateCheck(function (e) {
              console.log(`UPDATE CHECK: ${e}`);
            }),
            clearInterval(r),
            36 == s.bonus_clicks.levels)
          ) {
            s.bonus_clicks.levels = 63;
            for (var u = 37; u < 51; u++) s.bonus_clicks.bought[u] = !1;
            s.bonus_clicks.costs = [
              1e3, 1e4, 5e4, 1e5, 5e5, 1e6, 15e5, 2e6, 25e5, 3e6, 35e5, 4e6,
              45e5, 5e6, 75e5, 1e7, 15e6, 2e7, 25e6, 3e7, 35e6, 4e7, 45e6, 5e7,
              75e6, 1e8, 15e7, 2e8, 25e7, 3e8, 35e7, 4e8, 45e7, 5e8, 75e7, 1e9,
              15e8, 2e9, 25e8, 3e9, 35e8, 4e9, 45e8, 5e9, 75e8, 1e10, 1e11,
              1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25, 1e26, 1e26,
            ];
          } else if (46 == s.bonus_clicks.levels) {
            s.bonus_clicks.levels = 63;
            for (u = 47; u < 51; u++) s.bonus_clicks.bought[u] = !1;
            s.bonus_clicks.costs = [
              1e3, 1e4, 5e4, 1e5, 5e5, 1e6, 15e5, 2e6, 25e5, 3e6, 35e5, 4e6,
              45e5, 5e6, 75e5, 1e7, 15e6, 2e7, 25e6, 3e7, 35e6, 4e7, 45e6, 5e7,
              75e6, 1e8, 15e7, 2e8, 25e7, 3e8, 35e7, 4e8, 45e7, 5e8, 75e7, 1e9,
              15e8, 2e9, 25e8, 3e9, 35e8, 4e9, 45e8, 5e9, 75e8, 1e10, 1e11,
              1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25, 1e26, 1e26,
            ];
          }
          if (!s.bonus_clicks.bought.hasOwnProperty(37))
            for (u = 37; u < 50; u++) s.bonus_clicks.bought[u] = !1;
          22 == Object.keys(t).length &&
            ((t[23] = t[22]),
            (t[22] = t[21]),
            (t[21] = t[20]),
            (t[20] = t[19]),
            (t[19] = t[18]),
            (t[18] = t[17]),
            (t[17] = t[16]),
            (t[16] = t[15]),
            (t[15] = !1));
            var y = document.getElementById("money_switch");
            y.style.border = "0.5px solid #000000";
            y.style.borderBottom = "none";
            y.style.background = "#FFFFFF";
//HARD RESET, PASTE INTO CONSOLE IF NEED
function hardReset() {
    res();
}





// Create a variable to track if the cheat window is already open
let cheatWindow = null;

// Open a new window for cheats
function openCheatWindow() {
    if (cheatWindow && !cheatWindow.closed) {
        cheatWindow.focus(); // Focus the window if it's already open
        return;
    }

    cheatWindow = window.open("", "CheatWindow", "width=900,height=500");

    // Add basic HTML structure to the new window
    cheatWindow.document.write(`
        <html>
            <head>
                <title>WeDonHaveAMOD!</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: white;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .container {
                        background-color: white;
                        border: 3px solid black;
                        border-radius: 15px;
                        width: 300px;
                        height: auto;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    }
                    .title {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    button {
                        width: 90%;
                        max-width: 250px;
                        padding: 12px;
                        background-color: black;
                        color: white;
                        border: none;
                        border-radius: 50px;
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 15px;
                        cursor: pointer;
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }
                    button:hover {
                        transform: scale(1.1);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
                    }
                    button:active {
                        transform: scale(1);
                        box-shadow: none;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="title">WeDonHaveAName Mods</div>
                    <button id="doubleMoneyButton">Times 10 Money</button>
                    <button id="setMoneyButton">Set Money</button>
		     <button id="bonusClickEff">Increase Bonus Click Efficiency</button>
		     <button id="pressPoint">Plus 2 presteige points</button>
		     <button id="pressSet">Set presetige points</button>
		     <button id="resetPress">Reset presteige points</button>
                </div>
            </body>
        </html>
    `);

    // Access the buttons in the new window
    const doubleMoneyButton = cheatWindow.document.getElementById("doubleMoneyButton");
    const setMoneyButton = cheatWindow.document.getElementById("setMoneyButton");
    const bonusClickEff = cheatWindow.document.getElementById("bonusClickEff");
    const pressPoint = cheatWindow.document.getElementById("pressPoint");
    const resetPress = cheatWindow.document.getElementById("resetPress");
    const pressSet = cheatWindow.document.getElementById("pressSet");

    // Add event listener for the double money button
    doubleMoneyButton.addEventListener("click", function () {
        e *= 10; // Lots of the money
        console.log("Money 10* multiply triggered!");
        D(); // Update money display
        C(); // Recalculate dependencies
    });
    bonusClickEff.addEventListener("click", function() {
	z = z + 100000;
	console.log("Increaced efficiency to " + z + ".");
        D();
	C();
    });
    pressPoint.addEventListener("click", function() {
        a += 2;
        console.log("Increaced presetige by 2")
        D();
        C();
    });
    resetPress.addEventListener("click", function() {
        a = 0;
        console.log("Reset presteige")
        D();
        C();
    });
    // Add event listener for the set money button
    setMoneyButton.addEventListener("click", function () {
        const newMoney = parseInt(prompt("Enter the amount of money:"), 10);
        if (!isNaN(newMoney) && newMoney >= 0) {
            e = newMoney;
            console.log(`Money set to ${newMoney}`);
            D(); // Update money display
            C(); // Recalculate dependencies
        } else {
            alert("Please enter a valid amount of money. NO NEGATIVES");
        }
    });
    pressSet.addEventListener("click", function () {
        const newPress = parseInt(prompt("Enter the amount of presteige:"), 10);
        if (!isNaN(newPress) && newPress >= 0) {
            a = newPress;
            console.log(`Presteige points set to ${newPress}`);
            D(); // Update money display
            C(); // Recalculate dependencies
        } else {
            alert("Please enter a valid amount. NO NEGATIVES");
        }
    });
}

// Add a keydown listener to open the cheat menu with the "X" key
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "x") {
        openCheatWindow();
    }
});

            document
              .getElementById("settings_button")
              .addEventListener("click", $),
            document
              .getElementById("settings_back")
              .addEventListener("click", Y),
            document
              .getElementById("prestige_button")
              .addEventListener("click", x),
            document
              .getElementById("do_prestige_button")
              .addEventListener("click", function (n) {
                (0 == n.screenX &&
                  0 == n.screenY &&
                  0 == n.clientX &&
                  0 == n.clientY) ||
                !n.isTrusted
                  ? n.preventDefault()
                  : (function () {
                      var n = document.getElementById("popup_contents");
                      (a += d),
                        (d = 0),
                        (e = 0),
                        (o = 0),
                        (t = {
                          1: !1,
                          2: !1,
                          3: !1,
                          4: !1,
                          5: !1,
                          6: !1,
                          7: !1,
                          8: !1,
                          9: !1,
                          10: !1,
                          11: !1,
                          12: !1,
                          13: !1,
                          14: !1,
                          15: !1,
                          16: !1,
                          17: !1,
                          18: !1,
                          19: !1,
                          20: !1,
                          21: !1,
                          22: !1,
                          23: !1,
                          24: !1,
                          25: !1,
                          26: !1,
                          27: !1,
                          28: !1,
                        }),
                        (i = 3),
                        (s = {
                          income_boost: {
                            levels: 28,
                            costs: [
                              1e5, 1e6, 5e6, 1e7, 25e6, 5e7, 75e6, 1e8, 25e7,
                              5e8, 75e7, 1e9, 5e9, 1e10, 5e10, 1e11, 25e10,
                              5e11, 75e10, 1e12, 5e12, 1e13, 1e14, 5e14, 1e15, 1e16, 1e17, 1e18
                            ],
                            bought: {
                              1: !1,
                              2: !1,
                              3: !1,
                              4: !1,
                              5: !1,
                              6: !1,
                              7: !1,
                              8: !1,
                              9: !1,
                              10: !1,
                              11: !1,
                              12: !1,
                              13: !1,
                              14: !1,
                              15: !1,
                              16: !1,
                              17: !1,
                              18: !1,
                              19: !1,
                              20: !1,
                              21: !1,
                              22: !1,
                              23: !1,
                              24: !1,
                              25: !1,
                              25: !1,
                              26: !1,
                              27: !1,
                              28: !1,
                            },
                          },
                          bonus_clicks: {
                            levels: 63,
                            costs: [
                              1e3, 1e4, 5e4, 1e5, 5e5, 1e6, 15e5, 2e6, 25e5,
                              3e6, 35e5, 4e6, 45e5, 5e6, 75e5, 1e7, 15e6, 2e7,
                              25e6, 3e7, 35e6, 4e7, 45e6, 5e7, 75e6, 1e8, 15e7,
                              2e8, 25e7, 3e8, 35e7, 4e8, 45e7, 5e8, 75e7, 1e9,
                              15e8, 2e9, 25e8, 3e9, 35e8, 4e9, 45e8, 5e9, 75e8,
                              1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18,
   			      1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25, 1e26, 1e26,
                            ],
                            bought: {
                              1: !1,
                              2: !1,
                              3: !1,
                              4: !1,
                              5: !1,
                              6: !1,
                              7: !1,
                              8: !1,
                              9: !1,
                              10: !1,
                              11: !1,
                              12: !1,
                              13: !1,
                              14: !1,
                              15: !1,
                              16: !1,
                              17: !1,
                              18: !1,
                              19: !1,
                              20: !1,
                              21: !1,
                              22: !1,
                              23: !1,
                              24: !1,
                              25: !1,
                              26: !1,
                              27: !1,
                              28: !1,
                              29: !1,
                              30: !1,
                              31: !1,
                              32: !1,
                              33: !1,
                              34: !1,
                              35: !1,
                              36: !1,
                              37: !1,
                              38: !1,
                              39: !1,
                              40: !1,
                              41: !1,
                              42: !1,
                              43: !1,
                              44: !1,
                              45: !1,
                              46: !1,
                              47: !1,
                              48: !1,
                              49: !1,
                              50: !1,
                              51: !1,
                              52: !1,
                              53: !1,
                              54: !1,
                              55: !1,
                              56: !1,
                              57: !1,
                              58: !1,
                              59: !1,
                              60: !1,
                              61: !1,
                              62: !1,
                              63: !1,
                            },
                          },
                        }),
                        (n.style.pointerEvents = "none");
                      var l = 100,
                        c = setInterval(function () {
                          l--,
                            (n.style.opacity = l / 100),
                            0 == l && clearInterval(c);
                        }, 10);
                      setTimeout(function () {
                        w(),
                          C(),
                          D(),
                          (document.getElementById("buy_area").style.display =
                            "none");
                        var e = document.getElementsByClassName("switchButton");
                        h("money");
                        for (var t = 0; t < 5; t++) {
                          var n = e[t];
                          "rgb(255, 255, 255)" == n.style.backgroundColor &&
                            n.removeAttribute("style");
                        }
                        var o = document.getElementById("money_switch");
                        (o.style.border = "0.5px solid #000000"),
                          (o.style.borderBottom = "none"),
                          (o.style.background = "#FFFFFF");
                      }, 1100),
                        setTimeout(function () {
                          var e = 0,
                            t = setInterval(function () {
                              e++,
                                (n.style.opacity = e / 100),
                                100 == e && clearInterval(t);
                            }, 10);
                        }, 1500),
                        setTimeout(function () {
                          n.style.pointerEvents = "auto";
                        }, 2500);
                    })();
              }),
            document
              .getElementById("prestige_back")
              .addEventListener("click", w),
            document
              .getElementById("casino_button")
              .addEventListener("click", H),
            document
              .getElementById("gamble_button")
              .addEventListener("click", function (t) {
                0 == t.isTrusted ||
                (0 == t.screenX &&
                  0 == t.screenY &&
                  0 == t.clientX &&
                  0 == t.clientY)
                  ? t.preventDefault()
                  : (function () {
                      var t = document.getElementById("gamble_input").value;
                      if (
                        !(
                          "" == t ||
                          parseInt(t) <= 0 ||
                          parseInt(t) > e ||
                          parseInt(t) % 1 != 0
                        )
                      ) {
                        document.getElementById(
                          "gamble_button"
                        ).style.pointerEvents = "none";
                        var n = parseInt(t),
                          o = document.getElementById("slot_1_digit"),
                          l = document.getElementById("slot_2_digit"),
                          i = document.getElementById("slot_3_digit"),
                          s = document.getElementById("gamble_message");
                        (gamble_message.innerHTML = ""),
                          (e -= n),
                          O(),
                          D(),
                          C(),
                          res(),
                          (p = !0);
                        var a = Math.floor(7 * Math.random()) + 1,
                          d = Math.floor(7 * Math.random()) + 1,
                          c = Math.floor(7 * Math.random()) + 1,
                          r = "" + a + d + c,
                          u = setInterval(function () {
                            var e = parseInt(o.innerHTML);
                            9 == e ? (e = 0) : e++, (o.innerHTML = e);
                          }, 10),
                          y = setInterval(function () {
                            var e = parseInt(l.innerHTML);
                            9 == e ? (e = 0) : e++, (l.innerHTML = e);
                          }, 10),
                          m = setInterval(function () {
                            var e = parseInt(i.innerHTML);
                            9 == e ? (e = 0) : e++, (i.innerHTML = e);
                          }, 10);
                        setTimeout(function () {
                          (o.innerHTML = a), clearInterval(u);
                        }, 500),
                          setTimeout(function () {
                            (l.innerHTML = d), clearInterval(y);
                          }, 1e3),
                          setTimeout(function () {
                            (i.innerHTML = c), clearInterval(m);
                          }, 1500),
                          setTimeout(function () {
                            var t = r[0],
                              o = r[1],
                              l = r[2];
                            t == o && o == l && "7" != t
                              ? ((s.innerHTML = "You won 8x your bet!"),
                                (e += 8 * n),
                                O(),
                                D(),
                                C())
                              : t == o && o == l && "7" == t
                              ? ((s.innerHTML = "You won the jackpot! You won 25x your bet!"),
                                (e += Math.round(25 * n)),
                                O(),
                                D(),
                                C())
                              : t == o && "7" != t
                              ? ((s.innerHTML = "You won 3x your bet!"),
                                (e += Math.round(3 * n)),
                                O(),
                                D(),
                                C())
                              : t == o && "7" == t
                              ? ((s.innerHTML = "You won 8x your bet!"),
                                (e += 8 * n),
                                O(),
                                D(),
                                C())
                              : o == l && "7" != o
                              ? ((s.innerHTML = "You won 3x your bet!"),
                                (e += 3 * n),
                                O(),
                                D(),
                                C())
                              : o == l && "7" == o
                              ? ((s.innerHTML = "You won 8x your bet!"),
                                (e += 8 * n),
                                O(),
                                D(),
                                C())
                              : t == l && "7" != o
                              ? ((s.innerHTML = "You won 3x your bet!"),
                                (e += 3 * n),
                                O(),
                                D(),
                                C())
                              : t == l && "7" == t
                              ? ((s.innerHTML = "You won 8x your bet!"),
                                (e += 8 * n),
                                O(),
                                D(),
                                C())
                              : ((s.innerHTML =
                                  "You lost! Better luck next time!"),
                                D(),
                                C());
                          }, 2e3),
                          setTimeout(function () {
                            document.getElementById(
                              "gamble_button"
                            ).style.pointerEvents = "auto";
                          }, 4e3);
                      }
                    })();
              }),
            document.getElementById("casino_back").addEventListener("click", F);
          for (
            var m = document.getElementsByClassName("switchButton"), g = 0;
            g < 5;
            g++
          ) {
            var _ = m[g],
              R = _.id.substr(0, _.id.indexOf("_"));
            f(m, _, R);
          }
          (n = I()), D(), C();
          var Q = document.getElementById("decimal_slider");
          (Q.value = i),
            2 == i
              ? ((document.getElementById(
                  "settings_digits_2"
                ).style.opacity = 1),
                (document.getElementById(
                  "settings_digits_3"
                ).style.opacity = 0.5),
                (document.getElementById(
                  "settings_digits_4"
                ).style.opacity = 0.5))
              : 3 == i
              ? ((document.getElementById(
                  "settings_digits_2"
                ).style.opacity = 0.5),
                (document.getElementById(
                  "settings_digits_3"
                ).style.opacity = 1),
                (document.getElementById(
                  "settings_digits_4"
                ).style.opacity = 0.5))
              : 4 == i &&
                ((document.getElementById(
                  "settings_digits_2"
                ).style.opacity = 0.5),
                (document.getElementById(
                  "settings_digits_3"
                ).style.opacity = 0.5),
                (document.getElementById(
                  "settings_digits_4"
                ).style.opacity = 1)),
            (Q.oninput = function () {
              2 == (i = this.value)
                ? ((document.getElementById(
                    "settings_digits_2"
                  ).style.opacity = 1),
                  (document.getElementById(
                    "settings_digits_3"
                  ).style.opacity = 0.5),
                  (document.getElementById(
                    "settings_digits_4"
                  ).style.opacity = 0.5))
                : 3 == i
                ? ((document.getElementById(
                    "settings_digits_2"
                  ).style.opacity = 0.5),
                  (document.getElementById(
                    "settings_digits_3"
                  ).style.opacity = 1),
                  (document.getElementById(
                    "settings_digits_4"
                  ).style.opacity = 0.5))
                : 4 == i &&
                  ((document.getElementById(
                    "settings_digits_2"
                  ).style.opacity = 0.5),
                  (document.getElementById(
                    "settings_digits_3"
                  ).style.opacity = 0.5),
                  (document.getElementById(
                    "settings_digits_4"
                  ).style.opacity = 1)),
                D();
            }),
            document
              .getElementById("earn_button")
              .addEventListener("click", function (t) {
                t.isTrusted
                  ? (function () {
                      e += n;
                      var t = E();
                      (o += t), (o = Math.round(10 * o) / 10), C(), D();
                    })()
                  : (console.log(
                      "stop cheating :^) \n use enter button instead (click once on button and hold enter)"
                    ),
                    t.preventDefault());
              }),
            document
              .getElementById("bonus_clicks_use")
              .addEventListener("click", function () {
                var t = Math.floor(o);
                (o -= t), (o = Math.round(10 * o) / 10), (e += t * n), D(), C();
              }),
            document
              .getElementById("buy_button")
              .addEventListener("click", function (o) {
                0 == o.screenX &&
                0 == o.screenY &&
                0 == o.clientX &&
                0 == o.clientY
                  ? o.preventDefault()
                  : o.isTrusted
                  ? (function () {
                      var o = !1;
                      if ("none" == l)
                        document.getElementById("buy_status").innerHTML =
                          "ERROR: Invalid! Either you are cheating, or something went wrong...";
                      else {
                        if (c[l][2] > e) return;
                        (t[l] = !0), (n = I()), (e -= c[l][2]), N(), D();
                        for (var i = 1; i < l; i++) 0 == t[i] && (o = !0);
                        o
                          ? A()
                          : ((l = "none"),
                            (document.getElementById("buy_area").style.display =
                              "none"));
                      }
                    })()
                  : (console.log("stop cheating :^)"), o.preventDefault());
              });
          var X = document.getElementById("income_back"),
            U = document.getElementById("income_next");
          X.addEventListener("click", v),
            U.addEventListener("click", B),
            document.querySelectorAll(".upgradeBuy").forEach(function (t) {
              t.addEventListener("click", function (o) {
                0 == o.screenX &&
                0 == o.screenY &&
                0 == o.clientX &&
                0 == o.clientY
                  ? o.preventDefault()
                  : (function (t) {
                      var o = t.parentNode.id;
                      if ("income_boost" == o) {
                        for (
                          var l = (d = s.income_boost).costs,
                            i = d.bought,
                            a = 1;
                          a < s.income_boost.levels + 1;
                          a++
                        )
                          if (0 == i[a]) {
                            if ((c = l[a - 1]) > e) return;
                            s.income_boost.bought[a] = !0;
                            break;
                          }
                      } else if ("bonus_clicks" == o) {
                        var d;
                        for (
                          l = (d = s.bonus_clicks).costs, i = d.bought, a = 1;
                          a < s.bonus_clicks.levels + 1;
                          a++
                        )
                          if (0 == i[a]) {
                            var c;
                            if ((c = l[a - 1]) > e) return;
                            s.bonus_clicks.bought[a] = !0;
                            break;
                          }
                      }
                      (e -= c), N(), (n = I()), D(), S();
                    })(t);
              });
            });
          var V = document.getElementById("updates_back"),
            j = document.getElementById("updates_next");
          V.addEventListener("click", L), j.addEventListener("click", T);
          var q = document.getElementById("help_back"),
            G = document.getElementById("help_next");
          q.addEventListener("click", k),
            G.addEventListener("click", M),
            setInterval(function () {
              p ? (p = !1) : b();
            }, 5e3),
            (window.onblur = function () {
              b();
            }),
            setTimeout(function () {
              var e = 0,
                t = setInterval(function () {
                  (function (e) {
                    var t = document.getElementById("intro_screen"),
                      n = document.getElementById("popup_contents"),
                      o = 1 - e / 100,
                      l = e / 100;
                    (o = parseFloat(o.toFixed(2))),
                      (t.style.opacity = o),
                      (n.style.opacity = l);
                  })(++e),
                    100 == e &&
                      (clearInterval(t),
                      (document.getElementById(
                        "popup_contents"
                      ).style.pointerEvents = "auto"));
                }, 6);
            }, 700);
        }
      }); 50;;
    });
})();
