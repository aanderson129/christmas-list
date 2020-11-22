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


})