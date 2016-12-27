import StockSalesWatcher from '/client/lib/ethereum/stocksales'

const StockSales = StockSalesWatcher.StockSales

const tmpl = Template.Module_Fundraising.extend()

tmpl.routes({
  '/': () => TemplateVar.set('rightSection', 'Module_Fundraising_Empty'),
  '/new': () => TemplateVar.set('rightSection', 'Module_Fundraising_New'),
  '/new/individual': () => TemplateVar.set('rightSection', 'Module_Fundraising_New_Individual'),
  '/new/bounded': () => TemplateVar.set('rightSection', 'Module_Fundraising_New_Bounded'),
  '/:id': () => {
    TemplateVar.set('rightSection', 'Module_Fundraising_Info')
    requestAnimationFrame(() => $('#raise').trigger('reload'))
  },
})

tmpl.onCreated(() => {
  TemplateVar.set('rightSection', 'Module_Fundraising_Empty')
})

tmpl.events({
  'click tbody tr': (e) => FlowRouter.go(`/fundraising/${$(e.currentTarget).data('id')}`),
})

tmpl.helpers({
  raises: () => StockSales.find(),
})