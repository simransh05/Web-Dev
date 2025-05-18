$('body')
    .append($('input') 
        .attr('placeholder','enter your input')
        .addClass('input-box')
    )
    .append(
        $('<button>Add Task</button>')
        .click(()=>{
            const li = $('<li></li>') 
            const span = $('<span></span>').text($('.input-box').val())
            li.append(span)
            .append(
                $('<button>edit</button>')
                .click(()=>{
                    const input = $('<input>').val(span.text())
                    span.replaceWith(input)
                    input.focus()
                    input.blur(()=>{
                        span.text(input.val())
                        input.replaceWith(span)
                    })
                })
            )
            $('.movie-list').append(li)
            $('.input-box').val('')
        })
    )
    .append(
        $('<ul></ul>')
        .addClass('movie-list')
    )
