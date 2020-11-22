var giftList
$(function () {

    $(".yesBtn").on("click", function () {
        let item = $(this).closest('div');
        console.log(item)
        $("#yesList").append(item);
        // if ($('#delete').length > 0) {
        //     $("#yesList").append(item);
        // } else {
        //     $("#yesList").append(item);
        //     item.append("<button id='delete' class='btn btn-secondary btn-sm'>Delete</button>")
        // }
    });

    $(".maybeBtn").on("click", function () {
        let item = $(this).closest('div');
        console.log(item)
        $("#maybeList").append(item);
        // if ($('#delete').length > 0) {
        //     $("#maybeList").append(item);
        // } else {
        //     $("#maybeList").append(item);
        //     item.append("<button id='delete' class='btn btn-secondary btn-sm'>Delete</button>")
        // }
    });

    $(".noBtn").on("click", function () {
        let item = $(this).closest('div');
        console.log(item)
        $("#noList").append(item);
        // if ($('#delete').length > 0) {
        //     $("#noList").append(item);
        // } else {
        //     $("#noList").append(item);
        //     item.append("<button id='delete' class='btn btn-secondary btn-sm'>Delete</button>")
        // }
    });

    // delete function
    // $(document).on('click', '#delete', function () {
    //     console.log('gonna do it')
    //     $(this).closest('div').remove();
    // });
    // $("#saveBtn").on("click", function() {
    //     var searchValue = $("#yesList").val();
    
    //     // clear input box
    //     $("#yesList").val("");
    
    //     searchWeather(searchValue);
    //   });

    // const gift = JSON.parse(window.localStorage.getItem("yesList")) || [];

    // if (gift.indexOf(searchValue) === -1) {
    //     gift.push(searchValue);
    //     window.localStorage.setItem("yesList", JSON.stringify(gift));
  
    //     makeRow(searchValue);
    //   }

    // if (gift.length > 0) {
    //     yeslist(gift[gift.length-1]);
    //   }
    
    //   for (var i = 0; i < gift.length; i++) {
    //     makeRow(gift[i]);
    //   }


});