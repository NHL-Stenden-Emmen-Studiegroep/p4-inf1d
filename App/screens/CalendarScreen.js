import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { Component } from 'react';
import { month } from 'react-big-calendar/lib/utils/dates';

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function drawCalendarMonths(){
    for(var i = 0; i < months.length; i++){
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function ()
            {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();
        document.getElementById("months").appendChild(doc);
    }
}

function loadYears(){
    var startYear = 1900;
    var endYear = 2022;

    for(var i = startYear; i <= endYear; i++){
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function(){
            var selectedYear = i;
            return function(){
                year = selectedYear;
                document.getElementById("curYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        })();
        document.getElementById("years").appendChild(doc);
    }
}

function daysInMonth(month, year){
    let d = new Date(year, month+1, 0);
    return d.getDate();
}

function loadCalendarDays(){
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();

    for(var i = 0; i <= dayofweek; i++){
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    for(var i = 0; i < num; i++){
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + tmp;
        d.className = "day";
        d.innerHTML = tmp;
        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

var selectedDays = new Array();
var mousedown = false;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
