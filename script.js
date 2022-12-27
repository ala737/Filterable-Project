
$(document).on('click','.projects-filter li',function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});