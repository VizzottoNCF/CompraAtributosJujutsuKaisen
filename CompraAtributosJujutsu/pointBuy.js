
/*
Version 1.12.9
02/21/2021

To Do:

Future Releases:
More efficient getTotals
Redo house rules section
Honor / Sanity Support

*/
var initialLoad = true;

document.getElementById("TotalStr").textContent = TotalStr;
document.getElementById("TotalDex").textContent = TotalDex;
document.getElementById("TotalCon").textContent = TotalCon;
document.getElementById("TotalInt").textContent = TotalInt;
document.getElementById("TotalWis").textContent = TotalWis;
document.getElementById("TotalCha").textContent = TotalCha;
document.getElementById("ModifierStr").textContent = ModifierStr;
document.getElementById("ModifierDex").textContent = ModifierDex;
document.getElementById("ModifierCon").textContent = ModifierCon;
document.getElementById("ModifierInt").textContent = ModifierInt;
document.getElementById("ModifierWis").textContent = ModifierWis;
document.getElementById("ModifierCha").textContent = ModifierCha;
document.getElementById("PointcostStr").textContent = PointcostStr;
document.getElementById("PointcostDex").textContent = PointcostDex;
document.getElementById("PointcostCon").textContent = PointcostCon;
document.getElementById("PointcostInt").textContent = PointcostInt;
document.getElementById("PointcostWis").textContent = PointcostWis;
document.getElementById("PointcostCha").textContent = PointcostCha;

// Closes menu on mobile
$(document).on('click', function (event) {
    if (!$(event.target).is('.menuCheck') && !$(event.target).is('.hamburger span') && !$(event.target).is('.saveHead')) {
        $('.menuCheck').prop('checked', false);
    }
});
var attr1 = '';
var attr2 = '';

var Points = [-20, -16, -12, -9, -6, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19];
var PointsDefault = [-20, -16, -12, -9, -6, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19];

