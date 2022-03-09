const express = require('express');
// const passport = require('passport');
const TestApiService = require('../../services/bk/testApi.service');

const router = express.Router();
const service = new TestApiService();

router.get(
    '/',
    async function (req, res, next) {
        try {
            const list = await service.get();

            res.json({
                message: 'Test api listed',
                list
            });
        } catch (error) {
            next(error)
        }
    });

router.get(
    '/:ID',
    async function (req, res) {
        const { ID } = req.params
        try {
            const item = await service.getOne({ ID });
            res.json(
                {
                    message: 'Test api retrived',
                    item
                }
            );
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

router.post(
    '/',
    async function (req, res) {
        try {
            const testApi = { ...req.body }
            const item = await service.create(testApi);
            res.status(201).json(
                {
                    message: 'Test api Created',
                    item
                }
            );
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

router.put(
    '/:ID',
    async function (req, res) {
        try {
            const { ID } = req.params;
            const testApiToUpdate = { ...req.body, ID }

            const item = await service.update(testApiToUpdate);
            res.json(
                {
                    message: 'Test api updated',
                    item
                }
            );
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

router.delete(
    '/:ID',
    async function (req, res) {
        try {
            const { ID } = req.params

            const item = await service.delete(ID);
            res.json(
                {
                    message: 'Test api deleted',
                    item
                }
            );
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

module.exports = router;
