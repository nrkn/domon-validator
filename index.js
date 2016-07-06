'use strict'

const tv4 = require( 'tv4' )

const validator = tv4.freshApi()

const sChildNodes = require( './schema/domn.childNodes.schema.json' )
const sComment = require( './schema/domn.comment.schema.json' )
const sDocument = require( './schema/domn.document.schema.json' )
const sDocumentFragment = require( './schema/domn.documentFragment.schema.json' )
const sDocumentType = require( './schema/domn.documentType.schema.json' )
const sElement = require( './schema/domn.element.schema.json' )
const sProcessingInstruction = require( './schema/domn.processingInstruction.schema.json' )
const sText = require( './schema/domn.text.schema.json' )

validator.addSchema( 'domn-childNodes', sChildNodes )
validator.addSchema( 'domn-comment', sComment )
validator.addSchema( 'domn-document', sDocument )
validator.addSchema( 'domn-documentFragment', sDocumentFragment )
validator.addSchema( 'domn-documentType', sDocumentType )
validator.addSchema( 'domn-element', sElement )
validator.addSchema( 'domn-processingInstruction', sProcessingInstruction )
validator.addSchema( 'domn-text', sText )

module.exports = validator