function getTotals() {

    var AbilityModifiers = [-5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

    
    var RacialStr = parseInt($('span#RacialStr').text());
    var RacialDex = parseInt($('span#RacialDex').text());
    var RacialCon = parseInt($('span#RacialCon').text());
    var RacialInt = parseInt($('span#RacialInt').text());
    var RacialWis = parseInt($('span#RacialWis').text());
    var RacialCha = parseInt($('span#RacialCha').text());
    

    var TotalStr = AttributeStr + RacialStr;
    var TotalDex = AttributeDex + RacialDex;
    var TotalCon = AttributeCon + RacialCon;
    var TotalInt = AttributeInt + RacialInt;
    var TotalWis = AttributeWis + RacialWis;
    var TotalCha = AttributeCha + RacialCha;

    $('span#TotalStr').html(TotalStr);
    $('span#TotalDex').html(TotalDex);
    $('span#TotalCon').html(TotalCon);
    $('span#TotalInt').html(TotalInt);
    $('span#TotalWis').html(TotalWis);
    $('span#TotalCha').html(TotalCha);

    var PointcostStr = Points[AttributeStr];
    var PointcostDex = Points[AttributeDex];
    var PointcostCon = Points[AttributeCon];
    var PointcostInt = Points[AttributeInt];
    var PointcostWis = Points[AttributeWis];
    var PointcostCha = Points[AttributeCha];

    var ModifierStr = AbilityModifiers[TotalStr];
    var ModifierDex = AbilityModifiers[TotalDex];
    var ModifierCon = AbilityModifiers[TotalCon];
    var ModifierInt = AbilityModifiers[TotalInt];
    var ModifierWis = AbilityModifiers[TotalWis];
    var ModifierCha = AbilityModifiers[TotalCha];

    var TotalCost = parseInt(PointcostStr) + parseInt(PointcostDex) + parseInt(PointcostCon) + parseInt(PointcostInt) + parseInt(PointcostWis) + parseInt(PointcostCha);
    var AvailablePointsTotal = AvailablePoints;

    var AvailablePoints = parseInt($('input#AvailablePoints').val());

    var AttributeMax = parseInt($('input#AttributeMax').val());
    var AttributeMin = parseInt($('input#AttributeMin').val());

    $('input#AttributeStr').attr('max', AttributeMax);
    $('input#AttributeDex').attr('max', AttributeMax);
    $('input#AttributeCon').attr('max', AttributeMax);
    $('input#AttributeInt').attr('max', AttributeMax);
    $('input#AttributeWis').attr('max', AttributeMax);
    $('input#AttributeCha').attr('max', AttributeMax);

    $('input#AttributeStr').attr('min', AttributeMin);
    $('input#AttributeDex').attr('min', AttributeMin);
    $('input#AttributeCon').attr('min', AttributeMin);
    $('input#AttributeInt').attr('min', AttributeMin);
    $('input#AttributeWis').attr('min', AttributeMin);
    $('input#AttributeCha').attr('min', AttributeMin);

    $('span#AvailablePointsTotal').html(AvailablePoints);
    $('span#TotalCost').html(TotalCost);

    $('span#PointcostStr').html(PointcostStr);
    $('span#PointcostDex').html(PointcostDex);
    $('span#PointcostCon').html(PointcostCon);
    $('span#PointcostInt').html(PointcostInt);
    $('span#PointcostWis').html(PointcostWis);
    $('span#PointcostCha').html(PointcostCha);

    $('span#ModifierStr').html(ModifierStr);
    $('span#ModifierDex').html(ModifierDex);
    $('span#ModifierCon').html(ModifierCon);
    $('span#ModifierInt').html(ModifierInt);
    $('span#ModifierWis').html(ModifierWis);
    $('span#ModifierCha').html(ModifierCha);

    if (!initialLoad) {
        var url = window.location.href.split("#")[0] + "#" + getHash();
        $("a.permalink").attr("href", url);
        $("a.permalink").html(url);
        window.location.replace(url);
    }
}

function loadHash(hash) {

    if (initialLoad) {

        initialLoad = false;

        var h = location.hash.replace("#", "");
        var hsplit = h.split('&');
        var hstr = hsplit[2];
        var hdex = hsplit[3];
        var hcon = hsplit[4];
        var hint = hsplit[5];
        var hwis = hsplit[6];
        var hcha = hsplit[7];
        var hattr1 = hsplit[8];
        var hattr2 = hsplit[9];
        var havail = hsplit[10];
        var hmax = hsplit[11];
        var hmin = hsplit[12];
        var h18 = hsplit[13];
        var h17 = hsplit[14];
        var h16 = hsplit[15];
        var h15 = hsplit[16];
        var h14 = hsplit[17];
        var h13 = hsplit[18];
        var h12 = hsplit[19];
        var h11 = hsplit[20];
        var h10 = hsplit[21];
        var h9 = hsplit[22];
        var h8 = hsplit[23];
        var h7 = '-' + hsplit[24];
        var h6 = '-' + hsplit[25];
        var h5 = '-' + hsplit[26];
        var h4 = '-' + hsplit[27];
        var h3 = '-' + hsplit[28];
        var hrstr = hsplit[29] - 4;
        var hrdex = hsplit[30] - 4;
        var hrcon = hsplit[31] - 4;
        var hrint = hsplit[32] - 4;
        var hrwis = hsplit[33] - 4;
        var hrcha = hsplit[34] - 4;

        attr1 = hattr1;
        attr2 = hattr2;

        $('input#AvailablePoints').val(havail);
        $('input#AttributeMax').val(hmax);
        $('input#AttributeMin').val(hmin);

        $('input.value18').val(h18);
        $('input.value17').val(h17);
        $('input.value16').val(h16);
        $('input.value15').val(h15);
        $('input.value14').val(h14);
        $('input.value13').val(h13);
        $('input.value12').val(h12);
        $('input.value11').val(h11);
        $('input.value10').val(h10);
        $('input.value9').val(h9);
        $('input.value8').val(h8);
        $('input.value7').val(h7);
        $('input.value6').val(h6);
        $('input.value5').val(h5);
        $('input.value4').val(h4);
        $('input.value3').val(h3);

        Points = [-20, -16, -12, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18];

        $('input#AttributeStr').val(hstr);
        $('input#AttributeDex').val(hdex);
        $('input#AttributeCon').val(hcon);
        $('input#AttributeInt').val(hint);
        $('input#AttributeWis').val(hwis);
        $('input#AttributeCha').val(hcha);

        getTotals();
    }
}

function getHash() {
    var hash = "";
    var a1 = parseInt($('input#AttributeStr').val());
    var a2 = parseInt($('input#AttributeDex').val());
    var a3 = parseInt($('input#AttributeCon').val());
    var a4 = parseInt($('input#AttributeInt').val());
    var a5 = parseInt($('input#AttributeWis').val());
    var a6 = parseInt($('input#AttributeCha').val());
    var attrOne = $('select#ability1').prop('selectedIndex');
    var attrTwo = $('select#ability2').prop('selectedIndex');
    var availPoints = parseInt($('input#AvailablePoints').val());
    var maxPoints = parseInt($('input#AttributeMax').val());
    var minPoints = parseInt($('input#AttributeMin').val());
    var p18 = parseInt($('input.value18').val());
    var p17 = parseInt($('input.value17').val());
    var p16 = parseInt($('input.value16').val());
    var p15 = parseInt($('input.value15').val());
    var p14 = parseInt($('input.value14').val());
    var p13 = parseInt($('input.value13').val());
    var p12 = parseInt($('input.value12').val());
    var p11 = parseInt($('input.value11').val());
    var p10 = parseInt($('input.value10').val());
    var p9 = parseInt($('input.value9').val());
    var p8 = parseInt($('input.value8').val());
    var p7 = parseInt($('input.value7').val().replace('-', ''));
    var p6 = parseInt($('input.value6').val().replace('-', ''));
    var p5 = parseInt($('input.value5').val().replace('-', ''));
    var p4 = parseInt($('input.value4').val().replace('-', ''));
    var p3 = parseInt($('input.value3').val().replace('-', ''));
    var r1 = parseInt($('input#RacialStr').val()) + 4;
    var r2 = parseInt($('input#RacialDex').val()) + 4;
    var r3 = parseInt($('input#RacialCon').val()) + 4;
    var r4 = parseInt($('input#RacialInt').val()) + 4;
    var r5 = parseInt($('input#RacialWis').val()) + 4;
    var r6 = parseInt($('input#RacialCha').val()) + 4;

    hash += '&' + a1;
    hash += '&' + a2;
    hash += '&' + a3;
    hash += '&' + a4;
    hash += '&' + a5;
    hash += '&' + a6;
    hash += '&' + attrOne;
    hash += '&' + attrTwo;
    hash += '&' + availPoints;
    hash += '&' + maxPoints;
    hash += '&' + minPoints;
    hash += '&' + p18;
    hash += '&' + p17;
    hash += '&' + p16;
    hash += '&' + p15;
    hash += '&' + p14;
    hash += '&' + p13;
    hash += '&' + p12;
    hash += '&' + p11;
    hash += '&' + p10;
    hash += '&' + p9;
    hash += '&' + p8;
    hash += '&' + p7;
    hash += '&' + p6;
    hash += '&' + p5;
    hash += '&' + p4;
    hash += '&' + p3;
    hash += '&' + r1;
    hash += '&' + r2;
    hash += '&' + r3;
    hash += '&' + r4;
    hash += '&' + r5;
    hash += '&' + r6;

    return hash;
}

function fullReset() {

    $(document).ready(function () {
        Points = [-20, -16, -12, -9, -6, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19];

        $('input#AttributeMax').val('15');
        $('input#AttributeMin').val('8');
        $('input#AvailablePoints').val('27');

        $('input#AttributeStr').val('8');
        $('input#AttributeDex').val('8');
        $('input#AttributeCon').val('8');
        $('input#AttributeInt').val('8');
        $('input#AttributeWis').val('8');
        $('input#AttributeCha').val('8');

        $('span#RacialStr').html('0');
        $('span#RacialDex').html('0');
        $('span#RacialCon').html('0');
        $('span#RacialInt').html('0');
        $('span#RacialWis').html('0');
        $('span#RacialCha').html('0');

        $('input.value18').val('19');
        $('input.value17').val('15');
        $('input.value16').val('12');
        $('input.value15').val('9');
        $('input.value14').val('7');
        $('input.value13').val('5');
        $('input.value12').val('4');
        $('input.value11').val('3');
        $('input.value10').val('2');
        $('input.value9').val('1');
        $('input.value8').val('0');
        $('input.value7').val('-1');
        $('input.value6').val('-2');
        $('input.value5').val('-4');
        $('input.value4').val('-6');
        $('input.value3').val('-9');

        $('div#customStr').css('display', 'none');
        $('span#RacialStr').css('display', 'block');

        $('div#customDex').css('display', 'none');
        $('span#RacialDex').css('display', 'block');

        $('div#customCon').css('display', 'none');
        $('span#RacialCon').css('display', 'block');

        $('div#customInt').css('display', 'none');
        $('span#RacialInt').css('display', 'block');

        $('div#customWis').css('display', 'none');
        $('span#RacialWis').css('display', 'block');

        $('div#customCha').css('display', 'none');
        $('span#RacialCha').css('display', 'block');

        $('input#RacialStr').val('0');
        $('input#RacialDex').val('0');
        $('input#RacialCon').val('0');
        $('input#RacialInt').val('0');
        $('input#RacialWis').val('0');
        $('input#RacialCha').val('0');

        getTotals();
    });
}

function pointsReset() {
    $('input#AttributeStr').val('8');
    $('input#AttributeDex').val('8');
    $('input#AttributeCon').val('8');
    $('input#AttributeInt').val('8');
    $('input#AttributeWis').val('8');
    $('input#AttributeCha').val('8');

    getTotals();
}


function jsonRace() {
    initialLoad = false;
    $('div#RacialTraits').html('<dl id="RacialTraits"><h3>Racial Traits</h3></dl>');
    $.getJSON('json/races_20221022.json', function (data) {
        var race = $('select#Race').val();
        var subrace = $('select#subRace').val();
        var html = [];
        $.each(data[race].Traits, function (key, val) {
            if (key == "Types") return undefined;
            else if (key == "Constructs") return undefined;
            else
                html.push('<dt><b>' + key + '</b></dt><dd><span>' + val + '</span></dd>');
        });
        $('<dl/>', {
            "class": "RacialTraits",
            html: html.join('')
        }).appendTo('div#RacialTraits');

        if (race === 'Changeling' || race === 'SimicHybrid' || race === 'Warforged' || subrace === 'Dragonmark of Detection' || subrace === 'Dragonmark of Handling' || subrace === 'Dragonmark of Making' || subrace === 'Dragonmark of Passage') {
            $('td#AbilityOption1, td#AbilityMod1').css('display', 'table-cell');
            $('td#AbilityOption2, td#AbilityMod2').css('display', 'none');
        }
        else if ((race === 'HalfElf' && subrace === 'selectSub') || race === 'HalfElf' && subrace === 'Half-Elf Variant' || (race === 'Human' && subrace === 'Human Variant')) {
            $('td#AbilityOption1, td#AbilityMod1, td#AbilityOption2, td#AbilityMod2').css('display', 'table-cell');
        }
        else {
            $('td#AbilityOption1, td#AbilityMod1, td#AbilityOption2, td#AbilityMod2').css('display', 'none');
        }

        if (subrace == 'Dragonmark of Passage') {
            $('span#RacialDex').html(data[race].AbilityScores.Dexterity);
        }
        else if (race == 'SimicHybrid' || race == 'Warforged') {
            $('span#RacialCon').html(data[race].AbilityScores.Constitution);
        }
        else if (subrace == 'Dragonmark of Making') {
            $('span#RacialInt').html(data[race].AbilityScores.Intelligence);
        }
        else if (subrace == 'Dragonmark of Detection' || subrace == 'Dragonmark of Handling') {
            $('span#RacialWis').html(data[race].AbilityScores.Wisdom);
        }
        else if (race == 'Changeling' || (race == 'HalfElf' && subrace !== 'Dragonmark of Detection')) {
            $('span#RacialCha').html(data[race].AbilityScores.Charisma);
        }
        else {
            $('span#RacialStr').html(data[race].AbilityScores.Strength);
            $('span#RacialDex').html(data[race].AbilityScores.Dexterity);
            $('span#RacialCon').html(data[race].AbilityScores.Constitution);
            $('span#RacialInt').html(data[race].AbilityScores.Intelligence);
            $('span#RacialWis').html(data[race].AbilityScores.Wisdom);
            $('span#RacialCha').html(data[race].AbilityScores.Charisma);
        }
        if ((race === 'HalfElf' && subrace === 'selectSub')) {
            $('select#ability1').change();
            $('select#ability2').change();
        }
        getTotals();
    });
}

function raceCustomRace(hrstr, hrdex, hrcon, hrint, hrwis, hrcha) {
    $('div#customStr').css('display', 'block');
    $('input#RacialStr').val('0');
    $('span#RacialStr').css('display', 'none');

    $('div#customDex').css('display', 'block');
    $('input#RacialDex').val('0');
    $('span#RacialDex').css('display', 'none');

    $('div#customCon').css('display', 'block');
    $('input#RacialCon').val('0');
    $('span#RacialCon').css('display', 'none');

    $('div#customInt').css('display', 'block');
    $('input#RacialInt').val('0');
    $('span#RacialInt').css('display', 'none');

    $('div#customWis').css('display', 'block');
    $('input#RacialWis').val('0');
    $('span#RacialWis').css('display', 'none');

    $('div#customCha').css('display', 'block');
    $('input#RacialCha').val('0');
    $('span#RacialCha').css('display', 'none');

    if (isNaN(hrstr, hrdex, hrcon, hrint, hrwis, hrcha)) {
    }
    else {
        $('input#RacialStr').val(hrstr);
        $('input#RacialDex').val(hrdex);
        $('input#RacialCon').val(hrcon);
        $('input#RacialInt').val(hrint);
        $('input#RacialWis').val(hrwis);
        $('input#RacialCha').val(hrcha);
    }

    //  initialLoad = false;
    getTotals();
}
function increment(e) {
    var e = window.event || e;
    var evt = e.target || e.srcElement;
    var abilityType = evt.value;
    var abilityScore = parseInt($('input#' + [abilityType]).val());
    var abilityMax = '';
    if (abilityType == 'AttributeMax') {
        abilityMax = $('input#AttributeMax').attr('max');
        pointsReset();
    }
    else if (abilityType == 'AttributeMin') {
        abilityMax = parseInt($('input#AttributeMax').val());
        pointsReset();
    }
    else if (abilityType == 'AvailablePoints') {
        abilityMax = $('input#AvailablePoints').attr('max');
    }
    else if (abilityType.indexOf('Racial') === 0) {
        abilityMax = $('input#' + abilityType).attr('max');
    }
    else {
        abilityMax = parseInt($('input#AttributeMax').val());
    }

    if (abilityScore == abilityMax) {
        abilityType = null;
        return false;
    }
    else {
        $('input#' + [abilityType]).val(function (i, abilityVal) {
            return ++abilityVal;
        });
        abilityType = null;
    }
    getTotals();
}

function decrement(e) {
    var e = window.event || e;
    var evt = e.target || e.srcElement;
    var abilityType = evt.value;
    var abilityScore = parseInt($('input#' + [abilityType]).val());
    var abilityMin = '';
    if (abilityType == 'AttributeMax') {
        abilityMin = $('input#AttributeMin').val();
        pointsReset();
    }
    else if (abilityType == 'AttributeMin') {
        abilityMin = $('input#AttributeMin').attr('min');
        pointsReset();
    }
    else if (abilityType == 'AvailablePoints') {
        abilityMin = $('input#AvailablePoints').attr('min');
    }
    else if (abilityType.indexOf('Racial') === 0) {
        abilityMin = $('input#' + abilityType).attr('min');
    }
    else {
        abilityMin = parseInt($('input#AttributeMin').val());
    }

    if (abilityScore <= abilityMin) {
        abilityType = null;
        return false;
    }
    else {
        $('input#' + [abilityType]).val(function (i, abilityVal) {
            return --abilityVal;
        });
        abilityType = null;
    }
    getTotals();
}

function increase(e) {
    var e = window.event || e;
    var evt = e.target || e.srcElement;
    var abilityNumber = evt.value;
    var abilityScore = parseInt($('input.value' + [abilityNumber]).val());

    var abilityMax = parseInt($('input.value' + [abilityNumber]).attr('max'));
    var abilityMin = parseInt($('input.value' + [abilityNumber]).attr('min'));
    var high = 18;

    if (abilityScore == abilityMax) {
        abilityNumber = null;
        return false;
    }
    else if (abilityNumber < 8) {
        $('input.value' + [abilityNumber]).val(function (i, abilityVal) {
            do {
                ++Points[abilityNumber];
                --abilityNumber;
            }
            while (abilityNumber >= 3);
            return ++abilityVal;
        });
    }
    else {
        $('input.value' + [abilityNumber]).val(function (i, abilityVal) {
            while (high >= abilityNumber) {
                ++Points[abilityNumber];
                abilityNumber++;
            }
            return ++abilityVal;
        });
    }
    pointsReset();
    for (var j = 3; j <= 18; j++) {
        $('input.value' + [j]).val(Points[j]);
    }
}

function decrease(e) {
    var e = window.event || e;
    var evt = e.target || e.srcElement;
    var abilityNumber = evt.value;
    var abilityScore = parseInt($('input.value' + [abilityNumber]).val());

    var abilityMax = parseInt($('input.value' + [abilityNumber]).attr('max'));
    var abilityMin = parseInt($('input.value' + [abilityNumber]).attr('min'));
    var low = 3;

    if (abilityScore == abilityMin) {
        abilityNumber = null;
        return false;
    }
    else if (abilityNumber >= 8) {
        $('input.value' + [abilityNumber]).val(function (i, abilityVal) {
            do {
                --Points[abilityNumber];
                ++abilityNumber;
            }
            while (abilityNumber <= 18);
            return --abilityVal;
        });
    }
    else {
        $('input.value' + [abilityNumber]).val(function (i, abilityVal) {
            while (low <= abilityNumber) {
                --Points[abilityNumber];
                abilityNumber--;
            }
            return --abilityVal;
        });
    }
    pointsReset();
    for (var j = 3; j <= 18; j++) {
        $('input.value' + [j]).val(Points[j]);
    }
}

$(document).ready(function () {
    if (window.location.hash != "") {
        loadHash(window.location.hash);
    }
});
