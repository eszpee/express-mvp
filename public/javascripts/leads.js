function deleteLead(leadID) {
    $.ajax({
        url: '/lead/' + leadID + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({leadID}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow (wtf)
            console.log("Result: ", res);
            console.log("leadId: ", leadId);
            $("#"+leadId).remove();
        }),
        error: ((error) => {
            console.log("Error:",error);
        })
    })
}