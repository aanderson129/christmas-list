$(function () {

    // $(".yesBtn").on("click", function () {
    //     let item = $(this).closest('p.item');
    //     console.log(item)
    //     item.appendTo("#yesList");
    //     item.append("<button id='delete'>Delete</button>")
    // }); 

    $(".yesBtn").on("click", function () {
        let item = $(this).closest('p.item');
        console.log(item)
        item.appendTo("#yesList");
        item.append("<button id='delete'>Delete</button>")
    }); 






        // delete function
        $('#yesList').on('click', '.delete', function(){
            $(".noBtn").closest('p').remove();
        });
})